import { getSubPathsFromLearningPath } from "../getLearningSubpath";
import { getModulesFromMonthId } from "../getModule";
import { getMonthFromId, getMonthsFromRoadmapId } from "../getMonth";
import { getRoadmapFromUserId } from "../getRoadmap";

export async function areMoreMonthsNeededToBeGenerated(userId:string){
    const roadmap = await getRoadmapFromUserId(userId)

    if(roadmap.roadmap){
        const monthCount = Number((roadmap.roadmap.duration).split(' ')[0])
        const existingMonths = await getMonthsFromRoadmapId(roadmap.roadmap.id)
        if(existingMonths.months){
            if(existingMonths.months.length < monthCount){
                return true
            }
            return false
        }
    }
    return false;
}

export async function areMoreModulesNeededToBeGenerated(monthId:string){
    const modules = await getModulesFromMonthId(monthId)

    if(modules.modules && modules.modules.length < 2){
        return true
    }
    return false
}

export async function areMoreSubpathsToBeGenerated(learningPathId:string){
    const subpaths = await getSubPathsFromLearningPath(learningPathId)
    // accounting for exercise
    if(subpaths.subPaths && subpaths.subPaths.length < 6){
        return true
    }
    return false
}