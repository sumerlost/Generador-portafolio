import { NextFunction, Request, Response } from "express";
import { DBUserSearch } from "../db/handlers/user";
import IUser, { RequestUser } from "../types/user";

export const checkUserExist = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log("entre")
        const { user }: RequestUser = req.body
        const usearch: IUser | null = await DBUserSearch(user.mail)
        if (usearch !== null) {
            next()
        }
        else {
            const myerror = new Error("usuario ya registrado")
            next(myerror)
        }
    } catch (error) {
        next(error)
    }

}