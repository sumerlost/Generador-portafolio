import { mongoose } from "./db/mongodb"
import express from "express"
import userRouter from "./routes/user"
import cors from "cors"
import * as jwt from "jsonwebtoken"
mongoose.connection

const app: express.Express = express()
app.use(cors())
app.use(express.json())
app.get("/", async (req, res) => {

    console.log("entre")
    const { authorization }: any = req.headers
    // const token = jwt.sign("hola", "10")
    // console.log(token)
    const token = authorization.split(" ")
    console.log(jwt.decode(token[1]))
    res.status(200).send("ok")
})
app.use(userRouter)

app.listen(3001)