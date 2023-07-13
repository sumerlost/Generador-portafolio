import express from "express"
import { createPortafolio } from "../handlers/portafolio"

const portafolioRouter = express.Router()

portafolioRouter.post("/createpf", createPortafolio)

export default portafolioRouter