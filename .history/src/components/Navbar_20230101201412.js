import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    <section className='navv'>
        
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


	<nav class="navbar navbar-expand-lg  py-4" id="navbar">
		<div class="container">
		  <a class="navbar-brand" href="index.html">
		  	Digital<span>support.</span>
		  </a>

		  <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
			<span class="fa fa-bars"></span>
		  </button>
	  
		  <div class="collapse navbar-collapse text-center" id="navbarsExample09">
			<ul class="navbar-nav ml-auto">
			  <li class="nav-item active">
				<a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
			  </li>
			  <li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About</a>
					<ul class="dropdown-menu" aria-labelledby="dropdown03">
						<li><a class="dropdown-item" href="about.html">Our company</a></li>
						<li><a class="dropdown-item" href="pricing.html">Pricing</a></li>
					</ul>
			  </li>
			   <li class="nav-item"><a class="nav-link" href="service.html">Services</a></li>
			   <li class="nav-item"><a class="nav-link" href="project.html">Portfolio</a></li>
			   <li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" id="dropdown05" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog</a>
					<ul class="dropdown-menu" aria-labelledby="dropdown05">
						<li><a class="dropdown-item" href="blog-grid.html">Blog Grid</a></li>
						<li><a class="dropdown-item" href="blog-sidebar.html">Blog with Sidebar</a></li>

						<li><a class="dropdown-item" href="blog-single.html">Blog Single</a></li>
					</ul>
			  </li>
			   <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
			</ul>

			<form class="form-lg-inline my-2 my-md-0 ml-lg-4 text-center">
			  <a href="contact.html" class="btn btn-solid-border btn-round-full">Get a Quote</a>
			</form>
		  </div>
		</div>
	</nav>

    </section>
  )
}

export default Navbar