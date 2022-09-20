import React from 'react';
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import CV from './felipekreulich.pdf';

const Services = () => {
  return (
    <div className="services">
      {/* Left Side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <spane>
        Here are some services I can offer you, just see the options I have available
          <br />
          and choose, you can also download my curriculum if you want.
        </spane>
        <a href={CV} download>
          <button className='button s-button'>Download CV</button>
        </a>
        <div className='blur s-blur1' style={{background: "#ABF1FF94"}}></div>
      </div>
      {/* Right Side */}
      <div className="cards">
        {/* First Card */}
        <div style={{left: '14rem'}}>
          <Card 
          emoji={HeartEmoji} 
          heading={'Design'} 
          detail={"Figma, Sketch, Photoshop, Adobe, Canva"} 
          />
        </div>
        {/* Second Card */}
        <div style={{top: '12rem', left: '-4rem'}}>
          <Card 
          emoji={Glasses}
          heading={"Developer"}
          detail={"HTML, CSS, Javascript, React, Python, NodeJS, Typescript, and Others"}
          />
        </div>
        {/* Three Card */}
        <div style={{top: '19rem', left: '12rem'}}>
          <Card 
          emoji={Humble}
          heading={"UI/UX"}
          detail={"Creating a Beautiful Designs for your Enterprise"}
          />
        </div>
        <div className='blur s-blur2' style={{background: 'var(--purple)'}}></div>
      </div>
    </div>
  )
}

export default Services