import { Types } from "mongoose";
import { IPortafolio, IPortafolioPopulated, IPortafolioUnpopulated } from "../../types/portafolio";
import { Portafolio, Project, Technology, User } from "../models";
import { DBCreateProjects } from "./project";
import IUser from "../../types/user";
import { IProject } from "../../types/project";
import { ITechnology } from "../../types/technology";
import path from "path";

export const DBPortafolioCreate = async (portafolio: IPortafolioUnpopulated, iduser: string): Promise<IPortafolio> => {

    try {

        const newP = new Portafolio<IPortafolioUnpopulated>(portafolio)
        const techsUser: Types.ObjectId[] = await Technology.find({ name: { $in: portafolio.technologies } }).select("_id")
        newP.technologies = techsUser
        const userP: IUser | null = await User.findByIdAndUpdate<IUser>(iduser, {
            $set: {
                portafolio: newP._id
            }
        })
        if (userP === null) {
            throw Error("El usuario no existe")
        }
        newP.user = userP._id
        const response: IPortafolio = await newP.save()
        return response

    } catch (error: any) {
        console.error(error.message);
        throw new Error("no se pudo crear el portafolio")
    }

}

export const DBPortafolioGet = async (filters: string[] = []): Promise<IPortafolioPopulated[]> => {
    let response: IPortafolioPopulated[] = []
    let arrayfilters: string[] = []
    if (typeof filters === "string") {
        arrayfilters.push(filters)
    }
    else {
        arrayfilters = filters
    }
    console.log(arrayfilters)
    try {
        const allPortafolios:
            (Omit<IPortafolio, "technologies" | "user" | "projects"> & { user: IUser, projects: IProject[], technologies: ITechnology[] })[]
            = await Portafolio.find<IPortafolio>({}).populate<{ user: IUser, projects: IProject[], technologies: ITechnology[] }>([{ path: "user" }, { path: "technologies" }, { path: "projects" }])
        if (filters.length === 0) {
            if (allPortafolios.length !== 0) {
                response = allPortafolios
            }
            else {
                throw Error("No hay usuarios registrados")
            }
        }
        else {
            for (let portafolio of allPortafolios) {
                if (arrayfilters.every(e =>
                    portafolio.technologies.some(i => i.name === e)
                )) {
                    response.push(portafolio)
                }
            }
        }
        return response
    } catch (error: any) {
        console.log(error.message)
        throw new Error(error.message)
    }
}