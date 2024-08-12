"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"

export async function updateExerciseInDB(exerciseId:string, isCompleted:boolean){
    await db.interactiveExercise.update({
        where:{
            id:exerciseId,
        },
        data:{
            isCompleted
        }
    })

    revalidatePath('/');
}