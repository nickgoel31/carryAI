"use client"

import React from 'react'
import MonthComponent from '../roadmap/month-comp'
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import { Month, Roadmap } from '@prisma/client';
import { generateMonthTreeFunction } from '@/functions/generate-month-tree';
import { toast } from 'sonner';
import Loader from '@/components/loader';
import useModules from '@/hooks/useModules';

const MonthsList = ({months, roadmap, areMoreMonthsRequired}:{months:Month[], roadmap: Roadmap, areMoreMonthsRequired:boolean}) => {
    const [monthState, setMonthState] = React.useState<Month[]>(months)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState('')

    async function generateMonth(){
        setLoading(true)
        if(!months || !roadmap) return;
        const {success, month:newMonth} = await generateMonthTreeFunction(months, roadmap)
        if(!success){
            toast.error('Failed to generate month')
            setLoading(false);
            return;
        }
        if(success && newMonth){
            toast.success('Month generated successfully')
            setMonthState([...monthState, newMonth])
        }
        setLoading(false)
    }

  return (
   <>
   {loading && (
        <div className='w-screen h-screen top-0 left-0 fixed backdrop-blur-md bg-background/40 z-[100] flex flex-col items-center justify-center space-y-4'>
            <Loader />
            Generating Month. ETA: 20 seconds
        </div>
   )}
    <div className='w-full h-full flex flex-col items-center justify-center gap-14'>
                {monthState.map((month, index) => {
                   
                    return (
                        <MonthComponent key={index} month={month}/>
                    )
                })}
                {areMoreMonthsRequired && (
                    <div className='relative w-full h-full  z-[8]'>
                        <div className="max-w-7xl mx-auto opacity-30">
                            <div className="relative group">
                                <div className={`absolute -inset-1 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-lg blur opacity-0 `}></div>
                                    <div className="relative px-7 py-6 bg-[#151515] dark:bg-[#171717] ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                                    <div className="space-y-3 cursor-pointer">
                                        <p className='text-sm font-medium text-muted-foreground'>Month #2</p>
                                        <p className={`font-semibold`}>Learn ai generation</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full h-full flex flex-col items-center justify-center gap-6 backdrop-blur-sm absolute top-0 left-0 bg-background/60 z-[10]'>
                            <div className='flex items-center w-full gap-8'>
                                <div className='w-1/2 h-[1px] bg-muted-foreground/20'></div>
                                <p className='font-medium text-muted-foreground text-sm text-center'>More months are required to be generated</p>
                                <div className='w-1/2 h-[1px] bg-muted-foreground/20'></div>
                            </div>
                            <Button disabled={loading} onClick={generateMonth} variant={'outline'} className='flex items-center justify-center gap-2'><Sparkles size={18}/>Generate</Button>
                        </div>
                    </div>
                )}
            </div>
   </>
  )
}

export default MonthsList