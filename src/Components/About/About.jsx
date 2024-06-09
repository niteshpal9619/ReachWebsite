import React from 'react'
import './About.css'
import about_img from '../../Asset/about.png';
import play_icon from '../../Asset/play-icon.png';


function About() {
  return (
    <div className='about'>
         <div className="about-left">
            <img src={about_img} alt='' className='about-img'/>
            <img src={play_icon} alt='' className='play-icon'/>
         </div>
         <div className="about-right">
            <h3>
                ABOUT UNIVERSITY
            </h3>
            <h2>Naturing Tomorrow's Leaders Today</h2>
         </div>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, non aspernatur. Cumque tempore pariatur atque laborum veniam repellat
            necessitatibus doloribus impedit reprehenderit! Harum consectetur aperiam nisi commodi.</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, explicabo. Ab eligendi veritatis eos, 
            eaque accusantium sed officiis quia velit mollitia? Corrupti itaque nesciunt sunt voluptas facere necessitatibus quod ut!</p>         
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, non aspernatur. Cumque tempore pariatur atque laborum veniam repellat
            necessitatibus doloribus impedit.</p>            
    </div>
  )
}

export default About
