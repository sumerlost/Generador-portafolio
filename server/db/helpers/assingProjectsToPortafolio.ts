import { IPortafolio } from "../../types/portafolio";
import { IProject } from "../../types/project";
import { Portafolio } from "../models";
import { RidUser } from "../../types/requestP";
import { Types } from "mongoose";
export const assingProjectsToPortafolio = async (projects: IProject[]): Promise<IPortafolio> => {
    try {
        const { user }: Pick<IProject, "user"> = projects[0]
        const id: Types.ObjectId = new Types.ObjectId(user)
        const portafoliosearch: IPortafolio | null = await Portafolio.findOneAndUpdate({ user: id }, { projects: projects }, { returnDocument: "after" }).lean()
        if (portafoliosearch) {
            return portafoliosearch
        }
        else {
            throw new Error()
        }

    } catch (error: any) {
        throw new Error(error.message)
    }
}