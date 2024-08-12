"use server"

import { db } from "@/lib/db";
import { settingsFormSchema, UserValuesType } from "@/types";
import z from "zod";

export async function updateUserInDB(userId:string,values:z.infer<typeof settingsFormSchema>){
    const validatedFields = settingsFormSchema.safeParse(values)
    if(!validatedFields.success){
        throw new Error('Invalid fields')
    }
    const {
        name,
        goal,
        allowDataCollection,
        certificationGoals,
        contentTypePreference,
        skills,
        subscribeToNewsletter,
        learningMode,
        learningSchedule
    } = validatedFields.data
    try {
        // Store data in db

        const user = await db.user.update({
            where:{
                id:userId,
            },
            data:{
                name,
                goal,
                allowDataCollection,
                certificationGoals,
                contentTypePreference,
                skills,
                subscribeToNewsletter,
                learningMode,
                learningSchedule
            }
        })
        return user
    } catch (error) {
        console.log(error)
    }
}