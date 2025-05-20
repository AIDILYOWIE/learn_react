import { useEffect, useState } from "react"
import { useLogin } from "../hooks/useLogin"

export const Profile = () => {
    const user = useLogin()

    return (
        <h1>{user}</h1>
    )
}