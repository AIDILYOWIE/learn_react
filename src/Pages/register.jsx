import { AuthLayouts } from "../Components/Layouts/AuthLayouts"
import { FormRegister } from "../Components/Fragments/FormRegister"
import { Link } from "react-router"

export const Register = () => {
    return (
        <AuthLayouts title='Register' type='register'>
            <FormRegister/>
        </AuthLayouts>
    )
}