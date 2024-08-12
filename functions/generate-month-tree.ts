import { Month, Roadmap } from "@prisma/client";
import { generateModuleFunction, generateMonthFunction, generateSubpathWithToolsFunction } from "./generate-ai";
import { createLearningPathInDB } from "@/actions/learningpath/create";
import { deleteMonthInDB } from "@/actions/month/delete";
import { deleteModuleInDB } from "@/actions/module/delete";
import { deleteLearningPathInDB } from "@/actions/learningpath/delete";

export async function generateMonthTreeFunction(previousMonths:Month[], roadmap:Roadmap){
    let success = false;
    const {month} = await generateMonthFunction(previousMonths, roadmap)
    if(!month){
        console.log('Failed to generate month')
        return {success}
    }
    setTimeout(async () => {
        const {module, error} = await generateModuleFunction(month,[])
        
        if(!module){
            console.log('Failed to generate module')
            await deleteMonthInDB(month.id)
            return {success}
        }
        const {learningPath} = await createLearningPathInDB(module.id)
        if(!learningPath){
            console.log('Failed to generate learningpath')
            await deleteMonthInDB(month.id)
            await deleteModuleInDB(module.id)
            return {success}
        }
        setTimeout(async () => {
            const {subpath} = await generateSubpathWithToolsFunction(month, module,[], learningPath.id)
            if(!subpath){
                await deleteMonthInDB(month.id)
                await deleteModuleInDB(module.id)
                await deleteLearningPathInDB(learningPath.id)
                return {success}
            }
            success = true;
        },2000)
    }, 3000)
    return {success, month}
}