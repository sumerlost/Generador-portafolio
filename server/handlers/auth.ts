import { Request, Response } from "express";
import { DBCreateUser, DBUserSearch } from "../db/handlers/user";
import IUser, { RequestUser } from "../types/user";
import *  as bcrypt from "bcrypt"
import * as jwt from "jsonwebtoken"
namespace personallyRequest {
    export type validate = {
        validate: { user: IUser, password: string } | false
    }

}


export const RegisterUser = async (req: Request, res: Response) => {
    const { JWT_KEY }: NodeJS.ProcessEnv = process.env
    try {
        if (req.body.validate) {
            return res.status(400).json({ error: "el usuario ya se encuentra registrado" })
        }
        const { user }: RequestUser = req.body
        const hashedpass: string = bcrypt.hashSync(user.password, 10)
        const usercreated: IUser = await DBCreateUser({ ...user, password: hashedpass })
        const newToken: Pick<IUser, "_id" | "role"> = { _id: usercreated?._id, role: usercreated?.role }
        const response: string = jwt.sign(newToken, JWT_KEY as jwt.Secret)
        res.status(200).send(response)

    } catch (error: any) {
        res.status(400).json({ error: error.message })
    }

}

export const LoginUser = async (req: Request, res: Response) => {

    try {

        const { validate }: personallyRequest.validate = req.body
        if (!validate) {
            return res.status(400).json({ error: "usuario no registrado" })
        }
        else {
            if (await bcrypt.compare(validate.password, validate.user.password)) {
                const newToken: Pick<IUser, "_id" | "role"> = { _id: validate.user._id, role: validate.user.role }
                const response: string = jwt.sign(newToken, "10")
                res.status(200).send(response)
            }
            else {
                res.status(400).json({ error: "contraseña incorrecta" })
            }
        }
    } catch (error: any) {
        console.error(error.message)
    }

}