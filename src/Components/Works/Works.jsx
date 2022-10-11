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
        <span style={{color: darkMode? 'white' : ''}}>Curiosidades</span>
        <span>Sobre minha pessoa!</span>
        <spane>
        Hello 🙋‍♂️, my name is Felipe, I'm 20 years old,
        <br />
        passionate about programming and all IT-related culture 🖤,
        <br />
        I'm currently studying Systems Analysis and Development 📚,
        <br />
        I hope you like my projects and profile. ✅
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