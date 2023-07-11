import { Types } from "mongoose";

export default interface IUser {
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
    portafolio?: Types.ObjectId
}