interface IProps {
    message: string;
}
const ErrorMessage = ({ message }: IProps) => {
    return (
        <span className="block text-red-700 font-semibold text-sm">{message}</span>
    )
}

export default ErrorMessage