"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImageUser = void 0;
const file_1 = require("../handlers/file");
const uploadImageUser = (req, res, next) => {
    const { files } = req;
    const user = req.body.mail ? req.body : undefined;
    const images = files.images ? files.images : undefined;
    if (!user?.mail) {
        throw new Error("No se encuentra un mail, imposible proseguir");
    }
    if (!images) {
        return;
    }
    try {
        const response = (0, file_1.uploadFiles)(images, user.mail);
        user.image = response[0];
        req.body.user = user;
        next();
    }
    catch (error) {
        next(error);
    }
};
exports.uploadImageUser = uploadImageUser;
//# sourceMappingURL=uploadImageUser.js.map