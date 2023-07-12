"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkUserExist = void 0;
const user_1 = require("../db/handlers/user");
const checkUserExist = async (req, res, next) => {
    try {
        const { user } = req.body;
        const usearch = await (0, user_1.DBUserSearch)(user.mail);
        if (!usearch) {
            next();
        }
        else {
            const myerror = new Error("usuario ya registrado");
            next(myerror);
        }
    }
    catch (error) {
        next(error);
    }
};
exports.checkUserExist = checkUserExist;
