import { IPortafolioUnpopulated } from "./portafolio"
import { IProject } from "./project"
export interface RPortafolio {
    portafolio: IPortafolioUnpopulated
    idUser: string
}
export interface RProjects {
    projects: IProject[]
}
export interface RidUser {
    idUser: string
}

export interface RFiles {
    curriculum?: Express.Multer.File,
    images?: Express.Multer.File[]
}