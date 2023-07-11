import { Schema } from "mongoose";
import { Iproject } from "../../types/project";

export const projectSchema = new Schema<Iproject>({
    name: {
        type: String,
        require: true
    },
    deploy: {
        type: String,
        unique: true,
    },
    description: {
        type: String,
        require: true,
    },
    repository: {
        type: String,
        require: true,
        unique: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})