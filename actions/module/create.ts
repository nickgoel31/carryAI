"use server"

import { db } from "@/lib/db";
import { UserValuesType } from "@/types";
import { ModuleSchemaAIType, MonthSchemaAIType, RoadmapSchemaAIType } from '@/actions/ai-models/schema';

export async function createModuleInDB(monthId:string, moduleAI: ModuleSchemaAIType){
    const {moduleNumber, title} = moduleAI
    try {
        // Store data in db
        const moduleDB = await db.module.create({
            data:{
                moduleNumber,
                monthId,
                title,
                completionStatus: 0,
                dueDate: new Date(new Date().getTime() + 30*24*60*60*1000),
                isCompleted: false,
            }
        })

        return {moduleDB, error: null}
        
    } catch (error) {
        console.log(error)
        return {moduleDB: null, error}
    }
}