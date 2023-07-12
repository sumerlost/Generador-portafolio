"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectSchema = void 0;
const mongoose_1 = require("mongoose");
exports.projectSchema = new mongoose_1.Schema({
    _id: mongoose_1.Schema.Types.ObjectId,
    name: {
        type: String,
        require: true
    },
    deploy: {
        type: String,
        unique: true,
    },
    description: {
        type: String,
        require: true,
    },
    repository: {
        type: String,
        require: true,
        unique: true
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User"
    }
});
