"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assingProjectsToPortafolio = void 0;
const models_1 = require("../models");
const mongoose_1 = require("mongoose");
const assingProjectsToPortafolio = async (projects) => {
    try {
        const { user } = projects[0];
        const id = new mongoose_1.Types.ObjectId(user);
        const portafoliosearch = await models_1.Portafolio.findOneAndUpdate({ user: id }, { projects: projects }, { returnDocument: "after" }).lean();
        if (portafoliosearch) {
            return portafoliosearch;
        }
        else {
            throw new Error();
        }
    }
    catch (error) {
        throw new Error(error.message);
    }
};
exports.assingProjectsToPortafolio = assingProjectsToPortafolio;
//# sourceMappingURL=assingProjectsToPortafolio.js.map