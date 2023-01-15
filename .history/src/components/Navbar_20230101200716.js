import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    <section>
        
    <div className='header-top'>
        <div className='container '>
             <div className='row justify-content-between align-items-center'>
                <div className='col-lg-2 col-md-4'>
                  <div className="header-top-socials text-center text-lg-left text-md-left">
						<a href="https://www.facebook.com/themefisher" target="_blank"><i className="ti-facebook"></i></a>
						<a href="https://twitter.com/themefisher" target="_blank"><i className="ti-twitter"></i></a>
						<a href="https://github.com/themefisher/" target="_blank"><i className="ti-github"></i></a>
					</div>
				</div>

                <div className="col-lg-10 col-md-8 text-center text-lg-right text-md-right">
					<div className="header-top-info">
						<a href="tel:+23-345-67890">Call Us : <span>+46703637554</span></a>
						<a href="mailto:pen1921@gmail.com" ><i className="fa fa-envelope mr-2"></i><span>write email</span></a>
					</div>
				</div>

            </div>


        </div>

    </div>
  )
}

export default Navbar