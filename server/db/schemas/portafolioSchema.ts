import { Schema } from "mongoose";
import { IPortafolio } from "../../types/portafolio";

export const portafolioSchema = new Schema<IPortafolio>({

    cv: {
        type: String,
        require: true,
    },
    technologies: [{ type: Schema.Types.ObjectId, ref: "Technology" }],
    projects: [{ type: Schema.Types.ObjectId, ref: "Project" }],
    user: { type: Schema.Types.ObjectId, ref: "User" }
})