import React from 'react'
import Banner from '../Banner'
import { Link } from 'react-router-dom'

const Checkout = () => {
    return (
        <>
            {/* ------------------------------ Checkout Form ------------------------------------- */}

            <Banner name="Checkout" />
            <section>
                <div className="container mt-5">
                    <div className="row justify-content-center">
                        <div className="col-xl-10">
                            <form action="#" className="billing-form">
                                <h3 className="mb-4 billing-heading">Détails de la facturation</h3>
                                <div className="row align-items-end">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="firstname">Prénom</label>
                                            <input type="text" className="form-control" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="lastname">Nom</label>
                                            <input type="text" className="form-control" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="w-100"></div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label for="country">Etat / Pays</label>
                                            <div className="select-wrap">
                                                <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                                                <select name="" id="" className="form-control">
                                                    <option value="">Inde</option>
                                                    <option value="">Italie</option>
                                                    <option value="">Philippines</option>
                                                    <option value="">Corée Du Sud</option>
                                                    <option value="">Hongkong</option>
                                                    <option value="">Japon</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-100"></div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="streetaddress">Adresse de votre Rue</label>
                                            <input type="text" className="form-control" placeholder="House number and street name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Appartment, suite, unit etc: (optional)" />
                                        </div>
                                    </div>
                                    <div className="w-100"></div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="towncity">Ville / Région</label>
                                            <input type="text" className="form-control" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="postcodezip">CodePostal / ZIP *</label>
                                            <input type="text" className="form-control" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="w-100"></div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="phone">Telephone</label>
                                            <input type="text" className="form-control" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="emailaddress">Email</label>
                                            <input type="text" className="form-control" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="w-100"></div>

                                </div>
                            </form>


                            {/* ------------------------- Total Bill ---------------------------------- */}

                            <div className="row mt-5 pt-3 d-flex">
                                <div className="col-md-6 d-flex">
                                    <div className="cart-detail cart-total bg-light  p-4">
                                        <h3 className="billing-heading mb-4">Total du Panier</h3>
                                        <p className="d-flex">
                                            <span>Sous-total</span>
                                            <span>$20.60</span>
                                        </p>
                                        <p className="d-flex">
                                            <span>Livraison</span>
                                            <span>$0.00</span>
                                        </p>
                                        <p className="d-flex">
                                            <span>Remise</span>
                                            <span>$3.00</span>
                                        </p>
                                        <hr />
                                        <p className="d-flex total-price">
                                            <span>Total</span>
                                            <span>$17.60</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="cart-detail bg-light p-3 p-md-4">
                                        <h3 className="billing-heading mb-4">Method de Payment</h3>
                                        <div className="form-group">
                                            <div className="col-md-12">
                                                <div className="radio">
                                                    <label><input type="radio" name="optradio" className="mr-2" /> Transfert bancaire direct</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-md-12">
                                                <div className="radio">
                                                    <label><input type="radio" name="optradio" className="mr-2" /> Paiement par chèque</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-md-12">
                                                <div className="radio">
                                                    <label><input type="radio" name="optradio" className="mr-2" /> Paypal</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-md-12">
                                                <div className="checkbox">
                                                    <label><input type="checkbox" value="" className="mr-2" /> J'ai lu et j'accepte les termes et conditions</label>
                                                </div>
                                            </div>
                                        </div>
                                        <p className='cart-wrap'>
                                            <Link to="/confirmation" className=" btn btn-primary py-3 px-4">Passer une commande</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Checkout