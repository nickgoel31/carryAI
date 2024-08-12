import { getUserFromClerkId } from '@/helpers/getUser'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'

const RedirectRoadmap = async () => {
    const clerkUser = await currentUser()
    if(!clerkUser) return;
    const user = await getUserFromClerkId(clerkUser.id)
    if(!user.user) return;

    redirect(`/dashboard/${user.user.id}/roadmap`)
  return (
    <div>RedirectRoadmap</div>
  )
}

export default RedirectRoadmap