import { ButtonHTMLAttributes, ReactNode, memo } from 'react'
interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
    width?:"w-full" | "w-fit";
}
const Button = ({ children, className, width, ...rest }: IProps) => {
    return (
        <button className={`${className} ${width} rounded-md text-white p-2`} {...rest}>
            {children}
        </button>
    )
}

export default memo(Button)