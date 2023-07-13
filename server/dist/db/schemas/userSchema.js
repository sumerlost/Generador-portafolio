"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const mongoose_1 = require("mongoose");
exports.userSchema = new mongoose_1.Schema({
    mail: {
        type: String,
        require: true,
        unique: true
    },
    firstname: {
        type: String,
        require: true,
    },
    lastname: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    image: {
        type: String
    },
    address: {
        type: String
    },
    phone: {
        type: Number
    },
    linkedin: {
        type: String
    },
    github: {
        type: String,
    },
    portafolio: { type: mongoose_1.Schema.Types.ObjectId, ref: "Portafolio" },
    role: {
        type: String,
        enum: [
            "user",
            "recruiter"
        ],
        default: "user"
    }
});
//# sourceMappingURL=userSchema.js.map