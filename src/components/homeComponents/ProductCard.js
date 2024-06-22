import React from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import { Link } from 'react-router-dom'
const ProductCard = ({ product }) => {
    return (

        <div className=" product-card d-flex" >
            <div className="product d-flex flex-column">
                {/* Redirect to single page of particular product */}
                <Link to={`single-product/${product.id}`} className="img-prod"><img className="img-fluid" src={product.img} />
                    <div className="overlay"></div>
                </Link>
                <div className="text py-3 pb-4 px-3">
                    <div className="d-flex">
                        <div className="cat">
                            <span>{product.category}</span>
                        </div>
                        <div className="rating">
                            <p className="text-right mb-0">
                                <span className="ion-ios-star-outline"><AiOutlineStar /></span>
                                <span className="ion-ios-star-outline"><AiOutlineStar /></span>
                                <span className="ion-ios-star-outline"><AiOutlineStar /></span>
                                <span className="ion-ios-star-outline"><AiOutlineStar /></span>
                                <span className="ion-ios-star-outline"><AiOutlineStar /></span>
                            </p>
                        </div>
                    </div>
                    <h3><a href={product.url}></a>{product.name}</h3>
                    <div className="pricing">
                        {/* if product is on sale show salePrice otherwise original Price */}
                        {
                            product.onSale
                                ? <p className="card-text fw-medium mt-2">MRP : <span className="text-muted text-decoration-line-through">${product.price}</span> ${product.salePrice}</p>
                                : <p className="card-text fw-medium mt-2">MRP : ${product.price}</p>
                        }
                    </div>
                    <p className="bottom-area d-flex px-3">
                        <a href="#" className="add-to-cart text-center py-2 mr-1"><span>Ajouter Au Panier <i className="ion-ios-add ml-1"></i></span></a>
                        <a href="#" className="buy-now text-center py-2">Achetez Maintenant<span><i className="ion-ios-cart ml-1"></i></span></a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
