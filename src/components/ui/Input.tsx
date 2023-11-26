import { InputHTMLAttributes, memo } from "react"
const Input = ({ ...rest }: InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <input className="border-[1px] border-gray-300 shadow-md
        focus:border-indigo-500 focus:outline-none focus:ring-1
        focus:ring-indigo-500 rounded-md p-3 text-md"
            {...rest}
        />
    )
}

export default memo(Input)