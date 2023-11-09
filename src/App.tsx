import ProductCard from './components/ProductCard'
import Button from './components/ui/Button'
import Input from './components/ui/Input'
import Modal from './components/ui/Modal'
import { formInputsList, productList } from './data'
import { useState } from 'react'
function App() {
  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  const renderProductList = productList.map(product => <ProductCard product={product} key={product.id} />)
  const renderAddProductFormInputs = formInputsList.map(input => {
    return (<div key={input.id} className='flex flex-col'>
      <label className='text-sm font-medium mb-[3px]' htmlFor={input.id}>{input.label}</label>
      <Input id={input.id} />
    </div>)
  })

  console.log('====================================');
  console.log(renderAddProductFormInputs);
  console.log('====================================');
  return (

    <main className='container'>
      <Button className="bg-indigo-700" width='w-full' onClick={openModal}  >Submit</Button>
      <Modal isOpen={isOpen} closeModal={closeModal} title='ADD A NEW PRODUCT'>
        <div className='space-y-3'>
        {renderAddProductFormInputs}
        <div className="flex space-x-3">
          <Button className="bg-indigo-700 hover:bg-indigo-500" width='w-full'>Submit</Button>
          <Button className="bg-gray-600 hover:bg-gray-500" width='w-full' onClick={closeModal}>Cancel</Button>
        </div>
        </div>
      </Modal>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-3 gap-2 md:gap-4'>
        {renderProductList}
      </div>
    </main>
  )
}

export default App
