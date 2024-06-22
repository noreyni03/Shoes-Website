import React from 'react'

const Comments = (props) => {
	const shoe = props.shoe;
	return (
		<>
			<div id="comments">
				<div className="row">
					<div className="col-lg-6">
						<div className="comment_list">
							{/* mapping of comments */}
							{shoe.comments.map((e) => {
								return (
									<div className="review_item">
										<div className="media">
											<div className="d-flex">
												<img src={`../../${e.img}`} alt="" />
											</div>
											<div className="media-body">
												<h4>{e.name}</h4>
												<h5>{e.date}</h5>
												<a className="reply_btn" href="#">Reply</a>
											</div>
										</div>
										<p>{e.comment}</p>
									</div>
								)
							})}


						</div>
					</div>
					{/* Form to add new comments */}
					<div className="col-lg-6">
						<div className="review_box">
							<h4>Post a comment</h4>
							<form className="row contact_form" action="contact_process.php" method="post" id="contactForm">
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
										<textarea className="form-control" name="message" id="message" rows="1" placeholder="Message"></textarea>
									</div>
								</div>
								<div className="col-md-12 text-end">
									<button type="submit" value="submit" className="btn primary-btn">Submit Now</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Comments
