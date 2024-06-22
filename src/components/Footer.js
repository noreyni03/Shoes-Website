import React from 'react'
import {AiFillHome,AiFillPhone} from 'react-icons/ai'
import {FaEnvelope} from 'react-icons/fa'

const Footer = () => {
    return (

        <>


            <footer
                className="text-center text-lg-start text-white"
                style={{ backgroundColor: "#000" }}
            >

                <section className="">
                    <div className="container text-center text-md-start mt-5">

                        <div className="row mt-3 p-5">

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold">Shoe Company</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: " 60px", backgroundColor: "#7c4dff", height: "2px" }}
                                />
                                <p>
                                Nous sommes une entreprise de chaussures qui s'engage à créer des chaussures élégantes et confortables qui répondent aux besoins de nos clients.                                
                                </p>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold">Produits</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: "60px", backgroundColor: " #7c4dff", height: "2px" }}
                                />
                                <p>
                                    <a href="#!" className="text-white">Hommes</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-white">Femmes</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-white">Enfants</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-white">Nos derniers Produits</a>
                                </p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold">Liens Utiles</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: "60px", backgroundColor: "#7c4dff ", height: "2px" }}
                                />
                                <p>
                                    <a href="#!" className="text-white">Politique Privée</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-white">Conditions générales</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-white">A propos de nous</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-white">Contactez Nous</a>
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 className="text-uppercase fw-bold">Contact</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: "60px", backgroundColor: " #7c4dff", height: "2px" }}
                                />
                                <p><AiFillHome /> Dakar, BP 411013, Senegal</p>
                                <p><FaEnvelope /> entreprise@gmail.com</p>
                                <p><AiFillPhone /> +221 77 000 00 00</p>
                                <p><AiFillPhone /> +221 77 444 44 44</p>
                            </div>

                        </div>

                    </div>
                </section>



                <div className="text-center fw-light  p-3">
                    © 2024 Copyright : entreprise.com
                </div>

            </footer>

        </>

    )
}

export default Footer
