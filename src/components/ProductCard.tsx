import { IProduct } from "../interfaces/index.ts"
import { textSlicer } from "../utils/functions.ts";
import Image from "./Image.tsx"
import Button from "./ui/Button.tsx"

interface IProps {
    product:IProduct;
}
const ProductCard = ({ product }: IProps) => {
    const {title, description, imageURL, price} = product
    return (
        <div>
            <div className="border-2 rounded-md p-2 flex flex-col">
                <Image className="rounded-md"
                imageUrl={imageURL}
                    alt={title}
                />
                <h3>{title}</h3>
                <p>{textSlicer(description,70)}</p>
                <div className="flex items-center space-x-2 my-5">
                    <span className="w-5 h-5 rounded-full bg-red-300" />
                    <span className="w-5 h-5 rounded-full bg-red-300" />
                    <span className="w-5 h-5 rounded-full bg-red-300" />
                    <span className="w-5 h-5 rounded-full bg-red-300" />
                </div>
                <div className="flex justify-between items-center">
                    <span>${price}</span>
                    <Image className="w-10 h-10 rounded-full object-center"
                    imageUrl="https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="name"
                />
                </div>
                <div className="flex space-x-2 mt-5">
                    <Button className="bg-indigo-700" width="w-full">Edit</Button>
                    <Button className="bg-red-700" width="w-full">Delete</Button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard