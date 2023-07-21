"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserInfo = void 0;
const user_1 = require("../db/handlers/user");
const getUserInfo = async (req, res) => {
    try {
        const idUser = req.body.idUser ? req.body.idUser : null;
        if (!idUser) {
            return res.status(400).json({ error: "no se cargo la id correctamente en la busqueda" });
        }
        const userSearch = await (0, user_1.DBUserSearch)(null, idUser);
        if (!userSearch) {
            return res.status(400).json({ error: "no se encontro el usuario" });
        }
        res.status(200).json(userSearch);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getUserInfo = getUserInfo;
//# sourceMappingURL=user.js.map