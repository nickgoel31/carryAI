import { getUserFromClerkId } from "@/helpers/getUser";
import { currentUser } from "@clerk/nextjs/server";
import PomodoroTimer from './_components/timer'
import { getModulesFromMonthId } from "@/helpers/getModule";
import { getRoadmapFromUserId } from "@/helpers/getRoadmap";
import { getMonthsFromRoadmapId } from "@/helpers/getMonth";
import { getSubpathsFromModuleId } from "@/helpers/getLearningSubpath";
import { LearningPathSubpath } from "@prisma/client";


const PomodoroPage = async () => {
    const user = await currentUser()
    if(!user) return;

    const userFromDB =  await getUserFromClerkId(user.id)
    if(!userFromDB.user) return;

    const roadmap = await getRoadmapFromUserId(userFromDB.user.id)
    if(!roadmap.roadmap) return;

    const months = await getMonthsFromRoadmapId(roadmap.roadmap.id)
    if(!months.months) return;

    const currentMonth = months.months.find(month => month.isCurrentMonth)
    if(!currentMonth) return;

    const modulesCustom = await getModulesFromMonthId(currentMonth.id)
    if(!modulesCustom.modules) return;
    
    

  return (
    <div>
        <PomodoroTimer subPaths={[]}/>
    </div>
  )
}

export default PomodoroPage