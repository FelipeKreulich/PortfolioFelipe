import React from 'react';
import './Works.css';
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';
import { themeContext } from '../../Context';
import { motion } from "framer-motion";
import { useContext } from 'react';
import { Link } from 'react-scroll';

const Works = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="works">
      {/* Left Side */}
      <div className='awesome'>
        <span style={{color: darkMode? 'white' : ''}}>Um Pouco</span>
        <span>Sobre minha pessoa!</span>
        <spane>
        Olá meu nome é Felipe Kreulich, sou nascido e criado
        <br />
        em Goiânia-GO. Com 14 anos tive meu primeiro Notebook
        <br />
        foi quando tive meu primeiro contato com a programação,
        <br />
        me apaixonei por todas as belezas que aquela tela cheia de
        <br />
        código tinha, foi quando então comecei os meu estudos em
        <br />
        programação, minha primeira linguagem foi Python. Desde então
        <br />
        fui conhecendo outras linguagens e me aprofundando, até que
        <br />
        conheci a área de Fullstack, a qual me dedico até hoje buscando
        <br />
        sempre mais conhecimento.
        </spane>
        <Link spy={true} to='Contact' smooth={true}>
          <button className='button s-button'>Contrate</button>
        </Link>
        <div className='blur s-blur1' style={{background: "#ABF1FF94"}}></div>
      </div>
      {/* Right Side */}
      <div className='w-right'>
        <motion.div 
          initial={{rotate: 45}}
          whileInView={{rotate: 0}}
          viewport={{margin:"-40px"}}
          transition={{duration: 3.5, type: "spring"}}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="Upwork" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="Fiverr" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="Amazon" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Shopify} alt="Shopify" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="Facebook" />
          </div>
        </motion.div>
        {/* Background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>

      </div>
    </div>
  )
}

export default Works