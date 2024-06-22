import React from 'react'


const Description = (props) => {
	const shoe = props.shoe;
	return (
		<>
			<div>
				<p>{shoe.description}</p>
				{/* -------------- Benefits ---------------- */}
				<h4>Benefits</h4>
				<ul list-style='circle'>
					{shoe.benefits.map((e,i) => {
						return (
							<li key={i}>{e}</li>
						)
					})}
				</ul>
					{/* -------------- Product Details ---------------- */}
				<h4>Product Details</h4>
				<ul list-style='circle'>
					{shoe.details.map((e,i) => {
						return (
							<li key={i}>{e}</li>
						)
					})}
				</ul>

			</div>
		</>
	)
}

export default Description
