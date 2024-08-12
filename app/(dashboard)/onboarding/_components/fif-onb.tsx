"use client"

import { Button } from '@/components/ui/button'
import React from 'react'
import { UserValuesType } from '@/types'

import { Switch } from "@/components/ui/switch"
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
  


const FifthOnboardingStep = ({setStep, userValues, setUserValues}:{setStep: (n:number) => void, userValues:UserValuesType, setUserValues: (user:UserValuesType) => void}) => {
    const [dataCollection, setDataCollection] = React.useState(userValues.allowDataCollection)
    const [subscribe, setSubscribe] = React.useState(userValues.subscribeToNewsletter)
    const [agree, setAgree] = React.useState({checked: false, showCheckbox: false})

    const notValid = !agree.checked

  return (
    <div className='flex flex-col gap-4 items-center justify-center w-full'>  
    <div className='text-center'>
      <h2 className={`font-semibold text-4xl leading-normal transition`}>
        Your Data, Your Choice
      </h2>
      <p className='text-muted-foreground font-medium'>
        Please select the data permissions you would like to grant.
      </p>
    </div>

    <div className='w-[55%] flex flex-col items-center gap-5'>
        <div className='flex items-center gap-4 w-full justify-between'>
            <div className='flex flex-col'>
                <Label className='leading-normal'>Data Collection</Label>
                <p className='text-xs font-medium text-muted-foreground'>
                    We collect data to provide you with the best experience.
                </p>
            </div>
            <Switch checked={dataCollection} onCheckedChange={(c) => setDataCollection(c)}/>
        </div>
        <div className='flex items-center gap-4 w-full justify-between'>
            <div className='flex flex-col'>
                <Label className='leading-normal'>Subscribe to our newsletter</Label>
                <p className='text-xs font-medium text-muted-foreground'>
                    Stay up to date with our latest features and updates.
                </p>
            </div>
            <Switch checked={subscribe} onCheckedChange={(c) => setSubscribe(c)}/>
        </div>

        <div className='terms-condition flex items-center gap-3'>
            <Checkbox id="agree" checked={agree.checked} onCheckedChange={(v) => {
                if(v==="indeterminate") {
                    setAgree({checked: false, showCheckbox: true})
                }
                else {
                    setAgree({checked: v, showCheckbox: true})
                }
            }}></Checkbox>
            <Label htmlFor='agree' className='text-xs text-muted-foreground'>
                By checking, you agree to CarryAI&apos;s <span className='text-emerald-400'>Terms and Conditions</span> and <span className='text-emerald-400'>Privacy Policy</span>.
            </Label>
        </div>
    </div>
    <div className='flex items-center gap-4'>
                <Button onClick={() => {
                    setStep(4)
                    setUserValues({...userValues, allowDataCollection: dataCollection, subscribeToNewsletter: subscribe})
                }} className='rounded-full px-8 py-6 bg-gradient-to-r from-indigo-500/5 to-emerald-400/5' variant={"outline"}>
                Back
                </Button>
                <Button onClick={() => {
                    setStep(6)
                    setUserValues({...userValues, allowDataCollection: dataCollection, subscribeToNewsletter: subscribe})
                }} disabled={notValid} className='rounded-full px-8 py-6 bg-gradient-to-r from-indigo-500/5 to-emerald-400/5' variant={"outline"}>
                Next
                </Button>
            
            </div>
  </div>
  )
}

export default FifthOnboardingStep