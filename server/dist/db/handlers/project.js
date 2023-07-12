"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBCreateProjects = void 0;
const models_1 = require("../models");
async function DBCreateProjects(projects) {
    try {
        const bulkprojects = await models_1.Project.insertMany(projects);
        return bulkprojects;
    }
    catch (error) {
        console.error(error.message);
        throw new Error("no se pudo crear el proyecto correctamente");
    }
}
exports.DBCreateProjects = DBCreateProjects;
