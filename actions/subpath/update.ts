"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"

export async function updateSubpathCompletionStatusInDB(subPathId:string, completionStatus: boolean){
    await db.learningPathSubpath.update({
        where:{
            id:subPathId,
        },
        data:{
            isCompleted:completionStatus
        }
    })

    revalidatePath('/');
}