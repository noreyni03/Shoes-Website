import React from 'react'
import Description from './Description'
import Specification from './Specification'
import Reviews from './Reviews'
import Comments from './Comments'
import { Link } from 'react-router-dom'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const ProductDesc = (props) => {
	const shoe = props.shoe;
	return (
		<>
			<section className="product_description_area">
				<div className="container">
					{/* NAV TABS SECTION*/}
					<Tabs defaultActiveKey="first">
						<Tab eventKey="first" title="Description">
							<Description shoe={shoe} />
						</Tab>
						<Tab eventKey="second" title="Specification">
							<Specification shoe={shoe}/>
						</Tab>
						<Tab eventKey="third" title="Reviews">
							<Reviews shoe={shoe}/>
						</Tab>
					</Tabs>

				</div>
			</section>
		</>
	)
}

export default ProductDesc
