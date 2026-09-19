import React from 'react'

const Product = ({ name, price, color }) => {
  return (
    <>
     
      <h1> welcome to Product component</h1>
      <h2>Brand: {name}</h2>
      <p>Price: ${price}</p>
      <p>Color: {color}</p>
    </>
  )
}

export default Product
