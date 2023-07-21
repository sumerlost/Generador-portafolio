import express from "express"
import { createPortafolio, createProject, getAllPortafolios } from "../handlers/portafolio"
import { checkAuth } from "../middlewares/checkAuth"
import { uploadCv } from "../middlewares/uploadCv"

const portafolioRouter = express.Router()

portafolioRouter.post("/createpf", checkAuth, uploadCv, createPortafolio)

portafolioRouter.post("/createproject", checkAuth, createProject)

portafolioRouter.get("/getportafolios", getAllPortafolios)
export default portafolioRouter