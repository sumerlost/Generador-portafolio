"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProject = exports.createPortafolio = void 0;
const portafolio_1 = require("../db/handlers/portafolio");
const project_1 = require("../db/handlers/project");
const createPortafolio = async (req, res) => {
    try {
        const { portafolio, idUser } = req.body;
        const newPortafolio = await (0, portafolio_1.DBPortafolioCreate)(portafolio, idUser);
        return res.status(200).send("portafolio creado correctamente");
    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
};
exports.createPortafolio = createPortafolio;
const createProject = async (req, res) => {
    try {
        const { projects } = req.body;
        const { idUser } = req.body;
        const projectscreated = await (0, project_1.DBCreateProjects)(projects, idUser);
    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
};
exports.createProject = createProject;
//# sourceMappingURL=portafolio.js.map