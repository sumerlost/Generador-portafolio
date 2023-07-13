import { NextFunction, Request, Response } from "express";
import { IncomingHttpHeaders } from "http";
import * as jwt from "jsonwebtoken"


export const checkAuth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { JWT_KEY }: NodeJS.ProcessEnv = process.env
        let token: string = ""
        const { authorization }: IncomingHttpHeaders = req.headers
        if (authorization) {
            token = authorization.substring(7)
        }
        const info: jwt.JwtPayload | string | null = jwt.verify(token, JWT_KEY as jwt.Secret)
        if (info !== null && typeof info !== "string") {
            req.body.idUser = info._id
            next()
        }
    } catch (error) {
        next(error)
    }

}