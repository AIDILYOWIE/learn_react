import { AuthLayouts } from "../Components/Layouts/AuthLayouts"
import { FormRegister } from "../Components/Fragments/FormRegister"

export const Register = () => {
    return (
        <AuthLayouts title='Register'>
            <FormRegister/>
        </AuthLayouts>
    )
}