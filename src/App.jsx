
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'

import axios from 'axios';
import { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

function App() {

  const [products, setProducts] = useState([]);
const [cart, setCart] = useState([]);

  useEffect(() => {

    const url = "https://dummyjson.com/products"
    axios.get(url)
      .then(data => setProducts(data.data.products))
      .catch(err=>console.log(err))
  }, [])

  
  // handling cart from product cart button;
  const handleCart = (product) => {
    const previousCart = JSON.parse(localStorage.getItem("cart"))
    const cart = []
    if (previousCart) {
      const updatedCart = [...previousCart, product]
      localStorage.setItem("cart", JSON.stringify(updatedCart))
      toast.success('Item Added to cart');

    } else {
      cart.push(product)
      localStorage.setItem("cart", JSON.stringify(cart))
      toast.success('Item Added to cart');
    }
  }


  // Handling search from navbar
  const handleSearch = (event) => {
    event.preventDefault();
    const searchText = event.target.search.value;

    const url = `https://dummyjson.com/products/search?q=${searchText}`
    axios.get(url)
      .then(data => setProducts(data.data.products))
      .catch(err=>console.log(err))
  }

// Handle Sorting based on price from nav bar
const handleSort = (target) => {
  if(target === "low"){
    const lowSortedProducts = products.sort( (a, b) => a.price - b.price)
    console.log(lowSortedProducts);
    setProducts(lowSortedProducts)
  }
  else{
   const highSortedProducts =  products.sort( (a, b) => b.price - a.price)
   console.log(highSortedProducts);
   setProducts(highSortedProducts)
  }
}
  return (
    <>
      {/* Toaster */}
      <Toaster />

      <Navbar handleSearch={handleSearch} cart={cart} handleSort={handleSort}/>
      <div className='min-h-[calc(100vh-68px)]'>
        <Home products={products} handleCart={handleCart} />
      </div>
      <Footer />
    </>
  )
}

export default App
