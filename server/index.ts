import { mongoose } from "./db/mongodb"
import express, { ErrorRequestHandler, NextFunction, Request, Response } from "express"
import authRouter from "./routes/auth"
import cors from "cors"
import * as jwt from "jsonwebtoken"
import portafolioRouter from "./routes/portafolio"
import * as dotenv from "dotenv"
import { error } from "console"

dotenv.config()
mongoose.connection

const app: express.Express = express()
app.use(cors())
app.use(express.json())
// app.get("/", async (req, res) => {

//     console.log("entre")
//     const { authorization }: any = req.headers
//     const token = authorization.substring(6)
//     const info = Buffer.from(token, 'base64').toString('utf-8');
//     console.log(info)
//     console.log(token)
//     res.status(200).send("ok")
// })
app.get("/generatetoken", (req, res) => {
    const { email, password }: any = req.query
    const newToken = jwt.sign({ email, password }, "1")
    res.status(200).send(newToken)
})

app.get("/prueba", (req, res) => {
    const { authorization }: any = req.headers
    const token = authorization?.substring(7)
    const response = jwt.verify(token, "1")
    console.log(response)
    res.status(200).send(response)
})

app.use(authRouter)
app.use(portafolioRouter)
app.use((error: ErrorRequestHandler, req: Request, res: Response, next: NextFunction): void => {
    res.status(401).json(error)

})
app.listen(3001)
