import { Types } from "mongoose";

export interface Iproject {
    name: string,
    repository: string,
    description: string,
    user?: Types.ObjectId,
    deploy: string
}