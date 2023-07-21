"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const checkUserExist_1 = require("../middlewares/checkUserExist");
const auth_1 = require("../handlers/auth");
const uploadImageUser_1 = require("../middlewares/uploadImageUser");
const checkAuth_1 = require("../middlewares/checkAuth");
const user_1 = require("../handlers/user");
const authRouter = express_1.default.Router();
authRouter.post("/register", checkUserExist_1.checkUserExist, uploadImageUser_1.uploadImageUser, auth_1.RegisterUser);
authRouter.get("/login", checkUserExist_1.checkUserExist, auth_1.LoginUser);
authRouter.get("/autologin", checkAuth_1.checkAuth, user_1.getUserInfo);
exports.default = authRouter;
//# sourceMappingURL=auth.js.map