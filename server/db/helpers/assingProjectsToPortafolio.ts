import { IPortafolio } from "../../types/portafolio";
import { IProject } from "../../types/project";
import { Portafolio } from "../models";
import { RidUser } from "../../types/requestP";
// export const assingProjectsToPortafolio = async (projects: IProject[]): Promise<IPortafolio> => {
//     try {
//         const { user }: Pick<IProject, "user"> = projects[0]
//         const portafoliosearch: IPortafolio | null = await Portafolio.findOne(user)
//         if (portafoliosearch) {
//             return portafoliosearch

//         }
//         else {
//             throw new Error()
//         }

//     } catch (error: any) {
//         throw new Error(error.message)
//     }
// }