"use client"

import Loader from "@/components/loader"
import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Progress } from "@/components/ui/progress"
import { generateModuleFunction } from "@/functions/generate-ai"
import { getModulesFromMonthId } from "@/helpers/getModule"
import { areMoreModulesNeededToBeGenerated } from "@/helpers/logical/more-months"
import useModules from "@/hooks/useModules"
import { Month, Module } from "@prisma/client"
import { Sparkles } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "sonner"
  

const MonthComponent = ({month}:{month:Month}) => {
    const [isLocked, setIsLocked] = useState(false)
    const router = useRouter()
    
    const {modules} = useModules(month.id)
    const [moduleState, setModuleState] = useState<Module[]>(modules)

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const areModulesRequired = moduleState.length < 2

    useEffect(() => {
        setModuleState(modules)
    }, [modules])

    async function generateModule(){
        setLoading(true)
        if(!month) return;
        const {error, module: newModule} = await generateModuleFunction(month, modules)
        if(error){
            toast.error('Failed to generate module')
            setLoading(false);
            return;
        }
        if(!error && newModule){
            toast.success('Module generated successfully')
            setModuleState([...moduleState, newModule])
        }
        setLoading(false)
    }

  return (
    <>
    {loading && (
        <div className='w-screen h-screen top-0 left-0 fixed backdrop-blur-md bg-background/40 z-[100] flex flex-col items-center justify-center space-y-4'>
            <Loader />
            Generating Module. ETA: 10 seconds
        </div>
   )}
    <Drawer>
            <DrawerTrigger>
            <div className="max-w-7xl mx-auto">
                <div className="relative group">
                    <div className={`absolute -inset-1 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-1000 group-hover:duration-200 ${month.isCurrentMonth ? '!opacity-20':'opacity-20'}`}></div>
                         <div className="relative px-7 py-6 bg-[#151515] dark:bg-[#171717] ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                        <div className="space-y-3 cursor-pointer">
                             <p className='text-sm font-medium text-muted-foreground'>Month #{month.month}</p>
                            <p className={`font-semibold ${month.isCurrentMonth && 'text-emerald-300'}`}>{month.title}</p>
                        </div>
                    </div>
                </div>
            </div>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>{month.title}</DrawerTitle>
                    <DrawerDescription>Month #{month.month}</DrawerDescription>
                </DrawerHeader>
                <div className="p-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full items-center gap-6">
                    {moduleState.map((module, index) => (
                        <div key={index} onClick={() => router.push(`/module/${module.id}`)} className="border rounded-md p-4 space-y-2 cursor-pointer hover:border-white/50 transition">
                            <p className="text-sm font-medium text-muted-foreground">Module #{module.moduleNumber}</p>
                            <p className="font-semibold">{module.title}</p>
                            <div className="pt-2 space-y-1">
                                <p className="text-xs text-muted-foreground">{module.completionStatus}%</p>
                                <Progress value={module.completionStatus} className=""/>
                            </div>
                        </div>
                    ))}
                    {areModulesRequired && (
                        <div  onClick={generateModule} className="border rounded-md h-full flex flex-col items-center gap-4 justify-center  p-4 space-y-2 cursor-pointer hover:border-white/50 transition">
                            <p className="font-semibold text-center ">Generate module <span className="text-xs font-medium text-muted-foreground">(1 more module)</span></p>
                            <Button disabled={loading} onClick={generateModule} variant={'outline'} className='flex items-center justify-center gap-2'><Sparkles size={18}/>Generate</Button>
                        </div>
                    )}
                </div>
            </DrawerContent>
    </Drawer>
    </>
  )
}

export default MonthComponent