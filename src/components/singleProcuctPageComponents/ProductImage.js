import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { BiRupee } from 'react-icons/bi'


const ProductImage = (props) => {
	const shoe = props.shoe;
	//console.log(shoe);

	return (
		<>

			<div className="product_image_area">
				<div className="container">
					<div className="row s_product_inner">

						{/* -------------- Image ---------------- */}

						<div className="col-lg-4">
							<div className="single-prd-item">
								<img className="img-fluid" src={`../../${shoe.img}`} alt="" style={{ height: "600px", width: "500px" }} />
							</div>

						</div>


						{/* -------------- Description ---------------- */}
						<div className="col-lg-7 offset-lg-1">
							<div className="s_product_text">
								<h3>{shoe.name}</h3>
								<h2><BiRupee />{shoe.price}</h2>
								<ul className="list">
									<li><span className='fw-bold'>Category</span> : {shoe.category}</li>
									<li><span className='fw-bold'>Availibility</span> : In Stock</li>
								</ul>
								<p>{shoe.description}</p>
								<div className="product_count">
									<label htmlFor="qty">Quantity:</label>
									<input type="number" name="qty" value="1" title="Quantity:" className="input-text qty" readOnly/>

								</div>
								<div className="card_area d-flex align-items-center">
									<a className="primary-btn" href="#">Add to Cart</a>
									<a className="icon_btn text-white" href="#"><i className="lnr lnr lnr-heart"><AiOutlineHeart /></i></a>
								</div>
							</div>
						</div>
						
					</div>
				</div>
			</div>
		</>
	)
}

export default ProductImage
