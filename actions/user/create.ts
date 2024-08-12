"use server"

import { db } from "@/lib/db";
import { UserValuesType } from "@/types";

export async function createUserInDB(clerkId:string,email:string, userValues: UserValuesType){
    try {
        // Store data in db

        const user = await db.user.create({
            data:{
                clerkId, 
                email,
                goal: userValues.goals,
                name: userValues.name,
                learningSchedule: userValues.learningPreferences.learningSchedule,
                learningMode: userValues.learningPreferences.learningMode,
                allowDataCollection: userValues.allowDataCollection,
                subscribeToNewsletter: userValues.subscribeToNewsletter,
                certificationGoals: userValues.learningPreferences.certificationGoals,
                skills: userValues.skills,
                contentTypePreference: userValues.learningPreferences.contentTypePreference,    
            }
        })
        return user
    } catch (error) {
        console.log(error)
    }
}