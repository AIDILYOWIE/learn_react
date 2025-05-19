import { InputForm } from "../Elements/Input/Index"
import { Button } from "../Elements/Button/Index"
import { useEffect, useRef } from "react"

export const FormRegister = () => {

    const usernameRef = useRef(null)
    useEffect(() => {
        usernameRef.current.focus()
    }, [])

    return (
        <form action="" className=" text-start">
            <InputForm label="Username" name="username" type="text" placeholder="your username" ref={usernameRef}></InputForm>
            <InputForm label="Email" name="email" type="email" placeholder="your email" ></InputForm>
            <InputForm label="Number" name="number" type="text" placeholder="your number" ></InputForm>
            <InputForm label="Password" name="password" type="password" placeholder="your password" ></InputForm>
            <Button variant='bg-blue-600'>Register</Button>
        </form>
    )
}