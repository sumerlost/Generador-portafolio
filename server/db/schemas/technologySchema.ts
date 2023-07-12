import { Schema } from "mongoose";
import { ITechnology } from "../../types/technology";

export const technologySchema = new Schema<ITechnology>({
    _id: Schema.Types.ObjectId,
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