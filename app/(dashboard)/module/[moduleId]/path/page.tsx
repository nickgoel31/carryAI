import React from 'react'
import { getModuleFromId } from '@/helpers/getModule'
import { notFound } from 'next/navigation'
import { getLearningPathFromModuleId, getSubPathsFromLearningPath } from '@/helpers/getLearningSubpath'
import { ChevronRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import SubpathsList from '@/app/(dashboard)/dashboard/_components/module/subpath-list'
import { areMoreSubpathsToBeGenerated } from '@/helpers/logical/more-months'
import SubpathNeededDiv from '@/app/(dashboard)/dashboard/_components/module/subpath-needed'
import { getMonthFromId } from '@/helpers/getMonth'
import { completedExercises, completedSubpaths } from '@/helpers/logical/completeSubpaths'
import { getInteractiveExercisesFromLearningPathId } from '@/helpers/getInteractiveExercise'

const LearningPathPage = async ({params}:{params:{moduleId:string}}) => {
    const modulecustom = await getModuleFromId(params.moduleId)

    

    if(!modulecustom.module) notFound();
    const month  = await getMonthFromId(modulecustom.module.monthId)
    if(!month.month) notFound();
    const learningPath = await getLearningPathFromModuleId(modulecustom.module.id)
    if(!learningPath.learningPath) notFound();

    const exercises = await getInteractiveExercisesFromLearningPathId(learningPath.learningPath.id)
    if(!exercises.exercise) notFound();

    const subPaths = await getSubPathsFromLearningPath(learningPath.learningPath.id)
    if(!subPaths.subPaths) notFound();
    const sortedSubPaths = subPaths.subPaths.sort((s1, s2) => s1.sequence - s2.sequence)

    const completedPathsFromDB = await completedSubpaths(learningPath.learningPath.id)

    const completedExerciesFromDB = await completedExercises(learningPath.learningPath.id)

    const areSubpathsNeeded = await areMoreSubpathsToBeGenerated(learningPath.learningPath.id)


  return (
    <div className=''>
        <div className='flex w-full items-center justify-between'>
            <div>
                <h1 className='font-semibold text-4xl leading-normal'>{modulecustom.module.title}</h1>
                <p className='text-muted-foreground font-medium'>
                    Learning Path
                </p>
            </div>
            <Button asChild variant={'outline'}>
                <Link href={`/module/${modulecustom.module.id}`}>Back to module</Link>
            </Button>
        </div>

        <div className='pt-9 w-full flex flex-col gap-5'>
            <SubpathsList isNeeded={areSubpathsNeeded} month={month.month} module={modulecustom.module} learningPathId={learningPath.learningPath.id} subPaths={sortedSubPaths} completedSubPaths={completedPathsFromDB} exercises={exercises.exercise} completedExercises={completedExerciesFromDB}/>
        </div>
    </div>
  )
}

export default LearningPathPage