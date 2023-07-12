"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataInit = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const models_1 = require("../models");
const dataInit = async () => {
    const techs = fs_1.default.readFileSync(path_1.default.resolve(__dirname, "tech.json"), "utf-8");
    const data = JSON.parse(techs);
    const aux = await models_1.Technology.find();
    if (aux.length === 0) {
        for (let element in data) {
            for (let e of data[element]) {
                const newTech = models_1.Technology.create({
                    name: e.name,
                    category: element,
                    image: e.image
                });
            }
        }
    }
};
exports.dataInit = dataInit;
