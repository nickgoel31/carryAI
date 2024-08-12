"use client"

import React, { useEffect, useRef, useState } from 'react'
import { InteractiveExercise, InteractiveExerciseOption, LearningPathSubpath, Module, Month } from '@prisma/client'
import { cn } from '@/lib/utils'
import { toast } from 'sonner'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

import useInteractiveExerciseOptions from '@/hooks/useOptions'
import { updateExerciseInDB } from '@/actions/exercise/update'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { answerCheckerAIFunction } from '@/functions/generate-ai'
import { AnswerCheckerSchemaAIType } from '@/actions/ai-models/schema'


const ExerciseComponent = ({exercise}:{exercise:InteractiveExercise}) => {
    const {options} = useInteractiveExerciseOptions(exercise.id)
    const [userSelectedRightOption, setUserSelectedRightOption] = useState(exercise.isCompleted)
    const [optionSelected, setOptionSelected] = useState(exercise.isCompleted)

    const textRef = useRef<HTMLTextAreaElement>(null)
    const [answer, setAnswer] = useState('')
    const [loading, setLoading] = useState(false)

    const [userAnsweredQuestion, setUserAnsweredQuestion] = useState(exercise.isCompleted)
    const [correctAnswerAnsweredByUser, setCorrectAnswerAnsweredByUser] = useState(exercise.isCompleted)
    const [answerCheckByAI, setAnswerCheckByAI] = useState<AnswerCheckerSchemaAIType | null>()

    async function selectOptionFromExercise(option:InteractiveExerciseOption){
        setOptionSelected(true)
        //check if the exercise is already completed
        if(exercise.isCompleted) return;

        //check if the option is correct
        if(option.isCorrect){
            exercise.isCompleted = true;
            setUserSelectedRightOption(true)
            //update the exercise as completed
            await updateExerciseInDB(exercise.id, true)
        } else {
            setUserSelectedRightOption(false)
        }
    }

    async function handleAnswerSubmit(){
        setLoading(true)
        setUserAnsweredQuestion(true)
        if(exercise.isCompleted) return;

        //correct asnwer checker
        if(!exercise.correctAnswer) return;
        const {answerAI} = await answerCheckerAIFunction(answer, exercise.correctAnswer)
        if(!answerAI) return;
        setAnswerCheckByAI(answerAI)
        if(answerAI?.markedAs === 'correct'){
            setCorrectAnswerAnsweredByUser(true)
            setUserAnsweredQuestion(true)
            await updateExerciseInDB(exercise.id, true)
        } else {
            setUserAnsweredQuestion(true)
            setCorrectAnswerAnsweredByUser(false)
        }
        setLoading(false);
    }
  return (
    <Drawer> 
                <DrawerTrigger>
                    <div  className="relative group max-w-xl w-48">
                        <div className={`absolute -inset-1 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-1000 group-hover:duration-200`}></div>
                            <div className={`relative px-7 py-6 bg-[#151515] dark:bg-[#171717] ring-1 ring-gray-900/5 rounded-lg leading-none flex items-center justify-center space-x-6 ${exercise.isCompleted && 'border border-emerald-500/30'}`}>
                            <div className="space-y-3 cursor-pointer">
                                <p className='text-sm font-medium text-muted-foreground'>Exercise #{exercise.sequence}</p>
                                <p className={`font-semibold group-hover:text-emerald-300 transition group-hover:duration-200 duration-1000`}>{exercise.title}</p>
                            </div>
                        </div>
                    </div>
                </DrawerTrigger>
                <DrawerContent className="p-6 space-y-3">
                    <div className='space-y-2'>
                        <div className='items-center flex gap-3'>
                            <p className='text-sm font-medium text-muted-foreground'>{exercise.title}</p>
                            <p className='p-1 px-3 rounded-full text-xs font-medium border'>
                                {exercise.isCompleted ? 'Completed' : 'Not completed'}
                            </p>
                            <p className={cn('p-1 px-3 rounded-full text-xs font-medium border capitalize', exercise.difficultyLevel === 'easy' ? 'bg-emerald-500/5 border-emerald-500/20 text-emerald-200' : exercise.difficultyLevel === 'hard' ? 'bg-red-500/5 border-red-500/20 text-red-200':'')}>
                                {exercise.difficultyLevel}
                            </p>
                        </div>
                        <h1 className='text-xl font-semibold'>{exercise.description}</h1>
                    </div>
                   {exercise.type === 'objective' ? (
                     <>
                     <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                     {options.map((option) => (
                         <div onClick={() => selectOptionFromExercise(option)} key={option.id} className={cn('p-4  border rounded-md cursor-pointer hover:bg-foreground/10 transition', exercise.isCompleted && option.isCorrect ? 'border-emerald-500/60' : exercise.isCompleted && !option.isCorrect ? 'border-destructive/60' : '')}>
                             <p className={cn(`text-sm font-semibold`, exercise.isCompleted && option.isCorrect ? 'text-emerald-300' : exercise.isCompleted && !option.isCorrect ? 'text-red-300' : '')}>{option.content}</p>
                         </div>
                     ))}
                    </div>
                    {optionSelected && userSelectedRightOption && (
                        <div className='text-sm font-semibold text-emerald-400'>
                            <p>Correct answer!</p>
                        </div>
                    )}
                    {optionSelected && !userSelectedRightOption && (
                        <div className='text-sm font-semibold text-red-400'>
                            <p>Wrong answer! Please try again.</p>
                        </div>
                    )}
                     </>
                   ):(
                    <>
                    <div className='space-y-4'>
                        <Textarea ref={textRef} value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder='Write your answer here. Minimum 50 words' className='h-32 max-h-32'/>
                        <Button disabled={answer.length < 50 || loading || correctAnswerAnsweredByUser} onClick={handleAnswerSubmit}>{loading ? 'Checking answer' : 'Submit answer'}</Button>
                    </div>
                    {answerCheckByAI && userAnsweredQuestion && !correctAnswerAnsweredByUser && (
                        <div className='text-sm font-semibold text-red-400'>
                            <p>Wrong answer! Please try again.</p>
                            <p className='rating'>
                                Remarks: {answerCheckByAI?.remarks}
                            </p>
                        </div>
                    )}
                    {answerCheckByAI && userAnsweredQuestion && correctAnswerAnsweredByUser && (
                        <div className='text-sm font-semibold text-emerald-400'>
                            <p>{answerCheckByAI?.remarks}</p>
                        </div>
                    )}
                    </>

                   )}
                </DrawerContent>
            </Drawer>
  )
}

export default ExerciseComponent