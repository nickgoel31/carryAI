import { sampleData } from '@/data'
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import ModuleAccordions from '../../dashboard/_components/module/mo-accs'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { getModuleFromId } from '@/helpers/getModule'
import { notFound, redirect } from 'next/navigation'
import { getLearningPathFromModuleId, getSubPathsFromLearningPath, getSubpathsFromModuleId } from '@/helpers/getLearningSubpath'
import { Progress } from '@/components/ui/progress'
import { completedSubpaths } from '@/helpers/logical/completeSubpaths'
import { updateCompletionStatusInDB } from '@/actions/module/update'
import { getProjectFromModuleId } from '@/helpers/getProject'
import { generateProjectFunction } from '@/functions/generate-ai'
  

const ModuleIdPage = async ({params}:{params:{moduleId:string}}) => {
    const modulecustom = await getModuleFromId(params.moduleId)

    if(!modulecustom.module) notFound();

    const subPaths = await getSubpathsFromModuleId(modulecustom.module.id)
    if(!subPaths.subPaths) return;

    const project = await getProjectFromModuleId(modulecustom.module.id)


  return (
    <div className='w-full h-full '>
        <div className='flex items-center justify-between w-full'>
            <div>
                <h1 className='font-semibold text-4xl leading-normal'>{modulecustom.module.title}</h1>
                <p className='text-muted-foreground font-medium'>
                    Module #{modulecustom.module.moduleNumber}
                </p>
            </div>

            <div className='w-1/4'>
                <p className='text-xs font-medium text-muted-foreground pb-1'>{modulecustom.module.completionStatus}%</p>
                <Progress value={modulecustom.module.completionStatus} className='w-full'/>
            </div>
        </div>

        <div className='w-full mt-6 py-6 space-y-4'>
            <Link href={`/module/${modulecustom.module.id}/path`} className='w-full rounded-lg bg-gradient-to-tr from-[#3c9788] to-[#8ddad5] p-4 px-8 flex items-center justify-between cursor-pointer group'>
                <p className='font-semibold text-lg '>Learning Path</p>
                <ChevronRight size={24} className='group-hover:translate-x-3 transition'/>
            </Link>
            <Link href={`/module/${modulecustom.module.id}/project`} className='w-full rounded-lg border p-4 px-8 flex items-center justify-between cursor-pointer group'>
                <p className='font-semibold text-lg '>Project</p>
                <ChevronRight size={24} className='group-hover:translate-x-3 transition'/>
            </Link>
            <div className='w-full rounded-lg border p-4 px-8 flex items-center justify-between cursor-pointer group opacity-40'>
                <p className='font-semibold text-lg '>Quiz (coming soon)</p>
                <ChevronRight size={24} className='group-hover:translate-x-3 transition'/>
            </div>
    
            {/* <div>
                <h2 className='text-2xl font-semibold leading-normal'>Other Resources</h2>
                <ModuleAccordions moduleTitle={modulecustom.module.title}/>
            </div> */}
        </div>
    </div>
  )
}

export default ModuleIdPage