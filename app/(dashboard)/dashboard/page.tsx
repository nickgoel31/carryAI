
import { getUserFromClerkId } from '@/helpers/getUser'
import { useUser } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'
import { EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons'
import { notFound, redirect } from 'next/navigation'
import React from 'react'

const DashboardPage = async () => {
    const user = await currentUser()
    if(!user) return;

    const userFromDB =  await getUserFromClerkId(user.id)
    if(!userFromDB.user && !userFromDB.error) {
      redirect('/onboarding')
    }
    if(userFromDB.user && !userFromDB.error) {
      redirect(`/dashboard/${userFromDB.user.id}`)
    }
  return (
    <div className=' w-full '>
        <h1 className='font-semibold text-4xl leading-normal'>Hi, Harsh! </h1>
        <p className='text-muted-foreground font-medium'>Welcome to your dashboard</p>
    </div>
    
  )
}

export default DashboardPage