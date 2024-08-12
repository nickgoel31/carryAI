"use server"

import { db } from "@/lib/db"

export async function getRoadmapFromId(id:string) {
    try {
        const roadmap = await db.roadmap.findUnique({
            where:{
                id
            }
        })

        return {roadmap, error: null}
    } catch (error) {
        console.log(error)
        return {roadmap: null, error}
    }
}

export async function getRoadmapFromUserId(id:string) {
    try {
        const roadmap = await db.roadmap.findFirst({
            where:{
                userId: id
            }
        })

        return {roadmap, error: null}
    } catch (error) {
        console.log(error)
        return {roadmap: null, error}
    }
}