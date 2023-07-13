import { Types } from "mongoose";

export interface IProject {
    _id?: Types.ObjectId | string,
    name: string,
    repository: string,
    description: string,
    user?: Types.ObjectId | string,
    deploy: string
}