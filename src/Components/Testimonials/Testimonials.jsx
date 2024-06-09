import React, { useRef } from 'react'
import './Testimonials.css'
import next_btn from '../../Asset/next-icon.png'
import back_icon from '../../Asset/back-icon.png'
import user_1 from '../../Asset/user-1.png'
import user_2 from '../../Asset/user-2.png'
import user_3 from '../../Asset/user-3.png'
import user_4 from '../../Asset/user-4.png'


function Testimonials() {

  const slider=useRef();
  let tx=0;
  
  const slideForword=()=>{
    if(tx>-50){
        tx-=25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  const slideBackword=()=>{
    if(tx<0){
        tx+=25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }  

  
  return (
    <div className='testimonials'>
        <img src={next_btn} alt='' className='next-btn' onClick={slideForword}/>
        <img src={back_icon} alt='' className='back-btn' onClick={slideBackword}/>
        <div className='slider'>
            <ul ref={slider}>
                <li>
                    <div className='slide'>
                        <div className="user_info">
                            <img src={user_1} alt=''/>
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity,USA</span>
                            </div>                            
                        </div>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem odio, laborum rem suscipit incidunt dolore quibusdam impedit molestiae quod quos officia perferendis alias voluptas consequatur corrupti nihil rerum. Possimus, sed?
                        </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className="user_info">
                            <img src={user_2} alt=''/>
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity,USA</span>
                            </div>                            
                        </div>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem odio, laborum rem suscipit incidunt dolore quibusdam impedit molestiae quod quos officia perferendis alias voluptas consequatur corrupti nihil rerum. Possimus, sed?
                        </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className="user_info">
                            <img src={user_3} alt=''/>
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity,USA</span>
                            </div>                            
                        </div>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem odio, laborum rem suscipit incidunt dolore quibusdam impedit molestiae quod quos officia perferendis alias voluptas consequatur corrupti nihil rerum. Possimus, sed?
                        </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className="user_info">
                            <img src={user_4} alt=''/>
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity,USA</span>
                            </div>                            
                        </div>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem odio, laborum rem suscipit incidunt dolore quibusdam impedit molestiae quod quos officia perferendis alias voluptas consequatur corrupti nihil rerum. Possimus, sed?
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials
