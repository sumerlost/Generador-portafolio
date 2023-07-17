import { Request, Response } from "express";
import { DBUserSearch } from "../db/handlers/user";
import IUser from "../types/user";

export const getUserInfo = async (req: Request, res: Response) => {
    try {

        const idUser: string | null = req.body.idUser ? req.body.idUser : null
        if (!idUser) {
            return res.status(400).json({ error: "no se cargo la id correctamente en la busqueda" })
        }
        const userSearch: IUser | null = await DBUserSearch(null, idUser)
        if (!userSearch) {
            return res.status(400).json({ error: "no se encontro el usuario" })
        }
        res.status(200).json(userSearch)
    } catch (error: any) {
        res.status(500).json({ error: error.message })
    }
}