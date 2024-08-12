import { getLearningPathFromModuleId, getSubPathsFromLearningPath, getSubpathsFromModuleId } from "../getLearningSubpath";
import { getModuleFromId } from "../getModule";
import { getMonthsFromRoadmapId } from "../getMonth";
import { getProjectFromModuleId } from "../getProject";
import { getRoadmapFromUserId } from "../getRoadmap";
import { getUserFromId } from "../getUser";

export async function findCurrentPageInfo(pathname:string, firstQuery:string, secondQuery:string){
    const path = pathname.split('/')
    const thirdQuery = path[path.length-1]
    switch(firstQuery){
        case 'dashboard':
            const user = await getUserFromId(secondQuery)
            if(!user.user) return
            switch(thirdQuery){
                case 'roadmap':
                    const roadmap = await getRoadmapFromUserId(user.user.id)
                    if(!roadmap.roadmap) return
                    const months = await getMonthsFromRoadmapId(roadmap.roadmap.id)
                    if(!months.months) return
                    return {roadmap: roadmap.roadmap, months: months.months}
                    break;
            }
            break;
        case 'module':
            const modulecustom = await getModuleFromId(secondQuery)
            if(!modulecustom.module) return
            
            const subpaths = await getSubpathsFromModuleId(modulecustom.module.id)
            if(!subpaths.subPaths) return

            switch(thirdQuery){
                case 'project':
                    const project = await getProjectFromModuleId(modulecustom.module.id)
                    if(!project.project){
                        return {module: modulecustom.module, subpaths: subpaths.subPaths}
                    }
                    return {module: modulecustom.module, subpaths: subpaths.subPaths, project: project.project}
            }

            return {module: modulecustom.module, subpaths: subpaths.subPaths}
            break;
        
        default:
            return;
    }
    
}