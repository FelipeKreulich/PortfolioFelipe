import React from 'react';
import './Testimonials.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonials = () => {

  const clients = [
    {
      img: profilePic1,
      review:
        "Lorem impsum dolor, sit amet consectetur adipiscing elit. Ex officiis molestiae quod tempora laudantium error.",
    },
    {
      img: profilePic2,
      review:
        "Lorem impsum dolor, sit amet consectetur adipiscing elit. Ex officiis molestiae quod tempora laudantium error.",
    },
    {
      img: profilePic3,
      review:
        "Lorem impsum dolor, sit amet consectetur adipiscing elit. Ex officiis molestiae quod tempora laudantium error.",
    },
    {
      img: profilePic4,
      review:
        "Lorem impsum dolor, sit amet consectetur adipiscing elit. Ex officiis molestiae quod tempora laudantium error.",
    },
  ]

  return (
    <div className="t-wrapper">
      <div className="t-heading">
        <span>Os Clientes recebem um </span>
        <span>Excepicional Trabalho </span>
        <span>de mim...</span>
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