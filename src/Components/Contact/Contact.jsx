import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { useState } from 'react';
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Contact = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const form = useRef();

  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q62i0xy', 'template_kwag9h6', form.current, 'd7ngVld5paCGkVcG4')
      .then((result) => {
        console.log(result.text);
        setDone(true);
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <div className="contact-form" id='Contact'>
      <div className="w-left">
        <div className="awesome">
          <span style={{color: darkMode? 'white' : ''}}>Entrar em Contato</span>
          <span>Fale Comigo</span>
          <div
            className='blur s-blur1'
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className='user' placeholder='Nome' />
          <input type="email" name='user_email' className='user' placeholder='Email' />
          <textarea name="message" className='user' placeholder='Mensagem' />
          <input type="submit" value="Send" className='button' />
          <span>{done && "Obrigado por me enviar uma mensagem!"}</span>
          <div
            className='blur c-blur1'
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  )
}

export default Contact