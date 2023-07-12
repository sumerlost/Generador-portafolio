import fs from "fs"
import path from "path"
import { Technology } from "../models"
import { ITechnology } from "../../types/technology"

export const dataInit = async () => {

    const techs = fs.readFileSync(path.resolve(__dirname, "tech.json"), "utf-8")
    const data = JSON.parse(techs)
    const aux = await Technology.find()
    if (aux.length === 0) {
        for (let element in data) {
            for (let e of data[element]) {
                const newTech = Technology.create<ITechnology>({
                    name: e.name,
                    category: element,
                    image: e.image
                })
            }

        }
    }
}