import { Project } from "../models";
import { IProject } from "../../types/project";
import { Types } from "mongoose";

export async function DBCreateProjects(projects: IProject[]): Promise<IProject[] | undefined> {
    try {

        const bulkprojects: IProject[] = await Project.insertMany<IProject>(projects)
        return bulkprojects
    } catch (error: any) {
        console.error(error.message);
        throw new Error("no se pudo crear el proyecto correctamente")
    }
}