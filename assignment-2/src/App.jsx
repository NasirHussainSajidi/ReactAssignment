import React, { useState } from 'react'
import ProductCard from './component/ProductCard/ProductCard'
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero/Hero'
import Footer from './component/Footer/Footer'
// import image from './assets/images/download(1).jpg'

const App = () => {
  const [product, useProduct] = useState([])
  async function fetctProducts(){
    try {
          const data = await fetch('https://fakestoreapi.com/products')
    const product = await data.json()
    setProducts(product)
    } catch (error) {
      console.log("error fetching products")
    }

  }
  return (
    <div>
      <Navbar/>
      <Hero/>
      <ProductCard/>
      <Footer/>
      
    </div>
  )
}

export default App
