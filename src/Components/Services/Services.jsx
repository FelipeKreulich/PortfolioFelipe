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
        <span>Meus Incríveis</span>
        <span>Serviços</span>
        <spane>
          Aqui está alguns serviços que ofereço, com ótima qualidade
          <br />
          e logo abaixo, você pode fazer o download do meu curriculum.
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
          detail={"Criandos Ótimos Designs para sua Empresa."}
          />
        </div>
        <div className='blur s-blur2' style={{background: 'var(--purple)'}}></div>
      </div>
    </div>
  )
}

export default Services