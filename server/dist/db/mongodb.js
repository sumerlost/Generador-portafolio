"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoose = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.mongoose = mongoose_1.default;
const datainit_1 = require("./data/datainit");
mongoose_1.default.connect("mongodb://127.0.0.1:27017/gp");
mongoose_1.default.connection.on("open", (_) => {
    console.log("Database is connected to Atlas");
});
mongoose_1.default.connection.on("error", (error) => {
    console.log('Error connection: ', error);
});
(0, datainit_1.dataInit)();
