import React from 'react'
import './Card.css';
import { Link } from 'react-scroll'


const Card = ({emoji, heading, detail}) => {
  return (
    <div className="card">
      <img src={emoji} alt="Emoji" />
      <span>{heading}</span>
      <span>{detail}</span>
      <Link spy={true} to='Contact' smooth={true}>
          <button className="c-button">Saiba Mais</button>
      </Link>
    </div>
  )
}

export default Card