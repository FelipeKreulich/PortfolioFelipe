import React from 'react';
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';

const Services = () => {
  return (
    <div className="services">
      {/* Left Side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <span>
          Lorem Ipsum Dolor Sit Amet Text Of Printing is Simpley
          <br />
          Lorem Ipsum Dolor Sit Amet Text Of Printing
        </span>
        <button className='button s-button'>Download CV</button>
        <div className='blur s-blur1' style={{background: "#ABF1FF94"}}></div>
      </div>
      {/* Right Side */}
      <div className="cards">
        <div>
          <Card 
            emoji = {HeartEmoji}
            heading = {'Design'}
            detail = {"Figma, Sketch, Photoshop, Adobe, Canva"}
          />
        </div>
      </div>
    </div>
  )
}

export default Services