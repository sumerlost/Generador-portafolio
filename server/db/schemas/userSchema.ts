import IUser from "../../types/user";
import { Schema } from "mongoose";

export const userSchema = new Schema<IUser>({
    _id: Schema.Types.ObjectId,
    mail: {
        type: String,
        require: true,
        unique: true
    },
    firstname: {
        type: String,
        require: true,
    },
    lastname: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    image: {
        type: String
    },
    address: {
        type: String
    },
    phone: {
        type: Number
    },
    linkedin: {
        type: String
    },
    github: {
        type: String,
    },
    portafolio: { type: Schema.Types.ObjectId, ref: "Portafolio" },
    role: {
        type: String,
        enum: [
            "user",
            "recruiter"
        ],
        default: "user"
    }
})