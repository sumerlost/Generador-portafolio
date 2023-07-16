import { mongoose } from "./db/mongodb"
import express, { ErrorRequestHandler, NextFunction, Request, Response } from "express"
import authRouter from "./routes/auth"
import cors from "cors"
import * as jwt from "jsonwebtoken"
import portafolioRouter from "./routes/portafolio"
import * as dotenv from "dotenv"
import multer from "multer"

const upload: multer.Multer = multer()

dotenv.config()
mongoose.connection


const app: express.Express = express()
app.use(cors())
app.use(express.json())

app.use(upload.fields([{ name: "cv", maxCount: 1 }, { name: "images", maxCount: 2 }]))
app.get("/generatetoken", (req, res) => {
    const { mail, password }: any = req.query
    const newToken = jwt.sign({ mail, password }, "1")
    res.status(200).send(newToken)
})
app.get("/decodetoken", (req, res) => {
    const { authorization } = req.headers
    const token = authorization ? authorization?.substring(7) : ""
    const response = jwt.decode(token)
    res.status(200).send(response)
})
app.post("/prueba", async (req: Request, res: Response) => {

    const response: string = ""
    res.status(200).json(response)
})

app.use(authRouter)
app.use(portafolioRouter)
app.use((error: any, req: Request, res: Response, next: NextFunction): void => {
    console.log(error)
    res.status(401).json(error.message)

})
app.listen(3001)
