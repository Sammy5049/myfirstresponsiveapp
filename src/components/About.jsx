import React from 'react'
import './About.css'
import foc from './images/foc.jpg'

const About = () => {
  return (
    <div className='about' id='About'>

        <div className="content">

           <img src={foc} alt="foc" />
           <div className="col-2">
            <h2>About</h2>
            <span className='line'></span>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat expedita veniam qui atque necessitatibus consectetur commodi eius, quia dolorum? Accusantium.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse reprehenderit, veniam dolor minima odio magni quae.</p>
            <button className='button'>Explore More</button>
           </div>

        </div>


    </div>
  )
}

export default About