import { Children } from "react"
import { Link } from "react-router"

export const AuthLayouts = (props) => {
    const {children, title, type}  = props

    return (
        <div className="flex justify-center min-h-screen items-center">
        <div className="w-full max-w-xs text-center">
          <h1 className='text-3xl font-bold mb-2 text-blue-600'>{title}</h1>
          <p className='font-medium text-slate-500'>
            welcome, please enter your details
          </p>
            {children}
            <p className=" text-sm mt-5 text-center">
                {type == 'login' ? "Don't have an account ?" : 'Have an account ?'}

                {type == 'login' ? (
                <Link to={"/register"} className="font-bold text-blue-600 mx-2">
                    Register
                </Link>) : 
                (                
                <Link to={"/login"} className="font-bold text-blue-600 mx-2">
                    Login
                </Link>)}

            </p>
        </div>
      </div>
    )
}