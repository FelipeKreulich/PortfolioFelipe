import React from 'react';
import './Works.css';
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';

const Works = () => {
  return (
    <div className="works">
      {/* Left Side */}
      <div className='awesome'>
        <span>Trabalho para estas</span>
        <span>Empresas e Clientes</span>
        <spane>
          Lorem iplum dolor sit amet dummy text of printing simpley
          <br />
          Lorem iplum dolor sit amet dummy text of printing simpley
          <br />
          Lorem iplum dolor sit amet dummy text of printing simpley
          <br />
          Lorem iplum dolor sit amet dummy text of printing simpley
        </spane>
        <button className='button s-button'>Contrate</button>
        <div className='blur s-blur1' style={{background: "#ABF1FF94"}}></div>
      </div>
      {/* Right Side */}
      <div className='w-right'>
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Upwork} alt="Upwork" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="Upwork" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="Upwork" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Shopify} alt="Upwork" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="Upwork" />
          </div>
        </div>
        {/* Background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>

      </div>
    </div>
  )
}

export default Works