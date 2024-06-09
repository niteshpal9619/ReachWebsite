import React from 'react'
import './Hero.css'
import dark_arrow from '../../Asset/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>We Ensure batter education for a batter world</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat molestias repudiandae atque illo, velit doloribus ratione, vel ducimus tenetur quas nobis. Inventore debitis sed accusamus ex natus cumque voluptatum neque.
            Autem eum iure numquam aliquid blanditiis aut quas repellat est, unde in rem minus ratione. Facere aut nisi omnis reiciendis commodi! Corrupti non corporis itaque perspiciatis similique eos labore eveniet.
            </p>
            <button className='btn'>Explore more <img src={dark_arrow} alt=''></img></button>
        </div>
    </div>
  )
}

export default Hero
