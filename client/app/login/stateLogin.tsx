'use client'
import * as jwt from "jsonwebtoken"
import { FormEventHandler, ReactNode, useEffect, useState } from "react";
import FormLogin from "./form";
import { headers } from "next/dist/client/components/headers";

export default function StateLogin() {

    const [login, setLogin] = useState<{ mail: string, password: string }>({ mail: "", password: "" })
    const HandlerSubmit = (event: any): void => {
        event.preventDefault()

        const newToken = jwt.sign(login, "1")
        const headers: Headers = new Headers()
        headers.append("Content-Type", "application/json")
        headers.append("Authorization", newToken)
        fetch("http://localhost:3001/login", {
            method: "GET",
            headers: headers
        }).then(res => res.json()).then(data => {
            localStorage.setItem("token", data)
            const mytoken = localStorage.getItem("token")
            console.log(mytoken)
        }).catch(err => console.log(err))

    }


    return (

        <div>
            <FormLogin setLogin={setLogin} HandlerSubmit={HandlerSubmit} />
        </div>
    )
}