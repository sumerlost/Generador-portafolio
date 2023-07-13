import express from "express"
import { createPortafolio, createProject } from "../handlers/portafolio"
import { checkAuth } from "../middlewares/checkAuth"

const portafolioRouter = express.Router()

portafolioRouter.post("/createpf", checkAuth, createPortafolio)

portafolioRouter.post("/createproject", checkAuth, createProject)

export default portafolioRouter