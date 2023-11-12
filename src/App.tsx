import ProductCard from './components/ProductCard'
import Button from './components/ui/Button'
import Input from './components/ui/Input'
import Modal from './components/ui/Modal'
import { categories, colors, formInputsList, productList } from './data'
import { ChangeEvent, FormEvent, useState } from 'react'
import { IProduct } from './interfaces'
import { productValidation } from './validation'
import ErrorMessage from './components/ErrorMessage'
import CircleColor from './components/CircleColor'
import { v4 as uuid } from "uuid";
import Select from './components/ui/Select'
const initialProductState: IProduct = {
  title: "",
  description: "",
  price: "",
  imageURL: "",
  colors: [],
  category: {
    name: "",
    imageURL: "",
  }
}
const initialErrorState = {
  title: "",
  description: "",
  price: "",
  imageURL: "",
}
function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [product, setProduct] = useState(initialProductState)
  const [products, setProducts] = useState(productList)
  const [errors, setErrors] = useState(initialErrorState)
  const [tempColors, setTempColors] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState(categories[3])
  console.log('====================================');
  console.log(tempColors);
  console.log('====================================');
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.target;
    setProduct({
      ...product,
      [name]: value
    })
    setErrors({
      ...errors,
      [name]: '',
    })
  }
  const onCancelHandler = (): void => {
    setProduct(initialProductState)
    closeModal()
  }
  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const { title, description, imageURL, price } = product
    const errors = productValidation({
      title,
      description,
      imageURL,
      price
    })
    const isProductValid = Object.values(errors).some(value => value === '')
      && Object.values(errors).every(value => value === '')
    if (!isProductValid) {
      setErrors(errors)
      return
    }
    console.log("Success");
    setProducts(prev => [{ id: uuid(), ...product, colors: tempColors, category: selectedCategory }, ...prev])
    setProduct(initialProductState)
    setTempColors([])
    closeModal()
  }

  const renderProductList = products.map(product => <ProductCard product={product} key={product.id} />)
  const renderAddProductFormInputs = formInputsList.map(input => {
    return (<div key={input.id} className='flex flex-col'>
      <label className='text-sm font-medium mb-[3px]' htmlFor={input.id}>{input.label}</label>
      <Input name={input.name} id={input.id} value={product[input.name]} onChange={onChangeHandler} />
      <ErrorMessage message={errors[input.name]} />
    </div>)
  })
  const renderColors = colors.map(color => <CircleColor key={color} color={color} onClick={() => {
    if (tempColors.includes(color)) {
      setTempColors(prev => prev.filter(item => item !== color))
      return
    }
    setTempColors(prev => [...prev, color])
  }} />)

  return (

    <main className='container'>
      <Button className="bg-indigo-700" width='w-full' onClick={openModal}  >Submit</Button>
      <Modal isOpen={isOpen} closeModal={closeModal} title='ADD A NEW PRODUCT'>
        <div className='space-y-3'>
          {renderAddProductFormInputs}
          <Select selected={selectedCategory} setSelected={setSelectedCategory} />
          <div className="flex gap-2">
            {renderColors}
          </div>
          <div className="flex flex-wrap gap-2">
            {
              tempColors.map(color => (
                <span className='p-1 text-sm rounded-md text-white font-semibold' key={color} style={{
                  backgroundColor: `${color}` //tailwind works on build time while react js work on run time 
                }} >{color}</span>
              ))
            }
          </div>
          <form className="flex space-x-3" onSubmit={submitHandler}>
            <Button className="bg-indigo-700 hover:bg-indigo-500" width='w-full'>Submit</Button>
            <Button className="bg-gray-600 hover:bg-gray-500" width='w-full' type='button' onClick={onCancelHandler}>Cancel</Button>
          </form>
        </div>
      </Modal>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-3 gap-2 md:gap-4'>
        {renderProductList}
      </div>
    </main>
  )
}

export default App
