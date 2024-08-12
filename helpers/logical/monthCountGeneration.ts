import { generateMonthFunction } from "@/functions/generate-ai"
import { db } from "@/lib/db"
import { getRoadmapFromId } from "../getRoadmap"
import { getMonthsFromRoadmapId } from "../getMonth"
import { revalidatePath } from "next/cache"

export async function getMonthCountFromRoadmapId(roadmapId:string) {
    try {
        const roadmap = await getRoadmapFromId(roadmapId)

        if(!roadmap.roadmap) return {monthCount: null, error: 'No roadmap found'}

        const monthCount = Number((roadmap.roadmap.duration).split(' ')[0])

        const months = await getMonthsFromRoadmapId(roadmap.roadmap.id)

        if(months.months && months.months.length < monthCount){
            let previousMonthsContext = months.months;
            //GENERATE MONTHS AI
            for(let i = months.months.length; i <= monthCount; i++){
                const {month} = await generateMonthFunction(previousMonthsContext, roadmap.roadmap)
                if(month){
                    const newMonth = await db.month.create({
                        data:{
                            month: month.month,
                            isCurrentMonth: month.isCurrentMonth,
                            isMonthCompleted: false,
                            title: month.title,
                            roadmapId: roadmap.roadmap.id
                        }
                    })
                    previousMonthsContext.push(newMonth)
                }
            }
            revalidatePath(`/dashboard/${roadmap.roadmap.id}/roadmap`)
            return {monthCount, error: null, monthsGenerated: true}
        }

        else if(months.months && months.months.length === monthCount){
            return {monthCount, error: null, monthsGenerated: false}
        }
        
    } catch (error) {
        console.log(error)
        return {monthCount: null, error, monthsGenerated: false}
    }
}