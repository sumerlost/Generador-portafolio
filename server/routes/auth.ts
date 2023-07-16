import express from "express"
import { checkUserExist } from "../middlewares/checkUserExist"
import { LoginUser, RegisterUser } from "../handlers/auth"
import { uploadImageUser } from "../middlewares/uploadImageUser"

const authRouter: express.IRouter = express.Router()
authRouter.post("/register", checkUserExist, uploadImageUser, RegisterUser)
authRouter.get("/login", checkUserExist, LoginUser)


export default authRouter