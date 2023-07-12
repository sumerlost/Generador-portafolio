import { Schema } from "mongoose";
import { IProject } from "../../types/project";

export const projectSchema = new Schema<IProject>({
    _id: Schema.Types.ObjectId,
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