"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUser = exports.RegisterUser = void 0;
const user_1 = require("../db/handlers/user");
const bcrypt = __importStar(require("bcrypt"));
const jwt = __importStar(require("jsonwebtoken"));
const RegisterUser = async (req, res) => {
    try {
        if (req.body.validate) {
            return res.status(400).json({ error: "el usuario ya se encuentra registrado" });
        }
        const { user } = req.body;
        const hashedpass = bcrypt.hashSync(user.password, 10);
        const usercreated = await (0, user_1.DBCreateUser)({ ...user, password: hashedpass });
        const newToken = { _id: usercreated?._id, role: usercreated?.role };
        const response = jwt.sign(newToken, "10");
        res.status(200).send(response);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};
exports.RegisterUser = RegisterUser;
const LoginUser = async (req, res) => {
    try {
        const { validate } = req.body;
        if (!validate) {
            return res.status(400).json({ error: "usuario no registrado" });
        }
        else {
            if (await bcrypt.compare(validate.user.password, validate.password)) {
                const newToken = { _id: validate.user._id, role: validate.user.role };
                const response = jwt.sign(newToken, "10");
                res.status(200).send(response);
            }
            else {
                res.status(400).json({ error: "contraseña incorrecta" });
            }
        }
    }
    catch (error) {
        console.error(error.message);
    }
};
exports.LoginUser = LoginUser;
//# sourceMappingURL=auth.js.map