import React, { useState } from 'react'
import products from '../../data/products.json'
import { AiOutlineStar } from 'react-icons/ai'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ProductCard from './ProductCard';

const NewArrival = () => {
	//owl carousel options 
	const options = {
		margin: 30,
		loop: true,
		autoplay: true,
		nav: true,
		navText: ["<div className='nav-button owl-prev'>‹</div>", "<div className='nav-button owl-next'>›</div>"],
		dots: false,
		responsive: {
			0: {
				items: 2,
			},
			400: {
				items: 2,
			},
			600: {
				items: 2,
			},
			700: {
				items: 3,
			},
			1000: {
				items: 4,
			}
		},
	};
	return (
		<>
			<section className='section bg-light'>
				<div className="container">
					<div className="row justify-content-center mb-3 pb-3">
						<div className="col-md-12 heading-section text-center ftco-animate" data-aos="fade-up">
							<h2 className="mb-4 fw-bold">Nouveaux Arrivés</h2>
							<p>Jetez un coup d'œil à la vaste gamme de chaussures !</p>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						{/* rendering owl carousel */}
						<OwlCarousel className="owl-carousel owl-theme" {...options}>
							{products.map(obj => {
								return (
									<ProductCard key={obj.id} product={obj} />
								)
							})}
						</OwlCarousel>

					</div>
				</div>
			</section>


		</>
	)
}

export default NewArrival
