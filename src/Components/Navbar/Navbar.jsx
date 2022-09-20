import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="n-wrapper">
      {/* Left Side */}
      <div className="n-left">
        <div className="n-name">Kreulich</div>
        <span>Toggle</span>
      </div>
      {/* Right Side */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{listStyleType: 'none'}}>
            <li>Início</li>
            <li>Serviços</li>
            <li>Experiência</li>
            <li>Portfolio</li>
            <li>Comentários</li>
          </ul>
        </div>
        <button className="button  n-button">
          Contact
        </button>
      </div>
    </div>
  )
}

export default Navbar