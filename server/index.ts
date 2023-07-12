import { mongoose } from "./db/mongodb"
import express from "express"
import userRouter from "./routes/user"
import cors from "cors"
mongoose.connection

const app: express.Express = express()
app.use(cors())
app.use(express.json())
app.get("/", (req, res) => {
    console.log("entre")
    res.status(200).json("aca")
})
app.use(userRouter)

app.listen(3001)