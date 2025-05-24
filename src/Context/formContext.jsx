import { createContext, useContext, useReducer } from "react";
import { loginFormreducer } from "../reducer/formrReducer";

const formContext = createContext(null)

export const FormProvider = ({ children }) => {
    const [form, dispatch] = useReducer(loginFormreducer, {})

    return (
        <formContext.Provider value={{ form, dispatch }}>
            {children}
        </formContext.Provider>
    )
}

export const useForm = () => {
    return useContext(formContext)
}