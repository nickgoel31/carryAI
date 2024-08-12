"use server"

import { db } from "@/lib/db";
import { UserValuesType } from "@/types";
import { ModuleSchemaAIType, MonthSchemaAIType, RoadmapSchemaAIType, SubPathSchemaAIType } from '@/actions/ai-models/schema';

export async function createSubpathInDB(learningPathId: string, subPath: SubPathSchemaAIType){
    const {link, sequence, title, type} = subPath
    try {
        // Store data in db
        const subPath = await db.learningPathSubpath.create({
            data:{
                learningPathId,
                isCompleted: false,
                isViewed: false,
                link,
                sequence,
                title,
                type,
            }
        })

        return {subPath, error: null}
        
    } catch (error) {
        console.log(error)
        return {subPath: null, error}
    }
}