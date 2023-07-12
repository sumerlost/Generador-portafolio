import { Schema } from "mongoose";
import { ITechnology } from "../../types/technology";

export const technologySchema = new Schema<ITechnology>({

    name: {
        type: String,
        require: true,
        unique: true
    },
    image: {
        type: String,
        require: true,
        unique: true
    },
    category: {
        type: String,
        require: true,
    }
})