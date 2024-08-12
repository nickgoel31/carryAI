"use server"

import { db } from "@/lib/db";
import { IntExerciseSchemaAIType, ProjectSchemaAIType, QuizSchemaAIType } from "../ai-models/schema";
import { InteractiveExercise } from "@prisma/client";


export async function createInteractiveExerciseWithOptionsInDB(learningPathId:string, intExerciseAI:IntExerciseSchemaAIType){
    try {
        // Store data in db
        const exerciseDB = await db.interactiveExercise.create({
            data:{
                description: intExerciseAI.description,
                learningPathId,
                difficultyLevel: intExerciseAI.difficultyLevel,
                sequence: intExerciseAI.sequence,
                title: intExerciseAI.title,
                type: intExerciseAI.type,
                correctOption: intExerciseAI.correctOption,
                options:{
                    createMany:{
                        data: intExerciseAI.options!.map((option) => {
                            return {
                                content: option.content,
                                isCorrect: option.isCorrect,
                                explanation: option.explanation,
                                optionNumber: option.optionNumber,
                            }
                        })
                    }
                }
            }
        })

        return {exerciseDB, error: null}
        
    } catch (error) {
        console.log(error)
        return {exerciseDB: null, error}
    }
}

export async function createInteractiveExerciseWithoutOptionsInDB(learningPathId:string, intExerciseAI:IntExerciseSchemaAIType){
    try {
        // Store data in db
        const exerciseDB = await db.interactiveExercise.create({
            data:{
                description: intExerciseAI.description,
                learningPathId,
                difficultyLevel: intExerciseAI.difficultyLevel,
                sequence: intExerciseAI.sequence,
                title: intExerciseAI.title,
                type: intExerciseAI.type,
                correctAnswer: intExerciseAI.correctAnswer,
            }
        })

        return {exerciseDB, error: null}
        
    } catch (error) {
        console.log(error)
        return {exerciseDB: null, error}
    }
}