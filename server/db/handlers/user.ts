import { User } from "../models";
import IUser from "../../types/user";

export const DBCreateUser = async (user: IUser): Promise<IUser | Error> => {
    try {

        const newUser = new User<IUser>(user)
        const response: IUser = await newUser.save()
        return response

    } catch (error: any) {
        console.error("Error: ", error.message)
        throw new Error(error.message)
    }
}

export const DBUserSearch = async (mail: string): Promise<IUser | undefined> => {
    try {

        const userSearch = await User.findOne<IUser>({ mail: mail }).lean()
        if (userSearch) {
            return userSearch
        }
        else {
            return undefined
        }


    } catch (error: any) {
        console.error("Error: ", error.message);
        throw new Error(error.message)

    }
}