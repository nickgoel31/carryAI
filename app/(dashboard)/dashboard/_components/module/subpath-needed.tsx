"use client"

import LoadingGeneration from '@/components/loading-small'
import { Button } from '@/components/ui/button'
import { generateSubpathFunction } from '@/functions/generate-ai'
import { LearningPathSubpath, Module, Month } from '@prisma/client'
import { Sparkles } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const SubpathNeededDiv = ({month, module, learningPathId, subPaths, setSubPaths}:{month:Month, module:Module, learningPathId:string, subPaths:LearningPathSubpath[], setSubPaths: React.Dispatch<React.SetStateAction<LearningPathSubpath[]>>}) => {
    const [loading, setLoading] = useState({state:false, message:''})
    const router = useRouter()

    const setSubpathState = (newSubpaths: LearningPathSubpath[]) => {
        setSubpathState(newSubpaths);
    };
    

    async function generateSubpath() {
        setLoading({state:true, message:'Generating subpaths...'})
        const subpath = await generateSubpathFunction(month, module, subPaths, learningPathId)
        if(!subpath.subpath){
            setLoading({state:false, message:'Failed to generate subpaths'})
            return;
        }
        router.refresh()
        setLoading({state:false, message:''})
        setSubpathState([...subPaths, subpath.subpath])
    }
  return (
    <>
    {loading.state ? (
            <div className='flex flex-col items-center justify-center w-full gap-2'>
                <LoadingGeneration />
                <p className='text-muted-foreground text-sm font-medium'>{loading.message}</p>
            </div>
        ):(
            <div className='w-full flex items-center justify-center flex-col gap-3 pt-4'>
                <p className='text-sm font-semibold'>
                    Generate more subpaths
                </p>
                <Button disabled={loading.state} onClick={generateSubpath} variant={'outline'} className='flex items-center justify-center gap-2'><Sparkles size={18}/>Generate</Button>
            </div>
        )}
    </>
    
  )
}

export default SubpathNeededDiv