import { Request, Response } from "express";
import { Portafolio } from "../db/models";
import { IPortafolio, IPortafolioPopulated } from "../types/portafolio";
import { DBPortafolioCreate, DBPortafolioGet } from "../db/handlers/portafolio";
import { IProject } from "../types/project";
import { DBCreateProjects } from "../db/handlers/project";
import { assingProjectsToPortafolio } from "../db/helpers/assingProjectsToPortafolio";
import { RPortafolio, RProjects, RidUser } from "../types/requestP";


export const createPortafolio = async (req: Request, res: Response) => {

    try {
        const { portafolio, idUser }: RPortafolio = req.body
        const newPortafolio: IPortafolio = await DBPortafolioCreate(portafolio, idUser)
        return res.status(200).json("portafolio creado correctamente")

    } catch (error: any) {
        return res.status(400).json({ error: error.message })
    }
}

export const createProject = async (req: Request, res: Response) => {
    try {
        const { projects }: RProjects = req.body
        const { idUser }: RidUser = req.body
        const projectscreated: IProject[] = await DBCreateProjects(projects, idUser)
        const response: IPortafolio = await assingProjectsToPortafolio(projectscreated)
        res.status(200).json(response)
    } catch (error: any) {
        return res.status(400).json({ error: error.message })
    }
}

export const getAllPortafolios = async (req: Request<{}, {}, {}, { filters: string[] }>, res: Response) => {
    try {
        const { filters }: { filters: string[] } = req.query
        const portafoliosSearch: IPortafolioPopulated[] = await DBPortafolioGet(filters)
        res.status(200).json(portafoliosSearch)
    } catch (error: any) {
        res.status(400).json({ error: error.message })
    }
}