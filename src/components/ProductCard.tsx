import { IProduct } from "../interfaces/index.ts"
import { textSlicer } from "../utils/functions.ts";
import CircleColor from "./CircleColor.tsx";
import Image from "./Image.tsx"
import Button from "./ui/Button.tsx"

interface IProps {
    product: IProduct;
}
const ProductCard = ({ product }: IProps) => {
    const { title, description, imageURL, price, category, colors } = product
    const renderColors = colors.map(color => (<CircleColor 
        key={color} color={color} />))
    return (
        <div className="max-w-sm mx-auto md:mx-0 border-2 rounded-md p-2 flex flex-col">
            <Image className="rounded-md h-52 w-full lg:object-cover"
                imageUrl={imageURL}
                alt={title}
            />
            <h3>{title}</h3>
            <p>{textSlicer(description, 70)}</p>
            <div className="flex items-center space-x-2 my-5">
            {renderColors}
            </div>
            <div className="flex justify-between items-center">
                <span className="text-indigo-400 font-bold">${price}</span>
                <Image className="w-10 h-10 rounded-full object-center"
                    imageUrl={category.imageURL}
                    alt="name"
                />
            </div>
            <div className="flex space-x-2 mt-5">
                <Button className="bg-indigo-700" width="w-full">Edit</Button>
                <Button className="bg-red-700" width="w-full">Delete</Button>
            </div>
        </div>

    )
}

export default ProductCard