import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    <div className='header-top'>
        <div className='container '>
             <div className='row justify-content-between align-items-center'>
                <div className='col-lg-2 col-md-4'>
                  <div className="header-top-socials text-center text-lg-left text-md-left">
						<a href="https://www.facebook.com/themefisher" target="_blank"><i classN="ti-facebook"></i></a>
						<a href="https://twitter.com/themefisher" target="_blank"><i class="ti-twitter"></i></a>
						<a href="https://github.com/themefisher/" target="_blank"><i class="ti-github"></i></a>
					</div>
				</div>
                </div>

        </div>

    </div>
  )
}

export default Navbar