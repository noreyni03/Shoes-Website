import React from 'react'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'

const Reviews = (props) => {
	const shoe = props.shoe;
	return (
		<>

			<div>
				<div className="row">
					<div className="col-lg-6">
						{/* -------------- Total Reviews ---------------- */}
						<div className="row total_rate">
							<div className="col-6">
								<div className="box_total">
									<h5>Overall</h5>
									<h4>4.0</h4>
									<h6>(03 Reviews)</h6>
								</div>
							</div>
							<div className="col-6">
								<div className="rating_list">
									<h3>Based on 3 Reviews</h3>
									<ul className="list">
										<li>5 star <BsStarFill /><BsStarFill /><BsStarHalf /></li>
										<li>4 star <BsStarFill /><BsStarFill /><BsStarFill /></li>
										<li>3 star <BsStarFill /><BsStarFill /><BsStarHalf /></li>
										<li>2 star <BsStarFill /><BsStarFill /><BsStarFill /></li>
										<li>1 star <BsStarFill /><BsStarHalf /><BsStarHalf /></li>
									</ul>
								</div>
							</div>
						</div>

						{/* -------------- List of reviews ---------------- */}
						<div className="review_list">

							{shoe.reviews.map((e,i) => {
								return (
									<div className="review_item" key={i}>
										<div className="media">
											<div className="d-flex">
												<img src={`../../${e.img}`} alt="" />
											</div>
											<div className="media-body">
												<h4>{e.name}</h4>
												<BsStarFill />
												<BsStarFill />
												<BsStarFill />
												<BsStarFill />
												<BsStarHalf />
											</div>
										</div>
										<p>{e.review}</p>
									</div>
								)
							})}

						</div>
					</div>

					{/* -------------- Form to add a review ---------------- */}
					<div className="col-lg-6">
						<div className="review_box">
							<h4 className='text-red'>Add a Review</h4>
							<form className="row contact_form" action="" method="post" id="contactForm">
								<div className="col-md-12">
									<div className="form-group">
										<input type="text" className="form-control" id="name" name="name" placeholder="Your Full name" />
									</div>
								</div>
								<div className="col-md-12">
									<div className="form-group">
										<input type="email" className="form-control" id="email" name="email" placeholder="Email Address" />
									</div>
								</div>
								<div className="col-md-12">
									<div className="form-group">
										<input type="text" className="form-control" id="number" name="number" placeholder="Phone Number" />
									</div>
								</div>
								<div className="col-md-12">
									<div className="form-group">
										<textarea className="form-control" name="message" id="message" rows="1" placeholder="Review" ></textarea>
									</div>
								</div>
								<div className="col-md-12 text-end">
									<button type="submit" value="submit" className="primary-btn">Submit Now</button>
								</div>
							</form>
						</div>
					</div>

					
				</div>
			</div>

		</>
	)
}

export default Reviews
