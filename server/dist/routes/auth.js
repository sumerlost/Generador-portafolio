"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const checkUserExist_1 = require("../middlewares/checkUserExist");
const auth_1 = require("../handlers/auth");
const authRouter = express_1.default.Router();
authRouter.post("/register", checkUserExist_1.checkUserExist, auth_1.RegisterUser);
authRouter.get("/login", checkUserExist_1.checkUserExist, auth_1.LoginUser);
exports.default = authRouter;
//# sourceMappingURL=auth.js.map