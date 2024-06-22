import React from 'react'
import {AiFillCloseCircle} from 'react-icons/ai'


const WishlistCard = (props) => {
    
    return (
        <div className="card shadow-sm border border-0">
            <div className="main-shoe container card-body">
                <div className="card-bg text-center wishlist-card">
                    <AiFillCloseCircle className='circle' onClick={props.deleteFromWishList(props.id)}/>
                    <img src={props.img} className="shoe-all-imag img-fluid" alt='img' />
                    <button className='bg-dark text-light p-2'>Déplacer vers le panier</button>
                </div>
                <div className=' text p-2 text-center'>
                    <p className="text-success mb-0">En Stock</p>
                    <h5 className="card-title mb-2">{props.name}</h5>
                    {
                        props.onSale
                            ? <p className="card-text fw-medium mt-2">MRP : <span className="text-muted text-decoration-line-through">${props.price}</span> ${props.salePrice}</p>
                            : <p className="card-text fw-medium mt-2">MRP : ${props.price}</p>
                    }
                </div>

                
            </div>
        </div>
    )
}

export default WishlistCard
