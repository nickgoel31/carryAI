"use server"

import { db } from "@/lib/db";
import { UserValuesType } from "@/types";

export async function deleteUserInDB(id:string){
    try {
        // Store data in db

        await db.user.delete({
            where:{
                id
            }
        })

        return true
    } catch (error) {
        console.log(error)
    }
}