import { IPortafolio } from "./portafolio"
import { IProject } from "./project"
export interface RPortafolio {
    portafolio: IPortafolio
    idUser: string
}
export interface RProjects {
    projects: IProject[]
}
export interface RidUser {
    idUser: string
}