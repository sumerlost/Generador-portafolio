'use client'

import IUser from "@/types/user"
import { useEffect, useState } from "react"

export default function ButtonLogin() {

    const [user, setUser] = useState<IUser>()
    useEffect(() => {
        const token: string | null = localStorage.getItem("token")
        if (token) {
            console.log(token)
            const headers: Headers = new Headers()
            headers.append("Content-Type", "application/json")
            headers.append("Authorization", token)
            fetch("http://localhost:3001/autologin", {
                method: "GET",
                headers: headers
            }).then(res => res.json()).then(data => {
                console.log(data)
                setUser(data)
            }).catch(err => console.log(err))

        }
    }, [])

    if (user?.firstname)
        return (<div>
            <h3>{user.firstname}</h3>
        </div>)
    else {
        return (
            <h1>login</h1>

        )
    }
}