"use server"

import { db } from "@/lib/db"

export async function getQuizFromId(id:string) {
    try {
        const quiz = await db.quiz.findUnique({
            where:{
                id
            }
        })

        return {quiz, error: null}
    } catch (error) {
        console.log(error)
        return {quiz: null, error}
    }
}

export async function getQuizFromModuleId(id:string) {
    try {
        const quiz = await db.quiz.findFirst({
            where:{
                moduleId: id
            }
        })

        return {quiz, error: null}
    } catch (error) {
        console.log(error)
        return {quiz: null, error}
    }
}

export async function getQuizQuestionsFromQuizId(quizId:string) {
    try {
        const quizQuestions = await db.quizQuestion.findMany({
            where:{
                quizId
            }
        })

        return {quizQuestions, error: null}
    } catch (error) {
        console.log(error)
        return {quizQuestions: null, error}
    }
}

export async function getQuizOptionsFromQuizQuestionId(quizQuestionId:string){
    try {
        const quizOptions = await db.quizOption.findMany({
            where:{
                questionId: quizQuestionId
            }
        })

        return {quizOptions, error: null}
    } catch (error) {
        console.log(error)
        return {quizOptions: null, error}
    }
}