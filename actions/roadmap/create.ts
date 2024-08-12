"use server"

import { db } from "@/lib/db";
import { UserValuesType } from "@/types";
import { RoadmapSchemaAIType } from '@/actions/ai-models/schema';

export async function createRoadmapInDB(userId:string, roadmapAI: RoadmapSchemaAIType){
    const {currentMonth, duration, prompt, userGoal} = roadmapAI
    try {
        // Store data in db
        const roadmap = await db.roadmap.create({
            data:{
                userId,
                currentMonth,
                duration,
                prompt,
                userGoal
            }
        })

        return {roadmap, error: null}
        
    } catch (error) {
        console.log(error)
        return {roadmap: null, error}
    }
}