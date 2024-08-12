"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { UserValuesType } from '@/types'
import React from 'react'


const FirstOnboardingStep = ({setStep, userValues, setUserValues}:{setStep: (n:number) => void, userValues:UserValuesType, setUserValues: (user:UserValuesType) => void}) => {
    const [input, setInput] = React.useState(userValues.name)
  return (
    <div className='flex flex-col gap-4 items-center justify-center w-full'>  
            <div className='text-center'>
              <h2 className={`font-semibold text-4xl leading-normal transition`}>
                Let&apos;s get you started
              </h2>
              <p className='text-muted-foreground font-medium'>
                CarryAI takes your career to the next level by generating personalized resources and projects.
              </p>
            </div>

            <div className='w-[55%]'>
                <Input value={input} className='w-full h-14 rounded-full px-6 backdrop-blur-sm' placeholder='Your Name' onChange={(e) => setInput(e.target.value)}/>
            
            </div>
            <Button disabled={input.length === 0}  onClick={() => {
                setStep(2)
                setUserValues({...userValues, name: input})
            }} className='rounded-full px-8 py-6 bg-gradient-to-r from-indigo-500/5 to-emerald-400/5' variant={"outline"}>
              Next
            </Button>
          </div>
  )
}

export default FirstOnboardingStep