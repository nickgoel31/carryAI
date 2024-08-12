"use client"

import { getModulesFromMonthId } from '@/helpers/getModule'
import { getUserFromClerkId } from '@/helpers/getUser'
import { useUser } from '@clerk/nextjs'
import { Module, User } from '@prisma/client'
import React, { useEffect } from 'react'

const useModules = (monthId:string) => {
  const [modules, setModules] = React.useState<Module[]>([])

  useEffect(() => {
    async function getModules(){
        const modulesFromDB = await getModulesFromMonthId(monthId)
        if(modulesFromDB.modules){
            setModules(modulesFromDB.modules)
        }
    }
    getModules()
  },[monthId])

  return {modules}

}

export default useModules