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
exports.checkUserExist = void 0;
const user_1 = require("../db/handlers/user");
const jwt = __importStar(require("jsonwebtoken"));
const checkUserExist = async (req, res, next) => {
    try {
        let token = "";
        const { authorization } = req.headers;
        if (authorization) {
            token = authorization.substring(7);
        }
        const info = jwt.decode(token);
        if (info !== null && typeof info !== "string") {
            const usearch = await (0, user_1.DBUserSearch)(info.email);
            if (usearch !== null) {
                req.body.validate = {
                    user: usearch, password: info.password
                };
            }
            else {
                req.body.validate = false;
            }
        }
        next();
    }
    catch (error) {
        next(error);
    }
};
exports.checkUserExist = checkUserExist;
//# sourceMappingURL=checkUserExist.js.map