import React from 'react'
import Navbar from '../features/NavBar/Navbar'
import ProductList from '../features/ProductList/components/ProductList'
const Home = () => {
  return (
    <>
    <Navbar>
        <ProductList></ProductList>
    </Navbar>
    
    </>
  )
}

export default Home