import { Project } from "../models";
import { IProject } from "../../types/project";
import { Types } from "mongoose";

export async function DBCreateProjects(projects: IProject[], iduser: string): Promise<IProject[]> {
    try {
        const formatProjects = projects.map(e => {
            const formatid: Types.ObjectId = new Types.ObjectId(iduser)
            return { ...e, user: formatid }
        })
        const bulkprojects: IProject[] = await Project.insertMany<IProject>(formatProjects)
        return bulkprojects
    } catch (error: any) {
        console.error(error.message);
        throw new Error("no se pudo crear el proyecto correctamente")
    }
}