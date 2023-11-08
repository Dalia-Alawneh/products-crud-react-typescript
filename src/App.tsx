import ProductCard from './components/ProductCard'

function App() {

  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-3 gap-2'>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
    </>
  )
}

export default App
