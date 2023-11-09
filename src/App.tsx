import ProductCard from './components/ProductCard'
import Button from './components/ui/Button'
import Input from './components/ui/Input'
import Modal from './components/ui/Modal'
import { formInputsList, productList } from './data'
import { ChangeEvent, FormEvent, useState } from 'react'
import { IProduct } from './interfaces'
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
function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [product, setProduct] = useState(initialProductState)
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
  }
  const onCancelHandler = (): void => {
    setProduct(initialProductState)
    closeModal()
  }
  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
  }

  const renderProductList = productList.map(product => <ProductCard product={product} key={product.id} />)
  const renderAddProductFormInputs = formInputsList.map(input => {
    return (<div key={input.id} className='flex flex-col'>
      <label className='text-sm font-medium mb-[3px]' htmlFor={input.id}>{input.label}</label>
      <Input name={input.name} id={input.id} value={product[input.name]} onChange={onChangeHandler} />
    </div>)
  })


  return (

    <main className='container'>
      <Button className="bg-indigo-700" width='w-full' onClick={openModal}  >Submit</Button>
      <Modal isOpen={isOpen} closeModal={closeModal} title='ADD A NEW PRODUCT'>
        <div className='space-y-3'>
          {renderAddProductFormInputs}
          <form className="flex space-x-3" onSubmit={submitHandler}>
            <Button className="bg-indigo-700 hover:bg-indigo-500" width='w-full'>Submit</Button>
            <Button className="bg-gray-600 hover:bg-gray-500" width='w-full' onClick={onCancelHandler}>Cancel</Button>
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
