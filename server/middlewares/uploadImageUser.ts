import { NextFunction, Request, Response } from "express";
import IUser from "../types/user";
import { uploadFiles } from "../handlers/file";

export const uploadImageUser = (req: Request, res: Response, next: NextFunction) => {


    const { files }: any = req
    const user: IUser | undefined = req.body.mail ? req.body : undefined
    const images: Express.Multer.File[] | undefined = files.images ? files.images : undefined
    if (!user?.mail) {
        throw new Error("No se encuentra un mail, imposible proseguir")
    }
    if (!images) {
        return
    }
    try {

        const response: string[] = uploadFiles(images, user.mail)
        user.image = response[0]
        req.body.user = user
        next()
    } catch (error: any) {
        next(error)
    }

}