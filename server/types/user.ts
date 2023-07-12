import { Types } from "mongoose";

export default interface IUser {
    _id?: Types.ObjectId | string,
    firstname: string,
    lastname: string,
    password: string,
    mail: string,
    image: string,
    age: number,
    phone: number,
    address: string,
    github: string,
    linkedin: string,
    portafolio?: Types.ObjectId | null
    role?: string
}

export type RequestUser = {
    user: IUser
}