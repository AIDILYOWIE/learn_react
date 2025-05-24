export const Button = (props) => {
    const {children, variant = 'bg-black', onClick = () => {}, type = 'submit'} = props

    return (
        <button className={`h-10 w-full px-6 font-semibold rounded-md ${variant} text-white cursor-pointer`} type={type} onClick={onClick}>
            {children}
        </button>
    )
}