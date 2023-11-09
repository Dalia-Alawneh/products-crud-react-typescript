import ProductCard from './components/ProductCard'
import Button from './components/ui/Button'
import Modal from './components/ui/Modal'
import { productList } from './data'
import {useState} from 'react'
function App() {
    const [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
  const renderProductList = productList.map(product => <ProductCard product={product} key={product.id}/>)

  return (
    
    <main className='container'>
      <Button className="bg-indigo-700" width='w-full' onClick={openModal}  >Submit</Button>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <div className="flex space-x-3">
        <Button className="bg-indigo-700" width='w-full'>Submit</Button>
        <Button className="bg-gray-700" width='w-full'>Cancel</Button>
        </div>
      </Modal>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-3 gap-2 md:gap-4'>
      {renderProductList}
    </div>
    </main>
  )
}

export default App
