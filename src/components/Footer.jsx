import React from 'react'
import Logo from './images/logo.png'


const Footer = () => {
  return (
    <div>

<div style={{ borderTop: ".9px solid rgba(122, 57, 224, 0.3) ", marginLeft: 20, marginRight: 20 }}></div>

    <section className="kaiser-section kaiser-section-x40k6yqg ">
     
      <div className="container">
        <div className="kaiser-row-akxr36qv  flex">
          <div className="col-lg-1/3 col-md-1/3 ">
  
      
            <div className="column-inner kaiser-column-yk0goc70  1/3">
              <div className="kaiser-wrapper kaiser-image-1kgneh0a-wrapper ">
                <img
                  src={Logo}
                  className="kaiser-image-1kgneh0a " alt='img'
                />
              </div>
            </div>
          </div>
          <div className="col-lg-1/3 col-md-1/3 ">
            <div className="column-inner kaiser-column-b7upwuf2  1/3">
              <div className="kaiser-text kaiser-text-k2xzpsrw ">

                Copyright (c) 2020 Digital. Solutions.
              </div>
            </div>
          </div>
          <div className="col-lg-1/3 col-md-1/3 my-5 ">
            <div className="column-inner kaiser-column-shlawi44  1/3">
            <div className="template-demo">
                    <button type="button" className="btn btn-social-icon btn-outline-facebook"><i className="fa fa-facebook "></i></button>
                    <button type="button" className="btn btn-social-icon btn-outline-youtube"><i className="fa fa-youtube "></i>      
                    </button>                                        
                    <button type="button" className="btn btn-social-icon btn-outline-twitter"><i className="fa fa-twitter "></i></button>
                    <button type="button" className="btn btn-social-icon btn-outline-github"><i className="fa fa-github "></i></button>
                    <button type="button" className="btn btn-social-icon btn-outline-linkedin"><i className="fa fa-linkedin "></i></button>
                    <button type="button" className="btn btn-social-icon btn-outline-instagram"><i className="fa fa-instagram "></i></button>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    </div>
  )
}

export default Footer