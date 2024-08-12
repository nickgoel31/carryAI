"use server"

import { db } from "@/lib/db";
import { ProjectSchemaAIType } from "../ai-models/schema";


export async function createProjectInDB(moduleId:string, projectAI: ProjectSchemaAIType){
    const {checkParameterForAI,problemStatement,title,hints} = projectAI
    try {
        // Store data in db
        const projectDB = await db.project.create({
            data:{
                moduleId,
                checkParameter: checkParameterForAI,
                problemStatement,
                title,
                hints,
                isProjectCompleted:false,
            }
        })

        return {projectDB, error: null}
        
    } catch (error) {
        console.log(error)
        return {projectDB: null, error}
    }
}