import React from 'react'
import './Testimonial.css'
import girl1 from './images/girl1.jpg'
import girl2 from './images/girl2.jpg'
import man2 from './images/man2.jpg'

const Testimonial = () => {
  return (
    <div className='testimonial' id='Testimonial'>
     <div className="container">
      
         <h2>Testimonials</h2>
         <span className='line'></span>

      <div className="content">

       
         <div className="card">
          <img src={man2} alt="man2" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam tempore ipsa placeat esse dolorum quas, nemo, nam provident aliquam, amet nulla ipsum voluptate.</p>
         <p>  <span>Johnson M.J </span></p>
          <p>Director of "Financial Times" </p>
         </div>

          <div className="card">
          <img src={girl1} alt="girl1" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam tempore ipsa placeat esse dolorum quas, nemo, nam provident aliquam, amet nulla ipsum voluptate.</p>
         <p><span> Johnson M.J</span></p>
          <p>Director of "Financial Times" </p>
         </div>


          <div className="card">
          <img src={girl2} alt="girl2" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam tempore ipsa placeat esse dolorum quas, nemo, nam provident aliquam, amet nulla ipsum voluptate.</p>
          <p> <span> Johnson M.J</span></p>
          <p>Director of "Financial Times" </p>
         </div>
      </div>
      
     </div>


    </div>
  )
}

export default Testimonial