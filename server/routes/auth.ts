import express from "express"
import { checkUserExist } from "../middlewares/checkUserExist"
import { LoginUser, RegisterUser } from "../handlers/auth"
import { uploadImageUser } from "../middlewares/uploadImageUser"
import { checkAuth } from "../middlewares/checkAuth"
import { getUserInfo } from "../handlers/user"

const authRouter: express.IRouter = express.Router()
authRouter.post("/register", checkUserExist, uploadImageUser, RegisterUser)
authRouter.get("/login", checkUserExist, LoginUser)
authRouter.get("/autologin", checkAuth, getUserInfo)

export default authRouter