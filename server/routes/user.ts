import express from "express"
import { checkUserExist } from "../middlewares/checkUserExist"
import { RegisterUser } from "../handlers/user"

const userRouter: express.IRouter = express.Router()

userRouter.post("/register", checkUserExist, RegisterUser)


export default userRouter