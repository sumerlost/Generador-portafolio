"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadCv = void 0;
const file_1 = require("../handlers/file");
const user_1 = require("../db/handlers/user");
const uploadCv = async (req, res, next) => {
    const { files } = req;
    const idUser = req.body.idUser;
    const cv = files.cv ? files.cv : undefined;
    const portafolio = req.body;
    if (!idUser) {
        throw new Error("No se encuentra un id, imposible proseguir");
    }
    if (!cv) {
        next();
        return;
    }
    try {
        const user = await (0, user_1.DBUserSearch)(null, idUser);
        if (user === null) {
            const myerror = new Error("no se encontro el usuario");
            next(myerror);
            return;
        }
        const response = (0, file_1.uploadFiles)(cv, user.mail);
        portafolio.cv = response[0];
        req.body.portafolio = portafolio;
        next();
    }
    catch (error) {
        next(error);
    }
};
exports.uploadCv = uploadCv;
//# sourceMappingURL=uploadCv.js.map