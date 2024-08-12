"use server"

import { db } from "@/lib/db";
import { UserValuesType } from "@/types";
import { MonthSchemaAIType, RoadmapSchemaAIType } from '@/actions/ai-models/schema';

export async function deleteMonthInDB(id:string){
    try {
        // Store data in db
        await db.month.delete({
            where: {
                id,
            },
        })

        return true;
        
    } catch (error) {
        console.log(error)
        return false;
    }
}