"use server"

import { db } from "@/lib/db";
import { ProjectSchemaAIType, QuizSchemaAIType } from "../ai-models/schema";


export async function createQuizInDB(title:string, moduleId:string){
    try {
        // Store data in db
        const quizDB = await db.quiz.create({
            data:{
                moduleId,
                title,
                noOfQuestions: 10,
                description: `This quiz will cover all the topics from ${title} you have studied till now`
            }
        })

        return {quizDB, error: null}
        
    } catch (error) {
        console.log(error)
        return {quizDB: null, error}
    }
}

export async function createQuizQuestionWithOptionsInDB(quizId:string, quizQuestionAI:QuizSchemaAIType){
    try {
        // Store data in db
        const quizDB = await db.quizQuestion.create({
            data:{
                description: quizQuestionAI.description,
                quizId,
                difficultyLevel: quizQuestionAI.difficultyLevel,
                sequence: quizQuestionAI.sequence,
                title: quizQuestionAI.title,
                type: quizQuestionAI.type,
                correctOptionNumber: quizQuestionAI.correctOption,
                options:{
                    createMany:{
                        data: quizQuestionAI.options!.map((option) => {
                            return {
                                title: option.content,
                                optionNumber: option.optionNumber,
                                content: '',
                                option: '',
                                isCorrect: quizQuestionAI.correctOption === option.optionNumber
                            }
                        })
                    }
                }
            }
        })

        return {quizDB, error: null}
        
    } catch (error) {
        console.log(error)
        return {quizDB: null, error}
    }
}

export async function createQuizQuestionWithoutOptionsInDB(quizId:string, quizQuestionAI:QuizSchemaAIType){
    try {
        // Store data in db
        const quizDB = await db.quizQuestion.create({
            data:{
                description: quizQuestionAI.description,
                quizId,
                difficultyLevel: quizQuestionAI.difficultyLevel,
                sequence: quizQuestionAI.sequence,
                title: quizQuestionAI.title,
                type: quizQuestionAI.type,
                correntAnswer: quizQuestionAI.correctAnswer,
            }
        })

        return {quizDB, error: null}
        
    } catch (error) {
        console.log(error)
        return {quizDB: null, error}
    }
}