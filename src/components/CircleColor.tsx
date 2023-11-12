import { HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLSpanElement>{
    color: string;
}
const CircleColor = ({ color, ...rest }: IProps) => {
    return <span className='block w-5 h-5 rounded-full cursor-pointer'
    style={{
        backgroundColor: `${color}` //tailwind works on build time while react js work on run time 
    }} {...rest}/>
}

export default CircleColor