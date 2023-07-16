"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBUserSearch = exports.DBCreateUser = void 0;
const models_1 = require("../models");
const DBCreateUser = async (user) => {
    try {
        const newUser = new models_1.User(user);
        newUser.portafolio = null;
        const response = await newUser.save();
        return response;
    }
    catch (error) {
        console.error("Error: ", error.message);
        throw new Error(error.message);
    }
};
exports.DBCreateUser = DBCreateUser;
const DBUserSearch = async (mail, iduser) => {
    try {
        const userSearch = mail ? await models_1.User.findOne({ mail: mail }).lean() : await models_1.User.findById(iduser).lean();
        if (userSearch) {
            return userSearch;
        }
        else {
            return null;
        }
    }
    catch (error) {
        console.error("Error: ", error.message);
        throw new Error(error.message);
    }
};
exports.DBUserSearch = DBUserSearch;
//# sourceMappingURL=user.js.map