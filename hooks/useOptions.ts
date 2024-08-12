

"use client"

import { getOptionsFromInteractiveExerciseId } from '@/helpers/getInteractiveExercise'
import { getModulesFromMonthId } from '@/helpers/getModule'
import { getUserFromClerkId } from '@/helpers/getUser'
import { useUser } from '@clerk/nextjs'
import { InteractiveExerciseOption, Module, User } from '@prisma/client'
import React, { useEffect } from 'react'

const useInteractiveExerciseOptions = (exerciseId:string) => {
  const [options, setOptions] = React.useState<InteractiveExerciseOption[]>([])

  useEffect(() => {
    async function getOptions(){
        const options = await getOptionsFromInteractiveExerciseId(exerciseId)
        if(!options.options) return;
        setOptions(options.options)
    }
    getOptions()
  },[exerciseId])

  return {options}

}

export default useInteractiveExerciseOptions