import { Children } from "react"

export const AuthLayouts = (props) => {
    const {children, title}  = props

    return (
        <div className="flex justify-center min-h-screen items-center">
        <div className="w-full max-w-xs text-center">
          <h1 className='text-3xl font-bold mb-2 text-blue-600'>{title}</h1>
          <p className='font-medium text-slate-500'>
            welcome, please enter your details
          </p>
            {children}
        </div>
      </div>
    )
}