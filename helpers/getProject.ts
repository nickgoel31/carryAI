"use server"

import { db } from "@/lib/db"

export async function getProjectFromId(id:string) {
    try {
        const project = await db.project.findUnique({
            where:{
                id
            }
        })

        return {project, error: null}
    } catch (error) {
        console.log(error)
        return {project: null, error}
    }
}

export async function getProjectFromModuleId(id:string) {
    try {
        const project = await db.project.findFirst({
            where:{
                moduleId: id
            }
        })

        return {project, error: null}
    } catch (error) {
        console.log(error)
        return {project: null, error}
    }
}