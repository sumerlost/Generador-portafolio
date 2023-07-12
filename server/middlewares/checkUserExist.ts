import { NextFunction, Request, Response } from "express";
import { DBUserSearch } from "../db/handlers/user";
import IUser, { RequestUser } from "../types/user";
import { IncomingHttpHeaders } from "http";
import * as jwt from "jsonwebtoken"

export const checkUserExist = async (req: Request, res: Response, next: NextFunction) => {
    try {

        let token: string = ""
        const { authorization }: IncomingHttpHeaders = req.headers
        if (authorization) {
            token = authorization.substring(7)
        }
        const info: jwt.JwtPayload | string | null = jwt.decode(token)
        if (info !== null && typeof info !== "string") {
            const usearch: IUser | null = await DBUserSearch(info.email)
            if (usearch !== null) {
                req.body.validate = {
                    user: usearch, password: info.password
                }
            }
            else {
                req.body.validate = false
            }
        }
        next()
    } catch (error) {
        next(error)
    }

}