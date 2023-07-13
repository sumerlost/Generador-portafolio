import express from "express"
import { checkUserExist } from "../middlewares/checkUserExist"
import { LoginUser, RegisterUser } from "../handlers/auth"

const authRouter: express.IRouter = express.Router()

authRouter.post("/register", checkUserExist, RegisterUser)
authRouter.get("/login", checkUserExist, LoginUser)


export default authRouter