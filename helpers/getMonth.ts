"use server"

import { db } from "@/lib/db"

export async function getMonthFromId(id:string) {
    try {
        const month = await db.month.findUnique({
            where:{
                id
            }
        })

        return {month, error: null}
    } catch (error) {
        console.log(error)
        return {month: null, error}
    }
}

export async function getMonthsFromRoadmapId(roadmapId:string) {
    try {
        const months = await db.month.findMany({
            where:{
                roadmapId
            }
        })

        return {months, error: null}
    } catch (error) {
        console.log(error)
        return {month: null, error}
    }
}