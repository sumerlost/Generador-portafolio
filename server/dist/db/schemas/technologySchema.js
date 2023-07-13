"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.technologySchema = void 0;
const mongoose_1 = require("mongoose");
exports.technologySchema = new mongoose_1.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    image: {
        type: String,
        require: true,
        unique: true
    },
    category: {
        type: String,
        require: true,
    }
});
//# sourceMappingURL=technologySchema.js.map