import { Types } from "mongoose";
import { IPortafolio } from "../../types/portafolio";
import { Portafolio, Project, Technology, User } from "../models";
import { DBCreateProjects } from "./project";
import IUser from "../../types/user";

export const DBPortafolioCreate = async (portafolio: IPortafolio, iduser: string): Promise<IPortafolio | undefined> => {

    try {

        const newP = new Portafolio<IPortafolio>(portafolio)
        const userP: IUser | null = await User.findByIdAndUpdate<IUser>(iduser, {
            $set: {
                portafolio: newP._id
            }
        })
        newP.user = userP?._id
        const response: IPortafolio = await newP.save()
        return response

    } catch (error: any) {
        console.error(error.message);
        throw new Error("no se pudo crear el portafolio")
    }

}