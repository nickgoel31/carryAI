"use client"

import { getUserFromClerkId } from '@/helpers/getUser'
import { useUser } from '@clerk/nextjs'
import { User } from '@prisma/client'
import React, { useEffect } from 'react'

const useUserDB = () => {
  const [user, setUser] = React.useState<User | null>(null)
  const [userFound, setUserFound] = React.useState(false)
  const userClerk = useUser()

  useEffect(() => {
    async function getUser(){
        if(userClerk.user){
            const userFromDB = await getUserFromClerkId(userClerk.user.id)
            if(userFromDB.user){
                setUser(userFromDB.user)
                setUserFound(true)
            }
        }
    }

    getUser()
  },[userClerk.user])

  return {user, userFound}

}

export default useUserDB