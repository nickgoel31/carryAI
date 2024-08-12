"use client"

import { z } from "zod"

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { User } from '@prisma/client'
import React from 'react'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { settingsFormSchema } from "@/types"
import { updateUserInDB } from "@/actions/user/update"
import Loader from "@/components/loader"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
  



const UserSettings = ({user}:{user:User}) => {
    const [loading, setLoading] = React.useState(false)
    // 1. Define your form.
  const form = useForm<z.infer<typeof settingsFormSchema>>({
    resolver: zodResolver(settingsFormSchema),
    defaultValues: {
        name: user.name || '',
        goal: user.goal || '',
        allowDataCollection: user.allowDataCollection || false,
        certificationGoals: user.certificationGoals || [],
        contentTypePreference: user.contentTypePreference || '',
        skills: user.skills || [],
        subscribeToNewsletter: user.subscribeToNewsletter || false,
        learningMode: user.learningMode || '',
        learningSchedule: user.learningSchedule || '',
    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof settingsFormSchema>) {
    setLoading(true)
    await updateUserInDB(user.id, values)
    setLoading(false)
  }
  return (
    <>
    {loading && (
        <div className="w-screen h-screen fixed z-[20] backdrop-blur-md bg-background/40 flex items-center justify-center top-0 left-0">
            <Loader />
        </div>
    )}
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
                <FormItem>
                <FormLabel className="capitalize">{field.name}</FormLabel>
                <FormControl>
                    <Input placeholder="Your Name" {...field} />
                </FormControl>
                <FormDescription>
                    This is your public display name.
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="goal"
            render={({ field }) => (
                <FormItem>
                <FormLabel className="capitalize">{field.name}</FormLabel>
                <FormControl>
                    <Input disabled placeholder="Your goal" {...field} />
                </FormControl>
                <FormDescription>
                    {`You can't edit your goal. If you want to change it please delete roadmap and create a new one`}
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="learningSchedule"
            render={({ field }) => (
                <FormItem>
                <FormLabel className="capitalize">{field.name}</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a value" />
                        </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                        
                        <SelectItem value="monthly">Monthly</SelectItem>
                    </SelectContent>
                </Select>
                <FormDescription>
                    {`You can't edit your goal. If you want to change it please delete roadmap and create a new one`}
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    </>
  )
}

export default UserSettings