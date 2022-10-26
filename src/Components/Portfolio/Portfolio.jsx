import React from 'react';
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Sidebar from '../../img/sidebar.png';
import Ecommerce from '../../img/ecommerce.png';
import HOC from '../../img/hoc.png';
import MusicApp from '../../img/musicapp.png';
import 'swiper/css';
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Portfolio = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id='Portfolio'>
      {/* Heading */}
      <span style={{color: darkMode? 'white' : ''}}>Projetos Recentes</span>
      <span>Portfolio</span>
      {/* Slider */}
      <Swiper
      spaceBetween={30}
      slidesPerView={3}
      grabCursor={true}
      className='portfolio-slider'
      >
        <SwiperSlide>
          <a href="https://moveit-project-three.vercel.app">
            <img src={Sidebar} alt="SideBar" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://devflixproject.vercel.app">
            <img src={Ecommerce} alt="Ecommerce" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://devfinanceproject.vercel.app">
            <img src={HOC} alt="HOC" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://sharpness-audiovisual.vercel.app">
            <img src={MusicApp} alt="MusicApp" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Portfolio