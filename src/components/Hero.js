import React from 'react'
import './homeComponents/home.css'
import Banner from './homeComponents/Banner'
import Services from './homeComponents/Services'
import NewArrival from './homeComponents/NewArrival'
import Deal from './homeComponents/Deal'
import Footer from './Footer'

const Hero = () => {
  return (
    <>
    <Banner />
    <Services />
    <Deal />
    <NewArrival />
    </>

  )
}

export default Hero
