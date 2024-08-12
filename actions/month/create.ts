"use server"

import { db } from "@/lib/db";
import { UserValuesType } from "@/types";
import { MonthSchemaAIType, RoadmapSchemaAIType } from '@/actions/ai-models/schema';

export async function createMonthInDB(roadmapId:string, monthAI: MonthSchemaAIType){
    const {isCurrentMonth, isMonthCompleted, month,  title} = monthAI
    try {
        // Store data in db
        const monthDB = await db.month.create({
            data:{
                roadmapId,
                isCurrentMonth,
                isMonthCompleted,
                month,
                title
            }
        })

        return {monthDB, error: null}
        
    } catch (error) {
        console.log(error)
        return {monthDB: null, error}
    }
}