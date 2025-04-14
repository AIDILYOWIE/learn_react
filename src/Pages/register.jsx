import { AuthLayouts } from "../Components/Layouts/AuthLayouts"
import { FormRegister } from "../Components/Fragments/FormRegister"

export const Login = () => {
    return (
        <AuthLayouts title='Register'>
            <FormRegister/>
        </AuthLayouts>
    )
}