import React from 'react'
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import {motion} from 'framer-motion';
import { Link } from 'react-scroll';

const Intro = () => {

  const transition = {type: 'spring', duration: 2}

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
      {/* Left Side */}
      <div className="i-left">
        <div className="i-name">
          <span style={{color: darkMode? 'white' : ''}}>Olá! Eu sou</span>
          <span>Felipe Kreulich</span>
          <span>Me chamo Felipe, tenho 20 anos, sou programador Fullstack, 
          atualmente cursando Análise e Desenvolvimento de Sistemas pela INSTED, 
          sou atencioso, criativo e prestativo, espero por aqui, conseguir boas oportunidades.
          </span>
        </div>
        <Link spy={true} to='Contact' smooth={true}>
          <button className="button i-button">Contrate</button>
        </Link>
        <div className="i-icons">
          <a href="https://www.github.com/FelipeKreulich">
            <img src={Github} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/felipe-kreulich">
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
          <a href="https://instagram.com/_Kreulich">
            <img src={Instagram} alt="Instagram" />
          </a>
        </div>
      </div>
      {/* Right Side */}
      <div className="i-right">
        <img src={Vector1} alt="Vector" />
        <img src={Vector2} alt="Vector" />
        <img src={boy} alt="Boy" />
        <motion.img 
        initial={{left: '-36%'}}
        whileInView={{left: '-24%'}}
        transition={transition}
        src={glassesimoji} alt="Emoji Glasses" />
        <motion.div 
        initial={{top: '-4%', left: '74%'}}
        whileInView={{left: '68%'}}
        transition={transition}
        style={{top: '-4%', left: '68%'}}
        className='floating-div'>
          <FloatingDiv image={Crown} text1='Web' text2='Developer' />
        </motion.div>
        <motion.div 
        initial={{left: '9rem', top: '18rem'}}
        whileInView={{left: '0rem'}}
        transition={transition}
        style={{top: '18rem', left: '0rem'}}
        className='floating-div'>
          <FloatingDiv image={thumbup} text1='Prêmio Melhor' text2='Design' />
        </motion.div>
        {/* Blur Divs */}
        <div className='blur' style={{background: "rgb(238 210 255)"}}></div>
        <div className='blur' style={{
          background: "#C1F5FF",
          top: '17rem',
          width: '21rem',
          height: '11rem',
          left: '-9rem'}}></div>
      </div>
    </div>
  )
}

export default Intro