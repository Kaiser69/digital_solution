import React, {useRef} from 'react'
import './contact.scss'

import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zp5kh6e', 'template_iD', form.current, 'user_OvwKLnQcfzlXeTfTEdggl')
    
    e.target.reset()
  };

  return (
    <section id='contact' className='contact container my-5'>
     
      <div className="row my-5">
          <h3 className="text-center">
            Contact with Us
              
            </h3>
      </div>

         <div className="contactContainer grid ">
              <div className="form grid">
                   <div className="cards grid">
                      <h3>Any thing to say </h3>    
                   </div>
                <p>
                Digital solution customer service delivered via digital channels such as email, chat,
                 mobile apps, social media, and more. 
                </p>
                  
                      <p> Address:  <a href="https://goo.gl/maps/pTo6xq2EbQocDeFx5" target="_blank" 
                      rel="noreferrer" >
                        Sandgatan 2, 223 50 Lund
                        </a> 
                        </p>
                
                 
                    <p>Email: 
                    <a href = "mailto:pen1921@gmail.com?subject = Feedback&body = Message"> 
                    pen1921@gmail.com 
                    </a></p>
                
                   <div className="cards grid">
                   
                      <p>Phone: <a href="tel:+46-70-363 755 4">+46-70-363 755 4</a></p>
                    
                   </div>

              </div>

                  <div className="form grid">

                       <form ref={form} onSubmit={sendEmail}>
                              <input type="text" placeholder='Enter your Name' name='name' required/>
                              <input type="email" placeholder='Enter your Email' name='email' required />
                              <textarea name="message" id="" placeholder='Enter your Message'></textarea>

                              <button  className="formBtn btn btn-outline-success" type='submit' name='submit'>
                                Send Email
                              </button>
                       </form>
                  </div>
         </div>
      </section>
  )
}

export default Contact