import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/gp")

mongoose.connection.on("open", (_) => {
    console.log("Database is connected to Atlas");
});

mongoose.connection.on("error", (error) => {
    console.log('Error connection: ', error);
});

export default mongoose.connection