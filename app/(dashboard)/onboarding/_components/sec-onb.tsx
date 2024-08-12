"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { UserValuesType } from '@/types'


const SecondOnboardingStep = ({setStep, userValues, setUserValues}:{setStep: (n:number) => void, userValues:UserValuesType, setUserValues: (user:UserValuesType) => void}) => {
    const [input, setInput] = React.useState(userValues.goals)
    const [preferredMode, setPreferredMode] = React.useState<string[]>(userValues.learningPreferences.learningMode)

    const notValid = input.length === 0 || preferredMode.length === 0
  return (
    <div className='flex flex-col gap-4 items-center justify-center w-full'>  
            <div className='text-center'>
              <h2 className={`font-semibold text-4xl leading-normal transition`}>
                Desire. Plan. Achieve.
              </h2>
              <p className='text-muted-foreground font-medium'>
                Input your desired career goals and we&apos;ll generate a personalized roadmap for you.
              </p>
            </div>

            <div className='w-[85%] flex flex-col gap-6'>
                <Input className='w-full h-14 rounded-full px-6 backdrop-blur-sm text-center font-semibold' placeholder='I want to become a Frontend Developer' onChange={(e) => setInput(e.target.value)} value={input}/>

                <div className='space-y-2'>
                    <h3 className='text-sm font-semibold'>Preferred Learning Mode <span className='text-xs text-muted-foreground'>(can select multiple)</span></h3>
                    <ToggleGroup type="multiple" value={preferredMode} onValueChange={(values) => setPreferredMode(values)} className='w-full items-center justify-start'>
                        <ToggleGroupItem  value="videos" className='border'>Videos</ToggleGroupItem>
                        <ToggleGroupItem value="text" className='border'>Text</ToggleGroupItem>
                        <ToggleGroupItem value="handsonprojects" className='border'>Hands-on Projects</ToggleGroupItem>
                    </ToggleGroup>
                </div>

            
            </div>
            <div className='flex items-center gap-4'>
                <Button onClick={() => {
                  setStep(1)
                  setUserValues({...userValues, goals: input, learningPreferences: {...userValues.learningPreferences, learningMode: preferredMode}})
                }} className='rounded-full px-8 py-6 bg-gradient-to-r from-indigo-500/5 to-emerald-400/5' variant={"outline"}>
                Back
                </Button>
                <Button onClick={() => {
                    setStep(3)
                    setUserValues({...userValues, goals: input, learningPreferences: {...userValues.learningPreferences, learningMode: preferredMode}})
                }} disabled={notValid} className='rounded-full px-8 py-6 bg-gradient-to-r from-indigo-500/5 to-emerald-400/5' variant={"outline"}>
                Next
                </Button>
            
            </div>
          </div>
  )
}

export default SecondOnboardingStep