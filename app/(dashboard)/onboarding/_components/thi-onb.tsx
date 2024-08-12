"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { UserValuesType } from '@/types'
import { ArrowRightIcon, Cross1Icon } from '@radix-ui/react-icons'
import React, { useState } from 'react'

const ThirdOnboardingStep = ({setStep, userValues, setUserValues}:{setStep: (n:number) => void, userValues:UserValuesType, setUserValues: (user:UserValuesType) => void}) => {
  const [skills, setSkills] = useState<string[]>([])
  const [input, setInput] = useState('')

  const notValid = skills.length === 0

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.trim() !== '') {
      setSkills([...skills, input.trim()])
      setInput('') // Clear the input field
    }
  }

  return (
    <div className='flex flex-col gap-4 items-center justify-center w-full'>
      <div className='text-center'>
        <h2 className={`font-semibold text-4xl leading-normal transition`}>
          Where do you stand
        </h2>
        <p className='text-muted-foreground font-medium'>
          Input your current skill level with proficiency.
        </p>
      </div>

      <div className='w-[85%] flex flex-col gap-6'>
        <div className='relative'>
            <Input
            className='w-full h-14 rounded-full px-6 backdrop-blur-sm'
            placeholder='React'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown} // Use React's onKeyDown event
            />
            <span onClick={() => {
                if(input.trim() !== '') {
                    setSkills([...skills, input.trim()])
                    setInput('')
                }
            }} className={`absolute right-4 top-1/2 -translate-y-1/2 z-[2] bg-foreground rounded-full p-1 ${input.trim() === '' && 'hidden'}`}>
                <ArrowRightIcon className='w-4 h-4 text-background' />
            </span>
        </div>
        <div className='flex items-center flex-wrap gap-3'>
            {skills.map((skill, index) => (
                <div key={index} className='border relative rounded-md px-2 py-1 text-xs font-medium group'>
                    <span onClick={() => setSkills(skills.filter(sk => skill !== sk))} className='group-hover:flex hidden absolute w-full h-full z-[2] bg-background top-0 left-0 items-center justify-center rounded-md'>
                        <Cross1Icon className='w-3 h-3 text-red-500' />
                    </span>
                    {skill}
                </div>
            ))}
        </div>
      </div>
      <div className='flex items-center gap-4'>
                <Button onClick={() => {
                  setStep(2)
                  setUserValues({...userValues, skills: skills})
                }} className='rounded-full px-8 py-6 bg-gradient-to-r from-indigo-500/5 to-emerald-400/5' variant={"outline"}>
                Back
                </Button>
                <Button onClick={() => {
                    setStep(4)
                    setUserValues({...userValues, skills: skills})
                }} disabled={notValid} className='rounded-full px-8 py-6 bg-gradient-to-r from-indigo-500/5 to-emerald-400/5' variant={"outline"}>
                Next
                </Button>
            
            </div>
    </div>
  )
}

export default ThirdOnboardingStep
