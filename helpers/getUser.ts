"use server"

import { db } from "@/lib/db"

export async function getUserFromClerkId(clerkId:string) {
    try {
        const user = await db.user.findUnique({
            where:{
                clerkId
            }
        })

        return {user, error: null}
    } catch (error) {
        console.log(error)
        return {user: null, error}
    }
}

export async function getUserFromId(id:string) {
    try {
        const user = await db.user.findUnique({
            where:{
                id
            }
        })

        return {user, error: null}
    } catch (error) {
        console.log(error)
        return {user: null, error}
    }
}