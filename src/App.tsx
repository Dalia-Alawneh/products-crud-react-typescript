import ProductCard from './components/ProductCard'
import { productList } from './data'

function App() {
  const renderProductList = productList.map(product => <ProductCard product={product} key={product.id}/>)

  return (
    <main className='container'>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-3 gap-2 md:gap-4'>
      {renderProductList}
    </div>
    </main>
  )
}

export default App
