"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Technology = exports.Project = exports.Portafolio = exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema_1 = require("./schemas/userSchema");
const portafolioSchema_1 = require("./schemas/portafolioSchema");
const projectSchema_1 = require("./schemas/projectSchema");
const technologySchema_1 = require("./schemas/technologySchema");
exports.User = (0, mongoose_1.model)("User", userSchema_1.userSchema);
exports.Portafolio = (0, mongoose_1.model)("Portafolio", portafolioSchema_1.portafolioSchema);
exports.Project = (0, mongoose_1.model)("Project", projectSchema_1.projectSchema);
exports.Technology = (0, mongoose_1.model)("Technology", technologySchema_1.technologySchema);
//# sourceMappingURL=models.js.map