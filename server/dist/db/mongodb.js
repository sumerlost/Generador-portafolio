"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect("mongodb://127.0.0.1:27017/gp");
mongoose_1.default.connection.on("open", (_) => {
    console.log("Database is connected to Atlas");
});
mongoose_1.default.connection.on("error", (error) => {
    console.log('Error connection: ', error);
});
exports.default = mongoose_1.default.connection;
