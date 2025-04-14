import { Button } from '../Elements/Button/Index'
import { InputForm } from '../Elements/Input/Index'

export const FormLogin = () => {
    return (
        <form action="" className=' text-start'>
            <InputForm label="Email" name="email" type="text" placeholder="your email" ></InputForm>
            <InputForm label="Password" name="password" type="password" placeholder="your password" ></InputForm>
            <Button variant="bg-blue-600">Login</Button>
        </form>
    )
}