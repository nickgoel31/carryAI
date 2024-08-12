"use server"

import { db } from "@/lib/db"

export async function getModuleFromId(id:string) {
    try {
        const moduleDB = await db.module.findUnique({
            where:{
                id
            }
        })

        return {module: moduleDB, error: null}
    } catch (error) {
        console.log(error)
        return {module: null, error}
    }
}

export async function getModulesFromMonthId(monthId:string) {
    try {
        const modules = await db.module.findMany({
            where:{
                monthId
            }
        })

        return {modules, error: null}
    } catch (error) {
        console.log(error)
        return {module: null, error}
    }
}