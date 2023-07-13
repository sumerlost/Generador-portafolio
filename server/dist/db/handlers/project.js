"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBCreateProjects = void 0;
const models_1 = require("../models");
const mongoose_1 = require("mongoose");
async function DBCreateProjects(projects, iduser) {
    try {
        const formatProjects = projects.map(e => {
            const formatid = new mongoose_1.Types.ObjectId(iduser);
            return { ...e, user: formatid };
        });
        const bulkprojects = await models_1.Project.insertMany(formatProjects);
        return bulkprojects;
    }
    catch (error) {
        console.error(error.message);
        throw new Error("no se pudo crear el proyecto correctamente");
    }
}
exports.DBCreateProjects = DBCreateProjects;
//# sourceMappingURL=project.js.map