"use client"

import { createQuizInDB } from '@/actions/quiz/create'
import Loader from '@/components/loader'
import { Button } from '@/components/ui/button'
import { generateProjectFunction, generateQuizFunction } from '@/functions/generate-ai'
import { LearningPathSubpath, Module } from '@prisma/client'
import { redirect, useRouter } from 'next/navigation'
import React from 'react'

const GenerateQuizPage = ({module}:{module:Module}) => {
    const [loading, setLoading] = React.useState(false)
    const router = useRouter()
    async function generateQuiz(){
        setLoading(true)
        const {quizDB} = await createQuizInDB(module.title,module.id)
        if(!quizDB){
            setLoading(false)
            console.log('Error creating quiz')
            return
        }
        const quizMake = await generateQuizFunction(quizDB,[])
        if(quizMake.error){
            setLoading(false)
            console.log(quizMake.error)
            return;
        }
        if(quizMake.quiz && !quizMake.error){
            console.log('Quiz generated')
            setLoading(false)
            router.push(`/module/${module.id}`)
        }
    }
  return (
    <div className='fixed top-0 left-0 w-screen h-screen bg-black/50 backdrop-blur-md z-[30] flex items-center justify-center flex-col gap-4'>
        {loading ? (
            <>
                <Loader />
                <p className='font-medium text-sm '>Generating Quiz (ETA: 40s)</p>
            </>
        ):(
            <>
                <p className='font-semibold text-lg '>Click to generate quiz</p>
                <p className='max-w-screen-sm mx-auto text-center text-xs font-medium text-muted-foreground'>
                    CarryAI is a free project because of this it can&apos;t generate quiz at the time of roadmap creation. We are working hard to bring you the best experience. Thank you for your patience.
                </p>
                <Button onClick={generateQuiz} variant={'outline'}>Generate Quiz</Button>
            </>
        )}
    </div>
  )
}

export default GenerateQuizPage