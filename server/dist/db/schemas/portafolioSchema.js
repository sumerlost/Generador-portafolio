"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.portafolioSchema = void 0;
const mongoose_1 = require("mongoose");
exports.portafolioSchema = new mongoose_1.Schema({
    cv: {
        type: String,
        require: true,
    },
    technologies: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Technology" }],
    projects: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Project" }],
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: "User" }
});
//# sourceMappingURL=portafolioSchema.js.map