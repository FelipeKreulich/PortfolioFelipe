import React from 'react';
import './Testimonials.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';

const Testimonials = () => {

  const clients = [
    {
      title: "Aplicação Web",
      review:
        "Desde uma simples landpage, sites pessoais ou comercial, até lojas virtuais e sistemas complexos para Internet.",
    },
    {
      title: "Aplicação Mobile",
      review:
        "Aplicações híbridas ou nativas em multiplataformas para dispositivos móveis com Android ou IOS, disponibilizando em suas respectivas lojas e extraindo o seu instalador.",
    },
    {
      title: "Aplicação Desktop",
      review:
        "Aplicaçõies multiplataformas exclusivas, para sistemas operacionais Windows, Linux, Mac OS, onde o usuário necessita instalar o software em sua máquina.",
    },
    {
      title: "Design Gráfico",
      review:
        "Essencial para o Marketing Digital, uma arte gráfica pode fazer toda a diferença para o seu negócio. Panfletos, Flyers, Banners, Avatars, entre Outras.",
    },
  ]

  return (
    <div className="t-wrapper" id='Testimonials'>
      <div className="t-heading">
        <span>Posso te </span>
        <span>Ajudar?</span>
        <div className="blur t-blur1" style={{ background: 'var(--purple)' }}></div>
        <div className="blur t-blur2" style={{ background: 'skyblue' }}></div>
      </div>
      {/* Slider */}
      <Swiper
      modules={[Pagination]}
      slidesPerView={1}
      pagination={{clickable: true}}
      >
        {clients.map((client, index)=>{
          return (
            <SwiperSlide key={index}>
              <div className="testimonials">
                <span>{client.title}</span>
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  )
}

export default Testimonials