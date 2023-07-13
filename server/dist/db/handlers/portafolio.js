"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBPortafolioCreate = void 0;
const models_1 = require("../models");
const DBPortafolioCreate = async (portafolio, iduser) => {
    try {
        const newP = new models_1.Portafolio(portafolio);
        const userP = await models_1.User.findByIdAndUpdate(iduser, {
            $set: {
                portafolio: newP._id
            }
        });
        if (userP === null) {
            throw Error("El usuario no existe");
        }
        newP.user = userP._id;
        const response = await newP.save();
        return response;
    }
    catch (error) {
        console.error(error.message);
        throw new Error("no se pudo crear el portafolio");
    }
};
exports.DBPortafolioCreate = DBPortafolioCreate;
//# sourceMappingURL=portafolio.js.map