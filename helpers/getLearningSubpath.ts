"use server"

import { db } from "@/lib/db"

export async function getLearningPathFromModuleId(id:string) {
    try {
        const learningPath = await db.learningPath.findUnique({
            where:{
                moduleId: id
            }
        })

        return {learningPath, error: null}
    } catch (error) {
        console.log(error)
        return {learningPath: null, error}
    }
}

export async function getSubPathsFromLearningPath(id:string) {
    try {
        const subPaths = await db.learningPathSubpath.findMany({
            where:{
                learningPathId: id
            }
        })

        return {subPaths: subPaths, error: null}
    } catch (error) {
        console.log(error)
        return {subPaths: null, error}
    }
}

export async function getSubpathsFromModuleId(moduleId:string) {
    try {
        const learningPath = await getLearningPathFromModuleId(moduleId)
        if(!learningPath.learningPath) return {subPaths: null, error: 'No learning path found'}
        const subPaths = await db.learningPathSubpath.findMany({
            where:{
                learningPathId: learningPath.learningPath.id
            }
        })

        return {subPaths, error: null}
    } catch (error) {
        console.log(error)
        return {subPaths: null, error}
    }
}