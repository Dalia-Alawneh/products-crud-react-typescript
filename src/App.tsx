import ProductCard from './components/ProductCard'
import { productList } from './data'

function App() {
  const renderProductList = productList.map(product => <ProductCard product={product} key={product.id}/>)

  return (
    <>
    <div className='grid items-stretch grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-3 gap-2'>
      {renderProductList}
    </div>
    </>
  )
}

export default App
