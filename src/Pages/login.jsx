import { AuthLayouts } from "../Components/Layouts/AuthLayouts"
import { FormLogin } from "../Components/Fragments/FormLogin"

export const Login = () => {
    return (
        <AuthLayouts title='Login' type='login'>
            <FormLogin/>
        </AuthLayouts>
    )
}