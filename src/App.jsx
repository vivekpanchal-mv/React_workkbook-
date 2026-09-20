import React from 'react'
import Product from './component/Product'
import Toggle from './component/Toggle'
import UseEffects from './component/UseEffects'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './component/About'
import Contact from './component/Contact'
import Home from './component/Home'
import UseMemo from './component/UseMemo'
import Api from './component/Api'
import User from './component/User'
const App = () => {
  return (
    <div>
      {/* <Product name="Laptop" price={100000} color="Silver" />
      <Product name="Headphones" price={2500} color="Black" />
      <Product name="air conditioner" price={35000} color="white" /> */}
      {/* <Toggle /> */}
      {/* <UseEffects /> */}
{/* <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</BrowserRouter> */}
{/* <UseMemo /> */}
<User />
    </div>
  )
}

export default App
