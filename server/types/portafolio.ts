import { Types } from "mongoose"
import { ITechnology } from "./technology";
import { IProject } from "./project";
import IUser from "./user";

export interface IPortafolio {
    _id?: Types.ObjectId | string,
    cv: string,
}

export interface IPortafolioUnpopulated extends IPortafolio {

    technologies?: Types.ObjectId[] | string[],
    projects?: Types.ObjectId[],
    user?: Types.ObjectId | string,
}

export interface IPortafolioPopulated extends IPortafolio {

    technologies?: ITechnology[],
    projects?: IProject[],
    user?: IUser,
}