import express from "express"
import { createPortafolio, createProject } from "../handlers/portafolio"

const portafolioRouter = express.Router()

portafolioRouter.post("/createpf", createPortafolio)

portafolioRouter.post("/createproject", createProject)

export default portafolioRouter