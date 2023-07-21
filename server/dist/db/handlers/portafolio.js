"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBPortafolioGet = exports.DBPortafolioCreate = void 0;
const models_1 = require("../models");
const DBPortafolioCreate = async (portafolio, iduser) => {
    try {
        const newP = new models_1.Portafolio(portafolio);
        const techsUser = await models_1.Technology.find({ name: { $in: portafolio.technologies } }).select("_id");
        newP.technologies = techsUser;
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
const DBPortafolioGet = async (filters = []) => {
    let response;
    try {
        const allPortafolios = await models_1.Portafolio.find({}).populate([{ path: "user" }, { path: "technologies" }, { path: "projects" }]);
        if (filters.length === 0) {
            if (allPortafolios.length !== 0) {
                response = allPortafolios;
            }
            else {
                throw Error("No hay usuarios registrados");
            }
        }
        else {
            const filteredbytech = allPortafolios.filter(portafolio => portafolio.technologies.every((e) => filters.includes(e.name)));
            response = filteredbytech;
        }
        console.log(response);
        return response;
    }
    catch (error) {
        console.log(error.message);
        throw new Error(error.message);
    }
};
exports.DBPortafolioGet = DBPortafolioGet;
//# sourceMappingURL=portafolio.js.map