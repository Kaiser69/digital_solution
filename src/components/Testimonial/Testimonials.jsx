import React from "react";
import { Container, Row, Col } from "reactstrap";
import {Carousel } from 'react-bootstrap';  
import img1 from './testimonial01.png'

import "./testimonial.css"

const Testimonials = () => {

  return (
    <section id="pitching" className="my-5">
         <Container>  
  <Row>  

  <h2 className="text-center my-5" >What makes Digital solutions unique</h2>

    <Col>

    <Carousel>  

<div className="content-slider">
  <div className="slider">
    <div className="mask">
      <ul>
        <li className="anim1">
          <div className="quote">
            We design quality digital services that users appreciate. We identify technical
           requirements needed for delivering the service functionality. We develop digital 
           services that are accessible on every platform, such as web and native mobile apps. 
           We build role-based user interfaces for different jobs and business tasks. And last 
           but not least, we integrate the service with other systems such as third-party 
           services through API.
            </div>
          <div className="source">-  Digital solution</div>
        </li>
        <li className="anim2">
          <div className="quote">
          Digital solutions service designers and engineers have extensive experience in developing
           enterprise-level self-service environments, from industrial applications to complex 
           business operations. This has given our clients the benefit of streamlined sales operations,
            scaled B2B transactions, and more efficient customer service. Our digital service
             development solutions help you innovate with balanced product cost, scale your product 
             reach, and also reduce product maintenance costs.
            </div>
          <div className="source">-  Digital solution</div>
        </li>
        <li className="anim3">
          <div className="quote">
            Digital solutions software and service designers create user-centric interfaces and
             workflows that improve customer experience. For quick wins we revamp existing user
              interfaces – it’s a cost-effective method to increase the engagement of your customers.
              </div>
          <div className="source">-  Digital solution</div>
        </li>
        <li className="anim4">
          <div className="quote">
            Digital solutions  data scientists develop machine learning applications such as 
            next-best-action recommendations and predictive maintenance. This enables new services
             that streamline maintenance or user experience.
            </div>
          <div className="source">-  Digital solution</div>
        </li>
        <li className="anim5">
          <div className="quote">
          We help device and machine manufacturers develop intelligent products and focus on 
          customers through value-adding digital services. We do this by combining data science 
          and software development expertise with a design thinking approach
            </div>
          <div className="source">-  Digital solution</div>
        </li>
      </ul>
    </div>
  </div>
</div>
</Carousel>  


      </Col>  

    <Col>
    
    <img style={{maxHeight:"100%",
    alignItems:"center",
    float:"inline-end"
    }}  
      className="d-block w-100"  
      src={img1}  
      alt="slide"  
    />  
      </Col>  
  </Row>  
</Container>  
    </section>
  );
};

export default Testimonials;
