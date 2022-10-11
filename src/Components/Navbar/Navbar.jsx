import React from 'react'
import Toggle from '../Toggle/Toggle';
import './Navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* Left Side */}
      <div className="n-left">
        <div className="n-name">Kreulich</div>
        <Toggle />
      </div>
      {/* Right Side */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{listStyleType: 'none'}}>
            <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
              <li>Início</li>
            </Link>
            <Link spy={true} to='Services' smooth={true}>
              <li>Serviços</li>
            </Link>
            <Link spy={true} to='Experience' smooth={true}>
              <li>Experiência</li>
            </Link>
            <Link spy={true} to='Portfolio' smooth={true}>
              <li>Portfolio</li>
            </Link>
            <Link spy={true} to='Testimonials' smooth={true}>
              <li>Comentários</li>
            </Link>
          </ul>
        </div>
        <Link spy={true} to='Contact' smooth={true}>
          <button className="button  n-button">
            Contato
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar