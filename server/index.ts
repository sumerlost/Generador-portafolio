import { mongoose } from "./db/mongodb"
import express from "express"
import authRouter from "./routes/auth"
import cors from "cors"
import * as jwt from "jsonwebtoken"
import portafolioRouter from "./routes/portafolio"
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
app.use(authRouter)
app.use(portafolioRouter)

app.listen(3001)
app.on("error", () => {
    app.listen(3002)
})