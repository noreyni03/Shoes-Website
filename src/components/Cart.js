import React from 'react'
import CartCard from './cart/CartCard'
import Banner from './Banner'
import './cart/cart.css'


// -------------------------- Items Cart ------------------------------
const Cart = () => {
  return (
   <>
   <Banner name="My-Cart" />
    <CartCard />
   </> 
  )
}

export default Cart
