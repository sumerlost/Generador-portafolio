"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("./db/mongodb");
mongodb_1.mongoose.connection;
const express = require("express");
const server = express();
server.listen(3001);
