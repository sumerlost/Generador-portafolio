import { Request, Response } from "express";
import { DBCreateUser, DBUserSearch } from "../db/handlers/user";
import IUser, { RequestUser } from "../types/user";
import *  as bcrypt from "bcrypt"
import * as jwt from "jsonwebtoken"

type RequestLogin = {
    email: string,
    password: string
}

export const RegisterUser = async (req: Request, res: Response) => {
    try {

        const { user }: RequestUser = req.body
        const hashedpass: string = bcrypt.hashSync(user.password, 10)
        const usercreated: IUser = await DBCreateUser({ ...user, password: hashedpass })
        const newToken: Pick<IUser, "_id" | "role"> = { _id: usercreated?._id, role: usercreated?.role }
        const response: string = jwt.sign(newToken, "10")
        res.status(200).send(response)

    } catch (error: any) {
        res.status(400).json({ error: error.message })
    }

}

export const LoginUser = async (req: Request<{}, {}, {}, RequestLogin>, res: Response) => {

    try {

        const { query } = req
        const userfind: IUser | null = await DBUserSearch(query.email)
        if (userfind) {
            if (await bcrypt.compare(userfind.password, query.password)) {
                const newToken: Pick<IUser, "_id" | "role"> = { _id: userfind._id, role: userfind.role }
                const response: string = jwt.sign(newToken, "10")
                res.status(200).send(response)
            }
            else {
                res.status(400).json({ error: "contraseña incorrecta" })
            }
        }
        else {
            res.status(400).json({ error: "usuario no registrado" })

        }

    } catch (error: any) {
        console.error(error.message)
    }

}