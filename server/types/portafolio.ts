import { Types } from "mongoose"

export interface IPortafolio {
    _id?: Types.ObjectId | string,
    cv: string,
    technologies?: Types.ObjectId[] | string[],
    projects?: Types.ObjectId[],
    user?: Types.ObjectId | string,
}
