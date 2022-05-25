import React from 'react'
import './Demo.css'

const Demo = () => {
  return (
    <div className='Demo' id='Demo'>
       <div className="content">
           <div className="col-1">
            <p>Lorem ipsum dolor 100 sit amet </p>
            <p>One Philosophy</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate exercitationem expedita voluptas. Quod ab nam corrupti, exercitationem consequatur necessitatibus quos, dolore quae voluptatibus odio commodi repudiandae aut distinctio illum ipsa.</p>
            <button className='button'>Get your free financial Analysis</button>
           </div>
           <div className="col-2">

           <iframe src="https://www.youtube.com/watch?v=WGExNsYTd04" width="570" height="320"  frameborder="1px" title='YouTube Video Player' allow='accelerometer; autoplay; clipboard-write: encrypted-media; gyroscope; picture-in-picture'  allowFullScreen  />
           </div>

       </div>

    </div>
  )
}

export default Demo