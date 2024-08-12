"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { UserValuesType } from '@/types'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { ArrowRightIcon, Cross1Icon } from '@radix-ui/react-icons'
  

const FourthOnboardingStep = ({setStep, userValues, setUserValues}:{setStep: (n:number) => void, userValues:UserValuesType, setUserValues: (user:UserValuesType) => void}) => {
    const [schedule, setSchedule] = React.useState(userValues.learningPreferences.learningSchedule)
    const [typePref, setTypePref] = React.useState<string[]>(userValues.learningPreferences.contentTypePreference)
    const [input, setInput] = React.useState('')
    const [certGoals, setCertGoals] = React.useState<string[]>(userValues.learningPreferences.certificationGoals)

    const notValid = certGoals.length === 0 || typePref.length === 0 || schedule === ''

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && input.trim() !== '') {
          setCertGoals([...certGoals, input.trim()])
          setInput('') // Clear the input field
        }
      }
  return (
    <div className='flex flex-col gap-4 items-center justify-center w-full'>  
    <div className='text-center'>
      <h2 className={`font-semibold text-4xl leading-normal transition`}>
        Learn it your way
      </h2>
      <p className='text-muted-foreground font-medium'>
        Let&apos;s set your learning preferences.
      </p>
    </div>

    <div className='w-[55%] flex flex-col items-center gap-5'>
        <Select value={schedule} onValueChange={(e) => setSchedule(e)}>
            <SelectTrigger className="w-full h-14">
                <SelectValue placeholder="Learning Schedule" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="daily">Daily</SelectItem>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="flexible">Flexible</SelectItem>
            </SelectContent>
        </Select>

        <div className='space-y-2'>
            <h3 className='text-sm font-semibold'>Preferred Content Type <span className='text-xs text-muted-foreground'>(can select multiple)</span></h3>
            <ToggleGroup type="multiple" value={typePref} onValueChange={(values) => setTypePref(values)} className='w-full items-center justify-start'>
                <ToggleGroupItem  value="videos" className='border'>Videos</ToggleGroupItem>
                <ToggleGroupItem value="text" className='border'>Articles</ToggleGroupItem>
                <ToggleGroupItem value="handsonprojects" className='border'>Interactive Exercises</ToggleGroupItem>
            </ToggleGroup>
        </div>
            
        
        <div className='relative w-[100%]'>
            <Input
            className='w-full h-14 rounded-full px-6 backdrop-blur-sm'
            placeholder='Certification goals, eg- AWS Certified Solutions Architect'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown} // Use React's onKeyDown event
            />
            <span onClick={() => {
                if(input.trim() !== '') {
                    setCertGoals([...certGoals, input.trim()])
                    setInput('')
                }
            }} className={`absolute right-4 top-1/2 -translate-y-1/2 z-[2] bg-foreground rounded-full p-1 ${input.trim() === '' && 'hidden'}`}>
                <ArrowRightIcon className='w-4 h-4 text-background' />
            </span>
        </div>
        <div className='flex items-center flex-wrap gap-3'>
            {certGoals.map((goal, index) => (
                <div key={index} className='border relative rounded-md px-2 py-1 text-xs font-medium group'>
                    <span onClick={() => setCertGoals(certGoals.filter(ce => goal !== ce))} className='group-hover:flex hidden absolute w-full h-full z-[2] bg-background top-0 left-0 items-center justify-center rounded-md'>
                        <Cross1Icon className='w-3 h-3 text-red-500' />
                    </span>
                    {goal}
                </div>
            ))}
        </div>
    
    </div>
    <div className='flex items-center gap-4'>
                <Button onClick={() => {
                    setStep(3)
                    setUserValues({...userValues, learningPreferences: {...userValues.learningPreferences, learningSchedule: schedule, contentTypePreference: typePref, certificationGoals: certGoals}})
                }} className='rounded-full px-8 py-6 bg-gradient-to-r from-indigo-500/5 to-emerald-400/5' variant={"outline"}>
                Back
                </Button>
                <Button onClick={() => {
                    setStep(5)
                    setUserValues({...userValues, learningPreferences: {...userValues.learningPreferences, learningSchedule: schedule, contentTypePreference: typePref, certificationGoals: certGoals}})
                }} disabled={notValid} className='rounded-full px-8 py-6 bg-gradient-to-r from-indigo-500/5 to-emerald-400/5' variant={"outline"}>
                Next
                </Button>
            
            </div>
  </div>
  )
}

export default FourthOnboardingStep