import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import 'react-toastify/dist/ReactToastify.css';


import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Login from "./components/Login"
import SingleProduct from './components/SingleProduct';
import Cart from './components/Cart';
import Checkout from './components/cart/Checkout';
import Confirmation from './components/cart/Confirmation';
import Footer from './components/Footer';
import AllProduct from './components/AllProduct';
import Wishlist from './components/Wishlist';
import { ToastContainer } from 'react-toastify';

function App() {
  //--------------------initializing AOS library------------------------------
  useEffect(() => {
    AOS.init({
      offset: 120, // offset (in px) from the original trigger point
      delay: 100, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease-in-out', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Hero />}></Route>
        <Route path="/single-product/:id" element={<SingleProduct />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<Checkout />} ></Route>
        <Route path='/confirmation' element={<Confirmation />}></Route>
        <Route path='/all-product' element={<AllProduct />}></Route>
        <Route path='/mens' element={<AllProduct />}></Route>
        <Route path='/mens/single-product/:id' element={<SingleProduct />}></Route>
        <Route path='/womens' element={<AllProduct />}></Route>
        <Route path='/wishlist' element={<Wishlist />}></Route>
      </Routes>

      <Footer />
      <ToastContainer />
    </>
  )
}


export default App