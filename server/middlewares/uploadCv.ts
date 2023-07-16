import { NextFunction, Request, Response } from "express";
import IUser from "../types/user";
import { uploadFiles } from "../handlers/file";
import { DBUserSearch } from "../db/handlers/user";
import { error } from "console";
import { IPortafolio } from "../types/portafolio";

export const uploadCv = async (req: Request, res: Response, next: NextFunction) => {

    const { files }: any = req
    const idUser: string = req.body.idUser
    const cv: Express.Multer.File[] | undefined = files.cv ? files.cv : undefined
    const portafolio: IPortafolio = req.body
    if (!idUser) {
        throw new Error("No se encuentra un id, imposible proseguir")
    }
    if (!cv) {
        next()
        return
    }
    try {
        const user: IUser | null = await DBUserSearch(null, idUser)
        if (user === null) {
            const myerror = new Error("no se encontro el usuario")
            next(myerror)
            return
        }
        const response: string[] = uploadFiles(cv, user.mail)
        portafolio.cv = response[0]
        req.body.portafolio = portafolio
        next()
    } catch (error: any) {
        next(error)
    }

}