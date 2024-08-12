import React from 'react'
import MonthComponent from '../../_components/roadmap/month-comp'
import { sampleData } from '@/data'
import { getUserFromId } from '@/helpers/getUser';
import { notFound, redirect } from 'next/navigation'
import { getRoadmapFromUserId } from '@/helpers/getRoadmap';
import { getMonthsFromRoadmapId } from '@/helpers/getMonth';
import { getMonthCountFromRoadmapId } from '@/helpers/logical/monthCountGeneration';
import { areMoreMonthsNeededToBeGenerated } from '@/helpers/logical/more-months';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import { generateMonthTreeFunction } from '@/functions/generate-month-tree';
import MonthsList from '../../_components/month/months-list';

const RoadmapPage = async ({params}:{params:{dashboardId:string}}) => {
    const user = await getUserFromId(params.dashboardId)
    if(!user.user) notFound();

    const roadmap = await getRoadmapFromUserId(user.user.id)
    if(!roadmap.roadmap) {
        //delete existing user account!

        redirect('/onboarding')
    }
    const months = await getMonthsFromRoadmapId(roadmap.roadmap.id)
    if(!months.months) notFound();

    const areMoreMonthsRequired = await areMoreMonthsNeededToBeGenerated(user.user.id)

    

    // const monthCount = await getMonthCountFromRoadmapId(roadmap.roadmap.id)
    
  return (
    <div className='w-full h-full '>
        <h1 className='font-semibold text-4xl leading-normal'>Roadmap</h1>
        <p className='text-muted-foreground font-medium'>
            This is the roadmap page
        </p>

        <div className='w-full mt-6 p-10 border border-b-0 rounded-lg min-h-[calc(100vh-200px)] overflow-y-scroll'>
            <MonthsList months={months.months} roadmap={roadmap.roadmap} areMoreMonthsRequired={areMoreMonthsRequired}/>
        </div>
    </div>
  )
}

export default RoadmapPage