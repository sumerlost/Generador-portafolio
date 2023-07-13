import mongoose, { Types } from "mongoose";
import { dataInit } from "./data/datainit";
import { DBCreateProjects } from "./handlers/project";
import { Project } from "./models";

mongoose.connect("mongodb://127.0.0.1:27017/gp")

mongoose.connection.on("open", (_) => {
    console.log("Database is connected to Atlas");
});

mongoose.connection.on("error", (error) => {
    console.log('Error connection: ', error);
});

dataInit()

export { mongoose }