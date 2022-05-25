import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='Footer'>

         <div className="content">
             <ul>
           <li className='nav-item'>
              <a href="/">Home</a>
           </li>
            <li className='nav-item'>
              <a href="/">About</a>
           </li>
            <li className='nav-item'>
              <a href="/">Testimonial</a>
           </li>
            <li className='nav-item'>
              <a href="/">Demo</a>
           </li>

       </ul>
       <div className="bottom">
        <span className='line'></span>
        <p>2022 Execute, Inc. All rights reserved</p>
       </div>
         </div>

    </div>
  )
}

export default Footer