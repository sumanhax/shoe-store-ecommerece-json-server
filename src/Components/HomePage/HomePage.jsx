import React from 'react'
import Hero from '../Hero/Hero'
import Product from '../Product/Product'
import Features from '../Features/Features'
import AllProduct from '../Product/AllProduct'
import Carousel from '../Carousel/Carousel'
import Video from '../Video/Video'



const HomePage = () => {
  return (
   <div>
     <Hero/>
    <Product/>
    <Features/>
    <AllProduct/>
    <Video/>
   </div>
    
  )
}

export default HomePage