import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <>
      <section className="home" id="home">

<div className="slide-container active">
    <div className="slide row">
        <div className="col-md-5 content">
            <span>BIENVENUE SUR,</span>
            <h3>Le coin des BONS chaussures</h3>
            <p>Bienvenue sur notre site de chaussures ! Nous sommes votre destination privilégiée pour des chaussures élégantes et confortables. Que vous cherchiez des baskets, des sandales, des bottes, ou tout ce qui se trouve entre les deux, nous avons ce qu'il vous faut. Commencez à parcourir notre collection dès maintenant et améliorez votre jeu de chaussures dès aujourd'hui !</p>
            <Link to="/all-product" className="btn primary-btn">Achetez Maintenant</Link>
        </div>
        <div className="col-md-6 ms-auto image">
            <img src="assets/home-shoe-1.png" className="shoe" alt=""/>
            <img src="assets/home-text-1.png" className="text" alt=""/>
        </div>
    </div>
</div>
</section>


</>
  )
}

export default Banner
