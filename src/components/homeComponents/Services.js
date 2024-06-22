import React from 'react'
import {BsFillBagCheckFill} from 'react-icons/bs'
import {MdSupportAgent} from 'react-icons/md'
import {RiSecurePaymentLine} from 'react-icons/ri'


const Services = () => {
  return (
    <>
    <section className=''>
    <div className="container">
				<div className="row no-gutters ftco-services" data-aos="fade-up" data-aos-duration="400">
          <div className="col-lg-4 text-center d-flex align-self-stretch" >
            <div className="media block-6 services p-4 py-md-5">
              <div className="icon d-flex justify-content-center align-items-center mb-4">
            		<span className="flaticon-bag"><BsFillBagCheckFill/></span>
              </div>
              <div className="media-body">
                <h3 className="heading">Livraison gratuite</h3>
                <p>Très loin, derrière les montagnes de mots, loin des pays Vokalia et Consonantia, vivent les textes aveugles.</p>
              </div>
            </div>      
          </div>
          <div className="col-lg-4 text-center d-flex align-self-stretch" >
            <div className="media block-6 services p-4 py-md-5">
              <div className="icon d-flex justify-content-center align-items-center mb-4">
            		<span className="flaticon-customer-service"><MdSupportAgent /></span>
              </div>
              <div className="media-body">
                <h3 className="heading">Service Client</h3>
                <p>Loin, derrière les montagnes de mots, loin des pays Vokalia et Consonantia, vivent les textes aveugles.</p>
              </div>
            </div>    
          </div>
          <div className="col-lg-4 text-center d-flex align-self-stretch">
            <div className="media block-6 services p-4 py-md-5">
              <div className="icon d-flex justify-content-center align-items-center mb-4">
            		<span className="flaticon-payment-security"><RiSecurePaymentLine /></span>
              </div>
              <div className="media-body">
                <h3 className="heading">Payment Sécurisée</h3>
                <p>Loin, derrière les montagnes de mots, loin des pays Vokalia et Consonantia, vivent les textes aveugles.</p>
              </div>
            </div>      
          </div>
        </div>
			</div>
    </section>
    </>
  )
}

export default Services
