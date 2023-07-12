import { mongoose } from "./db/mongodb"
mongoose.connection


const express = require("express")

const server = express()

server.listen(3001)