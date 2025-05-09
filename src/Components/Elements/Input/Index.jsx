import Label from "./Label"
import { Input } from "./Input"
export const InputForm = (props) => {
    const {label, type, name, placeholder} = props
    
    return (
        <div className="mb-6 mt-4">
            <Label htmlFor={name}>{label}</Label>
            <Input name={name} type={type} placeholder={placeholder}></Input>
        </div>
    )
}