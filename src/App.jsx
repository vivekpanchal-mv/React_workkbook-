import React from 'react'
import Product from './component/Product'

const App = () => {
  return (
    <div>
      <Product name="Laptop" price={100000} color="Silver" />
      <Product name="Headphones" price={2500} color="Black" />
      <Product name="air conditioner" price={35000} color="white" />
    </div>
  )
}

export default App
