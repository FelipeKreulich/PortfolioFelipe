import React from 'react'
import './Footer.css';
import Wave from '../../img/wave.png';
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Github from '@iconscout/react-unicons/icons/uil-github';


const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="Onda" style={{ width: '100%' }} />
      <div className="f-content">
        <span>felipek2002k@gmail.com</span>
        <div className="f-icons">
          <a href="https://instagram.com/_Kreulich">
            <Insta color='white' size='3rem' />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100051443169479">
            <Facebook color='white' size='3rem' />
          </a>
          <a href="https://github.com/FelipeKreulich">
            <Github color='white' size='3rem' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer