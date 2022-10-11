import React from 'react';
import './Testimonials.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpeg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonials = () => {

  const clients = [
    {
      img: profilePic1,
      review:
        "Medir o progresso da programação por linhas de código é como medir o progresso da construção de aeronaves em termos de peso.",
    },
    {
      img: profilePic2,
      review:
        "Qualquer um pode escrever um código que o computador entenda. Bons programadores escrevem códigos que os humanos entendam.",
    },
    {
      img: profilePic3,
      review:
        "Só por que alguma coisa não faz o que você planejou que ela fizesse não quer dizer que ela seja inútil.",
    },
    {
      img: profilePic4,
      review:
        "Uma linguagem não faz seu código ser bom, programadores bons fazem seu código ser bom.",
    },
  ]

  return (
    <div className="t-wrapper" id='Testimonials'>
      <div className="t-heading">
        <span>O que te torna um bom </span>
        <span>Programador</span>
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
                <img src={client.img} alt="Cliente" />
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