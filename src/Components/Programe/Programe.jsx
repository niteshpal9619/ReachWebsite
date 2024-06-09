import React from 'react'
import './Programe.css'
import programe_1 from '../../Asset/program-1.png'
import programe_2 from '../../Asset/program-2.png'
import programe_3 from '../../Asset/program-3.png'
import programe_icon_1 from '../../Asset/program-icon-1.png'
import programe_icon_2 from '../../Asset/program-icon-2.png'
import programe_icon_3 from '../../Asset/program-icon-3.png'

function Programe() {
  return (
    <div className='programs' style={{display:'flex',padding:'10px'}}>
      <div className="program">
            <img src={programe_1} alt=""/>
            <div className='caption'>
              <img src={programe_icon_1} alt=""></img>
              <p>Graduation Degree</p>
            </div>
      </div>
      <div className="program">
            <img src={programe_2} alt=""/>
            <div className='caption'>
              <img src={programe_icon_2} alt=""></img>
              <p>Master Degree</p>
            </div>
      </div>
      <div className="program">
            <img src={programe_3} alt=""/>
            <div className='caption'>
              <img src={programe_icon_3} alt=""></img>
              <p>Post Graduation Degree</p>
            </div>
      </div>
    </div>
  )
}

export default Programe
