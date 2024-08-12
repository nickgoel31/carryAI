"use server"

import { db } from "@/lib/db"

export async function getInteractiveExerciseFromId(id:string) {
    try {
        const exercise = await db.interactiveExercise.findUnique({
            where:{
                id
            }
        })

        return {exercise, error: null}
    } catch (error) {
        console.log(error)
        return {exercise: null, error}
    }
}

export async function getInteractiveExercisesFromLearningPathId(id:string) {
    try {
        const exercise = await db.interactiveExercise.findMany({
            where:{
                learningPathId: id
            }
        })

        return {exercise, error: null}
    } catch (error) {
        console.log(error)
        return {exercise: null, error}
    }
}

export async function getOptionsFromInteractiveExerciseId(id:string) {
    try {
        const options = await db.interactiveExerciseOption.findMany({
            where:{
                exerciseId:id,
            }
        })

        return {options, error: null}
    } catch (error) {
        console.log(error)
        return {options: null, error}
    }
}