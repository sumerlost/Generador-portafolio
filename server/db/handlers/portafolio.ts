import { Types } from "mongoose";
import { IPortafolio } from "../../types/portafolio";
import { Portafolio, Project, Technology, User } from "../models";
import { DBCreateProjects } from "./project";
import IUser from "../../types/user";

export const DBPortafolioCreate = async (portafolio: IPortafolio, iduser: string): Promise<IPortafolio> => {

    try {

        const newP = new Portafolio<IPortafolio>(portafolio)
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