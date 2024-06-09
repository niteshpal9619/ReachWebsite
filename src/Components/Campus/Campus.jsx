import React from 'react'
import './Campus.css'
import gallery_1 from '../../Asset/gallery-1.png'
import gallery_2 from '../../Asset/gallery-2.png'
import gallery_3 from '../../Asset/gallery-3.png'
import gallery_4 from '../../Asset/gallery-4.png'
import white_arrow from '../../Asset/white-arrow.png'

function Campus() {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={gallery_1} alt=""/>
            <img src={gallery_2} alt=""/>
            <img src={gallery_3} alt=""/>
            <img src={gallery_4} alt=""/>
        </div>
        <button className='btn dark-btn'>See more here <img src={white_arrow}/></button>
    </div>
  )
}

export default Campus
