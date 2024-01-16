import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import hero_image_back from '../../assets/hero_image_back.png'
import hero_image from '../../assets/hero_image.png';
const Hero = () => {
  return (
    <div className="hero" id="Home">
      <div className="left-h">
        <Header/>
        <div className="ad">
          <div></div>
          <span>the best fitness club in the town</span>
        </div>
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span><span>Your </span>
            </div>
            <div>
            <span>Ideal body </span>
            </div>
            <div>
              <span>In here we will help you to shape and build your ideal body</span>
            </div>
          </div>

             <div className="figures">
               <div><span>+140</span><span>Expert Coaches</span></div>
               <div><span>+500</span><span>Members Joines</span></div>
               <div><span>+50</span><span>Fitness Program</span></div>
             </div>
          
          <div className="hero-btn">
            <button className="btn">Get Started</button>
            <button className="btn">Learn More</button>
          </div>
            
      </div>
      <div className="right-h">
       <a href="#join-us"><button className="btn">Join Now</button></a> 

      <div className="heart-rate">
        <img src={Heart} alt="heart" />
        <span>Heart Rate</span><span>116 bpm</span>
        </div>
        <img src={hero_image} alt="hero_image" className="hero-image" />
        <img src={hero_image_back} alt="hero_image_back" className="hero-image-back" />

        <div className="calories">
          <img src={Calories} alt="Calories" />
          <div>
          <span>Calories Burned</span>
          <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
