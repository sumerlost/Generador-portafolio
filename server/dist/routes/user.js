"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const checkUserExist_1 = require("../middlewares/checkUserExist");
const user_1 = require("../handlers/user");
const userRouter = express_1.default.Router();
userRouter.post("/register", checkUserExist_1.checkUserExist, user_1.RegisterUser);
exports.default = userRouter;
