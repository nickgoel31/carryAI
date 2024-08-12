"use client"

import React, { useEffect, useState } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { InteractiveExercise, InteractiveExerciseOption, LearningPathSubpath, Module, Month } from '@prisma/client'
import SubpathNeededDiv from './subpath-needed'
import LoadingGeneration from '@/components/loading-small'
import { Router, Sparkles } from 'lucide-react'
import { generateInteractiveExerciseFunction, generateSubpathFunction, generateSubpathWithToolsFunction } from '@/functions/generate-ai'
import { useRouter } from 'next/navigation'
import { completedSubpaths } from '@/helpers/logical/completeSubpaths'
import { updateCompletionStatusInDB } from '@/actions/module/update'
import { updateSubpathCompletionStatusInDB } from '@/actions/subpath/update'
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
import { getOptionsFromInteractiveExerciseId } from '@/helpers/getInteractiveExercise'
import useInteractiveExerciseOptions from '@/hooks/useOptions'
import { updateExerciseInDB } from '@/actions/exercise/update'
import ExerciseComponent from '../exercise/exe'
  

const SubpathsList = ({isNeeded, month, module, learningPathId, subPaths,completedSubPaths, exercises, completedExercises}:{isNeeded:boolean, month:Month, module:Module, learningPathId:string, subPaths:LearningPathSubpath[],completedSubPaths:LearningPathSubpath[], exercises: InteractiveExercise[], completedExercises: InteractiveExercise[]}) => {
    const [subpathState, setSubpathState] = React.useState<LearningPathSubpath[]>(subPaths)
    const [exerciseState, setExerciseState] = React.useState<InteractiveExercise[]>(exercises)
    const [loading, setLoading] = useState<{state:boolean, message:string}>({state:false, message:''})
    const [error, setError] = useState('')

    //get the options for the all the exercises
    function GetOptions(exerciseId:string){
        const {options} = useInteractiveExerciseOptions(exerciseId)
        return options
    }

    
    const [completedPaths, setCompletedPaths] = useState<LearningPathSubpath[]>(completedSubPaths)
    const [completedExercisesState, setCompletedExercises] = useState<InteractiveExercise[]>(completedExercises)
    async function generateSubpath() {
        setLoading({ state: true, message: 'Generating subpath...' });
        const result = await generateSubpathWithToolsFunction(month, module, subpathState, learningPathId);
        if(result.error){
            setLoading({ state: false, message: result.error });
            toast.error(result.error)
        }
        if (!result.subpath) {
            setLoading({ state: false, message: 'Failed to generate subpath' });
            return;
        } 
        console.log('Generated subpath:', result.subpath);
        setSubpathState([...subpathState, result.subpath]);
        console.log('Subpath state:', subpathState);
        setLoading({ state: false, message: '' });
    }
    async function generateExercise() {
        setLoading({ state: true, message: 'Generating exercise...' });
        const result = await generateInteractiveExerciseFunction(module.title, learningPathId, subpathState, exerciseState);
        if(result.error){
            setLoading({ state: false, message: result.error });
            toast.error(result.error)
        }
        if (!result.exercise) {
            setLoading({ state: false, message: 'Failed to generate exercise' });
            return;
        } 
        console.log('Generated subpath:', result.exercise);
        setExerciseState([...exerciseState, result.exercise]);
        console.log('Subpath state:', subpathState);
        setLoading({ state: false, message: '' });
    }

    const updateCompletionStatus = async (subpath:LearningPathSubpath) => {
    
        const updatedSubpath = subpathState.find(sp => sp.id === subpath.id)
        if(!updatedSubpath) return;

        //check if the subpath is already completed
        if(updatedSubpath.isCompleted) return;

        updatedSubpath.isCompleted = true;

        //update the subpath as completed
        await updateSubpathCompletionStatusInDB(subpath.id, true)

        setCompletedPaths([...completedPaths, subpath])
        
        let completionStatus = Math.floor(((completedPaths.length+completedExercisesState.length)/(subPaths.length+exerciseState.length)) * 100)

        if(completionStatus > 100){
            completionStatus = 100
        }
        if(completionStatus < 0) completionStatus = 0;

        //update the completion status
        await updateCompletionStatusInDB(module.id, completionStatus)
    }

    
    
    
  return (
    <>
    {error && (
        <div className='w-full p-4 bg-red-300 text-red-900 rounded-lg'>
            <p>{error}</p>
        </div>
    )}
    <div className='flex items-start  justify-beween mx-auto gap-40 max-w-screen-md w-screen-md'>
    <div className='space-y-8 flex flex-col'>
        {subpathState.map((subpath,index) => (
            <Drawer key={subpath.id}> 
                <DrawerTrigger>
                    <div  className="relative group">
                        <div className={`absolute -inset-1 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-1000 group-hover:duration-200`}></div>
                            <div className={`relative px-7 py-6 bg-[#151515] dark:bg-[#171717] ring-1 ring-gray-900/5 rounded-lg leading-none flex items-center justify-center space-x-6 ${subpath.isCompleted && 'border border-emerald-500/30'}`}>
                            <div className="space-y-3 cursor-pointer">
                                <p className='text-sm font-medium text-muted-foreground'>Subpath #{index+1}</p>
                                <p className={`font-semibold group-hover:text-emerald-300 transition group-hover:duration-200 duration-1000`}>{subpath.title}</p>
                            </div>
                        </div>
                    </div>
                </DrawerTrigger>
                <DrawerContent className="p-6 space-y-6">
                    <div>
                        <h1 className='text-xl font-semibold'>{subpath.title}</h1>
                    </div>
                    {subpath.type === "article" ? (
                        <div>
                            <p className='text-sm font-semibold'>Visit Link</p>
                            <Button onClick={() => updateCompletionStatus(subpath)}  asChild variant={'link'} className='text-blue-300'>
                                <Link href={subpath.link} target="_blank">{subpath.link}</Link>
                            </Button>
                        </div>
                    ):subpath.type === "video" ? (
                        <div className="space-y-4">
                            <p className='text-sm font-semibold'>Watch Video</p>
                            <Link onClick={() => updateCompletionStatus(subpath)} target="_blank" href={subpath.link} className='w-64 flex items-center justify-center aspect-video border rounded-lg text-sm font-semibold'>
                                Watch on youtube
                            </Link>
                        </div>
                    ):''}
                </DrawerContent>
            </Drawer>
        ))}    
        {isNeeded && (
        <>
        {loading.state ? (
                <div className='flex flex-col items-center justify-center w-full gap-2'>
                    <LoadingGeneration />
                    <p className='text-muted-foreground text-sm font-medium'>{loading.message}</p>
                </div>
            ):(
                <>
                {subpathState.length === 1 || subpathState.length === 0 || subpathState.length === 2 || subpathState.length === 4 ? (
                    <div className='w-full flex items-center justify-center flex-col gap-3 pt-4'>
                        <p className='text-sm font-semibold'>
                            Generate more subpaths
                        </p>
                        <Button disabled={loading.state} onClick={generateSubpath} variant={'outline'} className='flex items-center justify-center gap-2'><Sparkles size={18}/>Generate Subpath</Button>
                    </div>
                ) : subpathState.length % 2 !== 0 && exerciseState.length === Math.floor(subpathState.length/2) && (
                    <div className='w-full flex items-center justify-center flex-col gap-3 pt-4'>
                        <p className='text-sm font-semibold'>
                            Generate more subpaths
                        </p>
                        <Button disabled={loading.state} onClick={generateSubpath} variant={'outline'} className='flex items-center justify-center gap-2'><Sparkles size={18}/>Generate Subpath</Button>
                    </div>
                )}
                </>
            )}
        </>
    )}
        
    </div>
        <div className='space-y-8 flex flex-col py-10'>
            {exerciseState.map((exercise,index) => (
                <ExerciseComponent key={exercise.id} exercise={exercise}/>
            ))}
            
        <>
        {loading.state ? (
                <div className='flex flex-col items-center justify-center w-full gap-2'>
                    <LoadingGeneration />
                    <p className='text-muted-foreground text-sm font-medium'>{loading.message}</p>
                </div>
            ):(
                <>
                {subpathState.length % 2 === 0 && exerciseState.length !== Math.floor(subpathState.length/2) && (
                    <div className='w-full flex items-center justify-center flex-col gap-3 pt-4'>
                        <p className='text-sm font-semibold'>
                            Generate Interactive Exercise
                        </p>
                        <Button disabled={loading.state} onClick={generateExercise} variant={'outline'} className='flex items-center justify-center gap-2'><Sparkles size={18}/>Generate Exercise</Button>
                    </div>
            )}
                </>
            )}
        </>
        </div>
    </div>
    
    </>

  )
}

export default SubpathsList