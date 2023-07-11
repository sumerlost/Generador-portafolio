"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Portafolio = exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema_1 = require("./schemas/userSchema");
const portafolioSchema_1 = require("./schemas/portafolioSchema");
exports.User = (0, mongoose_1.model)("User", userSchema_1.userSchema);
exports.Portafolio = (0, mongoose_1.model)("Portafolio", portafolioSchema_1.portafolioSchema);
