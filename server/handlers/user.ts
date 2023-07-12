import { Request, Response } from "express";
import { DBCreateUser, DBUserSearch } from "../db/handlers/user";
import { RequestUser } from "../types/user";
import *  as bcrypt from "bcrypt"
export const RegisterUser = async (req: Request, res: Response) => {
    try {
        const { user }: RequestUser = req.body
        const hashedpass: string = bcrypt.hashSync(user.password, 10)
        const response = await DBCreateUser({ ...user, password: hashedpass })
        res.status(200).send(response)

    } catch (error: any) {
        res.status(400).json({ error: error.message })
    }

}