import { model } from "mongoose";
import { userSchema } from "./schemas/userSchema";
import { portafolioSchema } from "./schemas/portafolioSchema";
import IUser from "../types/user";
import { IPortafolio, IPortafolioUnpopulated } from "../types/portafolio";
import { IProject } from "../types/project";
import { projectSchema } from "./schemas/projectSchema";
import { ITechnology } from "../types/technology";
import { technologySchema } from "./schemas/technologySchema";

export const User = model<IUser>("User", userSchema)
export const Portafolio = model<IPortafolioUnpopulated>("Portafolio", portafolioSchema)
export const Project = model<IProject>("Project", projectSchema)
export const Technology = model<ITechnology>("Technology", technologySchema)
