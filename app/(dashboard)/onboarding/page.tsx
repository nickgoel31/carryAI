"use client"

import React, { useEffect } from 'react'
import FirstOnboardingStep from './_components/first-onboarding'
import { Button } from '@/components/ui/button'
import SecondOnboardingStep from './_components/sec-onb'
import { Progress } from "@/components/ui/progress"
import ThirdOnboardingStep from './_components/thi-onb'
import FourthOnboardingStep from './_components/fou-onb'
import { UserValuesType } from '@/types'
import FifthOnboardingStep from './_components/fif-onb'
import Loader from '@/components/loader'
import { redirect, useRouter } from 'next/navigation'
import { createUserInDB } from '@/actions/user/create'
import { useUser } from '@clerk/nextjs'
import { onboardingGeneration } from '@/functions/onboarding-generation'
import { getUserFromClerkId } from '@/helpers/getUser'
import useUserDB from '@/hooks/useUserDB'


const OnboardingPage = () => {
  const [step, setStep] = React.useState(0)
  const [stepChangeAnimationEnter, setStepChangeAnimationEnter] = React.useState(false)
  const [stepChangeAnimationExit, setStepChangeAnimationExit] = React.useState(false)
  const router = useRouter()
  

  const user = useUser()
  const userFromDB = useUserDB()
  const [loading, setLoading] = React.useState({state: false, message: ''})
  const [loadingTime, setLoadingTime] = React.useState(0)

  const [userValues, setUserValues] = React.useState<UserValuesType>({
    name: '',
    goals: '',
    
    skills: [],
    learningPreferences: {
      learningMode: [],
      learningSchedule: '',
      contentTypePreference: [],
      certificationGoals: [],
    },
    subscribeToNewsletter: false,
    allowDataCollection: true,
  })

  useEffect(() => {
    if(userFromDB.userFound){
      router.push('/dashboard')
    }
    if(step === 5){
      setLoading({state: true, message: 'Creating your account'})
      // SEND DATA TO GEMINI API
    }
    if(step === 6){
      
      if(user.user && userValues){
        createUserInDB(user.user.id, user.user.emailAddresses[0].emailAddress, userValues)
        .then((user) => {
          if(user){
            setLoading({state: true, message: 'Generating personalized roadmap for you. ETA: 30 seconds'})
            onboardingGeneration(user).then((success) => {
              if(success){
                setLoading({state: false, message: 'Redirecting you to dashboard'})
                router.push('/dashboard')
              }
            })
            
            // router.push('/dashboard')
          }
        })
        .catch((error) => {
          console.log(error)
        })

      }
      
    }
  },[step, router, user.user, userValues, userFromDB.userFound])

  function handleChangeStep(num:number){
    
      setStepChangeAnimationExit(true)
      
      setTimeout(() => {
        setStepChangeAnimationExit(false)
        setStep(num)
        setStepChangeAnimationEnter(true)
      },400)
    
  }
  return (
    <div className='overflow-y-hidden'>
    <Progress className={`fixed bottom-0 rounded-none left-1/2 -translate-x-1/2 transition translate-y-0 delay-300 ${step === 6 ? 'translate-y-10  ' :''}`} value={step === 6 ? 100 :step * 16.67} />
    <div className={`w-screen h-screen flex items-center justify-center max-w-screen-sm mx-auto transition duration-500  ${stepChangeAnimationEnter && 'opacity-1 translate-y-0'} ${stepChangeAnimationExit && 'opacity-0 translate-y-10'}`}>
      
      {step === 0 && (
          <div className='flex flex-col gap-4 items-center justify-center'>  
            <div className='text-center'>
              <h2 className={`font-semibold text-4xl leading-normal transition`}>
                CarryAI Onboarding
              </h2>
              <p className='text-muted-foreground font-medium'>
              CarryAI is an innovative career development app that generates personalized roadmaps, projects, and learning paths. 
              </p>
            </div>
            <Button onClick={() => handleChangeStep(1)} className='rounded-full px-8 py-6 bg-gradient-to-r from-foreground/5 to-emerald-400/5' variant={"outline"}>
              Let&apos;s get started
            </Button>
          </div>
        )}
        {step === 1 && (
          <FirstOnboardingStep setStep={handleChangeStep} userValues={userValues} setUserValues={setUserValues}/>
        )}
        {step === 2 && (
          <SecondOnboardingStep setStep={handleChangeStep} userValues={userValues} setUserValues={setUserValues}/>
        )}
        {step === 3 && (
          <ThirdOnboardingStep setStep={handleChangeStep} userValues={userValues} setUserValues={setUserValues}/>
        )}
        {step === 4 && (
          <FourthOnboardingStep setStep={handleChangeStep} userValues={userValues} setUserValues={setUserValues}/>
        )}
        {step === 5 && (
          <FifthOnboardingStep setStep={handleChangeStep} userValues={userValues} setUserValues={setUserValues}/>
        )}

        {step === 6 && (
          <>
          {loading.state && (
            <div className='flex items-center justify-center flex-col gap-4'>
            <Loader />
              <p className='text-sm font-medium'>{loading.message}</p>
            </div>
          )}
          </>
        )}

      
    </div>
    </div>
  )
}

export default OnboardingPage