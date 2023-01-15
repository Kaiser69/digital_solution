import React from 'react'

import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';

const Header = () => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
     setIsHover(true);
  };
  const handleMouseLeave = () => {
     setIsHover(false);
  };

  const textStyle = {
   color: isHover ? '#e52d27' : 'white',
 };
 
  return (
    <section id='header' className="kaiser-section kaiser-section-l4mkm06p my-5 ">
    
    <div className="container">
      <div className="kaiser-row-hbludyic  flex">
        <div className="col-lg-1/1 ">
          <div className="column-inner kaiser-column-7sc812n1  1/1">
            <div className="kaiser-wrapper kaiser-heading-wahmdk55-wrapper ">
              <h2 className="kaiser-heading kaiser-heading-wahmdk55 mt-5">
                <span>Drive change and prosper in a digital world</span>
              </h2>
            </div>
            <div className="kaiser-text kaiser-text-s2wjxpc0 ">
            Speed up your digitalization and enable growth whether 
            you're in a product company, a small team, or an 
            enterprise ecosystem.
            </div>
            <div className="kaiser-button-ra0ilohg-wrapper ">
              <button className="kaiser-btn kaiser-button-ra0ilohg "
               style={{
                boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
           
              }}
              >
       
                <Nav.Link href="#service"
                 style={textStyle}
                 onMouseEnter={handleMouseEnter}
                 onMouseLeave={handleMouseLeave}
                >Here we are</Nav.Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Header