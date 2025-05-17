import { Button } from '../Elements/Button/Index'
import { InputForm } from '../Elements/Input/Index'

export const FormLogin = () => {
    const handleLogin = (e) => {
        e.preventDefault() // e.preventDefault() digunakan agar browser tidak terefresh / tidak terender ulang
        const email =  e.target.email.value
        const password = e.target.password.value
        
        // localstorage digunakan untuk menyimpan data di local
        localStorage.setItem('email', email)
        localStorage.setItem('password', password)

        return window.location.href = '/product'
    }

    return (
        <form action="" className=' text-start' onSubmit={handleLogin}>
            <InputForm label="Email" name="email" type="text" placeholder="your email"></InputForm>
            <InputForm label="Password" name="password" type="password" placeholder="your password" ></InputForm>
            <Button variant="bg-blue-600" type={"submit"}>Login</Button>
        </form>
    )
}