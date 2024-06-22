import React, { useState } from 'react'
import products from '../data/products.json'
import WishListcard from './AllProductsComponents/WishlistCard'
import { wishListItems } from './AllProductsComponents/Card'
import data from '../data/products.json';
import { AiFillCloseCircle } from 'react-icons/ai'
import Banner from './Banner';

const Wishlist = () => {
    var wishList = [];
    var newl = [];

    //console.log(wishListItems);
    for (var i = 0; i < wishListItems.length; i++) {
        wishList.push(data[wishListItems[i]]);
    }
    const [wishListProducts, setwishListProducts] = useState(wishList);
    //console.log(wishListProducts);

    const deleteFromWishList = (id) => {
        for (var i = 0; i < wishListItems.length; i++) {
            if (wishListItems[i] === id) {
                wishListItems.splice(i, 1);
            }
        }
        wishList = [];
        for (var i = 0; i < wishListItems.length; i++) {
            wishList.push(data[wishListItems[i]]);
        }
        setwishListProducts(wishList);
        console.log(wishListProducts);
    }



    return (
        <>
        <Banner name="Wishlist Products"/>
        <div className='container mt-5 pt-5'>
            <div className="col col-md-12">
                <div className="row mx-2">
                    
                    {
                        wishListProducts.length == 0 ?
                            <h2 className='p-4 text-muted'>WishList is empty !</h2>
                            : wishListProducts.map((obj, index) => {
                                return (
                                    <div className="container mt-4 col-6 col-md-3" key={index}>
                                        <div className="card shadow-sm border border-0">
                                            <div className="main-shoe container card-body">
                                                <div className="card-bg text-center wishlist-card">
                                                    <AiFillCloseCircle className='circle' onClick={() => deleteFromWishList(obj.id)} />
                                                    <img src={obj.img} className="shoe-all-imag img-fluid" />
                                                    <button className='bg-dark text-light p-2'>Move To Bag</button>
                                                </div>
                                                <div className=' text p-2 text-center'>
                                                    <p className="text-danger mb-0">In Stock</p>
                                                    <h5 className="card-title mb-2">{obj.name}</h5>
                                                    {
                                                        obj.onSale
                                                            ? <p className="card-text fw-medium mt-2">MRP : <span className="text-muted text-decoration-line-through">${obj.price}</span>$
                                                            \ {obj.salePrice}</p>
                                                            : <p className="card-text fw-medium mt-2">MRP : ${obj.price}</p>
                                                    }
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default Wishlist
