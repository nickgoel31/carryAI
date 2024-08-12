"use client"

import { deleteUserInDB } from '@/actions/user/delete'
import Loader from '@/components/loader'
import { Button } from '@/components/ui/button'
import { Roadmap, User } from '@prisma/client'
import { useRouter } from 'next/navigation'
import React from 'react'

const RoadmapSettings = ({user}:{user:User}) => {
    const [loading, setLoading] = React.useState(false)
    const router = useRouter()
    async function deleteAccount(){
        setLoading(true)
        const success = await deleteUserInDB(user.id)
        if(success){
            router.push('/onboarding')
        }
        setLoading(false)
    }
  return (
   <>
   {loading && (
        <div className="w-screen h-screen fixed z-[20] backdrop-blur-md bg-background/40 flex items-center justify-center top-0 left-0">
            <Loader />
        </div>
    )}
    <p className='text-lg font-semibold'>
                Delete Roadmap
            </p>
            <p className='text-sm font-medium text-muted-foreground'>
                This will delete all your data and you will have to start over.
            </p>
            <Button disabled={loading} onClick={deleteAccount} variant='destructive' className='mt-4'> 
                Delete
            </Button>
   </>
        
  )
}

export default RoadmapSettings