import { Types } from "mongoose"

export interface IPortafolio {
    cv: string,
    technologies: Types.ObjectId[],
    projects: Types.ObjectId[],
    user?: Types.ObjectId,
}
