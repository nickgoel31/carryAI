import { getUserFromClerkId } from '@/helpers/getUser'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'

const RedirectRoadmap = async () => {
    const clerkUser = await currentUser()
    if(!clerkUser) redirect('/sign-in')
    const user = await getUserFromClerkId(clerkUser.id)
    if(!user.user) redirect('/sign-in')

    redirect(`/dashboard/${user.user.id}`)
  return (
    <div>Redirect</div>
  )
}

export default RedirectRoadmap