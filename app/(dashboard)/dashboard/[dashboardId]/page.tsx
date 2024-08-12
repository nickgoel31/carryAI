import { getUserFromId } from '@/helpers/getUser';
import { currentUser } from '@clerk/nextjs/server';
import { notFound, redirect } from 'next/navigation'
import React from 'react'
import { DashboardChart } from '../_components/dashboard-chart';
import { getRoadmapFromUserId } from '@/helpers/getRoadmap';
import { RouteIcon } from 'lucide-react';
import Link from 'next/link';

const DashboardIdPage = async ({params}:{params:{dashboardId:string}}) => {
    const user = await getUserFromId(params.dashboardId)
    if(!user.user) notFound();
    const clerkUser = await currentUser();
    if(!clerkUser) redirect('/sign-in');

    const roadmap = await getRoadmapFromUserId(params.dashboardId)
    if(!roadmap) redirect('/onboarding');

    
  return (
    <div className=' w-full space-y-5'>
        <div>
          <h1 className='font-semibold text-4xl leading-normal capitalize'>Hi, {(user.user.name)?.toLowerCase()} </h1>
          <p className='text-muted-foreground font-medium'>Welcome to your dashboard</p>
        </div>

        <div className=''>
          <Link href={`/dashboard/${params.dashboardId}/roadmap`} className='border max-h-[300px] max-w-[400px] rounded-md p-7 flex flex-col items-center gap-4 text-lg font-semibold cursor-pointer'>
            <RouteIcon size={40}/>
            Go to your roadmap
            {/* <DashboardChart /> */}
          </Link>
        </div>
    </div>
  )
}

export default DashboardIdPage