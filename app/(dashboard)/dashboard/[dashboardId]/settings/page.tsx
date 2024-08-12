import React from 'react'
import UserSettings from './_components/user-settings'
import { getUserFromId } from '@/helpers/getUser'
import { redirect } from 'next/navigation'
import { Button } from '@/components/ui/button'
import RoadmapSettings from './_components/roadmap-settings'

const SettingsPage = async ({params}:{params:{dashboardId:string}}) => {
    const user = await getUserFromId(params.dashboardId)
    if(!user.user) redirect('/onboarding')
  return (
    <div className=' w-full space-y-5'>
        <div>
          <h1 className='font-semibold text-4xl leading-normal capitalize'>Settings</h1>
          <p className='text-muted-foreground font-medium text-xs'>This app uses clerk as its authentication platform, any personal details can be changed from the userbutton in the navbar</p>
        </div>

        <div className='w-full space-y-5 '>
          <div className='border rounded-md p-4 w-full'>
            <UserSettings user={user.user}/>
          </div>
          <div className='border rounded-md p-4 w-full border-destructive text-red-300'>
            <RoadmapSettings user={user.user}/>
        </div>
        </div>
    </div>
  )
}

export default SettingsPage