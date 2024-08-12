"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"

export async function updateCompletionStatusInDB(moduleId:string, completionStatus: number){
    await db.module.update({
        where:{
            id:moduleId,
        },
        data:{
            completionStatus
        }
    })

    revalidatePath('/');
}