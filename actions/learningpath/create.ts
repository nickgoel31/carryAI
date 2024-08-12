"use server"

import { db } from "@/lib/db";
import { UserValuesType } from "@/types";
import { ModuleSchemaAIType, MonthSchemaAIType, RoadmapSchemaAIType } from '@/actions/ai-models/schema';

export async function createLearningPathInDB(moduleId: string){
    try {
        // Store data in db
        const learningPath = await db.learningPath.create({
            data:{
                moduleId,
            }
        })

        return {learningPath, error: null}
        
    } catch (error) {
        console.log(error)
        return {learningPath: null, error}
    }
}