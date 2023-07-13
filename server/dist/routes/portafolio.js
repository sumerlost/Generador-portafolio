"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const portafolio_1 = require("../handlers/portafolio");
const checkAuth_1 = require("../middlewares/checkAuth");
const portafolioRouter = express_1.default.Router();
portafolioRouter.post("/createpf", checkAuth_1.checkAuth, portafolio_1.createPortafolio);
portafolioRouter.post("/createproject", checkAuth_1.checkAuth, portafolio_1.createProject);
exports.default = portafolioRouter;
//# sourceMappingURL=portafolio.js.map