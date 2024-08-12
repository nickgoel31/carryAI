import React from 'react'
import { getModuleFromId } from '@/helpers/getModule'
import { notFound, redirect } from 'next/navigation'
import { getLearningPathFromModuleId, getSubPathsFromLearningPath, getSubpathsFromModuleId } from '@/helpers/getLearningSubpath'
import { ChevronRight, Router, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import SubpathsList from '@/app/(dashboard)/dashboard/_components/module/subpath-list'
import { areMoreSubpathsToBeGenerated } from '@/helpers/logical/more-months'
import SubpathNeededDiv from '@/app/(dashboard)/dashboard/_components/module/subpath-needed'
import { getMonthFromId } from '@/helpers/getMonth'
import { getProjectFromId, getProjectFromModuleId } from '@/helpers/getProject'
import { generateProjectFunction } from '@/functions/generate-ai'
import Loader from '@/components/loader'
import GenerateProjectPage from '@/app/(dashboard)/dashboard/_components/project/gen-pro'
import ProjectHintsList from '@/app/(dashboard)/dashboard/_components/project/hints'

const ProjectPage = async ({params}:{params:{moduleId:string}}) => {
    const modulecustom = await getModuleFromId(params.moduleId)
    if(!modulecustom.module) notFound();
    const project = await getProjectFromModuleId(modulecustom.module.id)
    const subPaths = await getSubpathsFromModuleId(modulecustom.module.id)
    if(!subPaths.subPaths) return;
    if(!project.project){
        return <GenerateProjectPage module={modulecustom.module} subpaths={subPaths.subPaths} />    
    }
  return (
    <div className=''>
        <div className='flex w-full items-center justify-between'>
            <div>
                <h1 className='font-semibold text-4xl leading-normal'>Project</h1>
                <p className='text-muted-foreground font-medium'>
                    {modulecustom.module.title}
                </p>
            </div>
            <Button asChild variant={'outline'}>
                <Link href={`/module/${modulecustom.module.id}`}>Back to module</Link>
            </Button>
        </div>

        <div className='project flex flex-col gap-4 p-6 my-7 border rounded-md'>
            <h2 className='text-lg font-semibold'>{project.project.title}</h2>
            <div>
                <p className='font-semibold'>Problem Statement</p>
                <p className='text-muted-foreground font-medium text-sm'>{project.project.problemStatement}</p>
            </div>

            <ProjectHintsList hints={project.project.hints}/>

        </div>
    </div>
  )
}

export default ProjectPage