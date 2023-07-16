"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("./db/mongodb");
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("./routes/auth"));
const cors_1 = __importDefault(require("cors"));
const jwt = __importStar(require("jsonwebtoken"));
const portafolio_1 = __importDefault(require("./routes/portafolio"));
const dotenv = __importStar(require("dotenv"));
const multer_1 = __importDefault(require("multer"));
const morgan_1 = __importDefault(require("morgan"));
const upload = (0, multer_1.default)();
dotenv.config();
mongodb_1.mongoose.connection;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, morgan_1.default)("tiny"));
app.use(upload.fields([{ name: "cv", maxCount: 1 }, { name: "images", maxCount: 2 }]));
app.get("/generatetoken", (req, res) => {
    const { mail, password } = req.query;
    const newToken = jwt.sign({ mail, password }, "1");
    res.status(200).send(newToken);
});
app.get("/decodetoken", (req, res) => {
    const { authorization } = req.headers;
    const token = authorization ? authorization?.substring(7) : "";
    const response = jwt.decode(token);
    res.status(200).send(response);
});
app.post("/prueba", async (req, res) => {
    const response = "";
    res.status(200).json(response);
});
app.use(auth_1.default);
app.use(portafolio_1.default);
app.use((error, req, res, next) => {
    console.log(error);
    res.status(401).json(error.message);
});
app.listen(3001);
//# sourceMappingURL=index.js.map