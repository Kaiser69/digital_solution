import React from 'react'
import './home.css'
import { Button } from 'react-bootstrap'

export default function Home() {
  return (
    <div id='home'>

     <section className="bgPhoto mb-5">
	<div className="container">
		<div className="row">
			<div className="col-lg-5 col-md-10">
				<div className="block">
					<span className="d-block mb-3 text-white text-capitalize">
                        <h4 style={{ color: 'red' }}>
                        Your future start from here</h4>
                        </span>
					 <h2 style={{color:"white"}} className="animated fadeInUp mb-5">
                     Our work is Work smarter <br></br> with digital solutions.
                     </h2>

				<Button className='overImage' href="/" variant="danger"
         style={{
          boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
          
        }}
        >
                   To the Top
                        </Button>
				</div>
			</div>
		</div>
	</div>
</section>
  
    </div>
  )
}
