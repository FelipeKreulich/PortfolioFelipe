import React from 'react';
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import CV from './felipekreulich.pdf';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';

const Services = () => {

  const transition = {type: 'spring', duration: 1}

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services" id='Services'>
      {/* Left Side */}
      <div className="awesome">
        <span style={{color: darkMode? 'white' : ''}}>Minhas Incríveis</span>
        <span>Qualificações</span>
        <spane>
          Aqui está um pouco da minha trajetória nesse mundo da programação
          <br />
          e também está disponível para download o meu curriculum, fique à vontade!
        </spane>
        <a href={CV} download>
          <button className='button s-button'>Download CV</button>
        </a>
        <div className='blur s-blur1' style={{background: "#ABF1FF94"}}></div>
      </div>
      {/* Right Side */}
      <div className="cards">
        {/* First Card */}
        <motion.div 
        whileInView={{left: '14rem'}}
        initial={{left: '25rem'}}
        transition={transition}
        style={{left: '14rem'}}>
          <Card 
          emoji={HeartEmoji} 
          heading={'Designer'} 
          detail={"Figma, Sketch, Photoshop, Adobe, Canva"} 
          />
        </motion.div>
        {/* Second Card */}
        <motion.div 
        initial={{left: '-11rem', top: '12rem'}}
        whileInView={{left: '-4rem'}}
        transition={transition}
        style={{top: '12rem', left: '-4rem'}}>
          <Card 
          emoji={Glasses}
          heading={"Developer"}
          detail={"HTML, CSS, Javascript, React, Python, NodeJS, Typescript, and Others"}
          />
        </motion.div>
        {/* Three Card */}
        <motion.div 
        initial={{top: '19rem', left: '25rem'}}
        whileInView={{left: '12rem'}}
        transition={transition}
        style={{top: '19rem', left: '12rem'}}>
          <Card 
          emoji={Humble}
          heading={"UI/UX"}
          detail={"A experiência do usuário é um diferencial para aplicações modernas que focam soluções."}
          />
        </motion.div>
        <div className='blur s-blur2' style={{background: 'var(--purple)'}}></div>
      </div>
    </div>
  )
}

export default Services