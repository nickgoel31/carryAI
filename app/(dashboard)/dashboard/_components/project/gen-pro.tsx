"use client"

import Loader from '@/components/loader'
import { Button } from '@/components/ui/button'
import { generateProjectFunction } from '@/functions/generate-ai'
import { LearningPathSubpath, Module } from '@prisma/client'
import { redirect, useRouter } from 'next/navigation'
import React from 'react'

const GenerateProjectPage = ({module, subpaths}:{module:Module, subpaths: LearningPathSubpath[]}) => {
    const [loading, setLoading] = React.useState(false)
    const router = useRouter()
    async function generateProject(){
        setLoading(true)
        const projectMake = await generateProjectFunction(subpaths, module)
        if(projectMake.error){
            setLoading(false)
            console.log(projectMake.error)
            return;
        }
        if(projectMake.project && !projectMake.error){
            console.log('Project generated')
            setLoading(false)
            router.push(`/module/${module.id}`)
        }
    }
  return (
    <div className='fixed top-0 left-0 w-screen h-screen bg-black/50 backdrop-blur-md z-[30] flex items-center justify-center flex-col gap-4'>
        {loading ? (
            <>
                <Loader />
                <p className='font-medium text-sm '>Generating Project (ETA: 10s)</p>
            </>
        ):(
            <>
                <p className='font-medium text-sm '>Click to generate project</p>
                <Button onClick={generateProject} variant={'outline'}>Generate Project</Button>
            </>
        )}
    </div>
  )
}

export default GenerateProjectPage