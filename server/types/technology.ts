import { Types } from "mongoose"

export interface ITechnology {
    _id?: Types.ObjectId | string,
    name: string,
    image: string,
    category: string
}