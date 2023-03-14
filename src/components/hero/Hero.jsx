import React from 'react'
import './hero.css'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import img1 from '../../assets/hero/img1.png'
import img2 from '../../assets/hero/img2.png'
import img3 from '../../assets/hero/img3.png'
import img4 from '../../assets/hero/img4.png'
import img5 from '../../assets/hero/img5.png'


const Hero = () => {
    return (
        <section className='hero__area'>
            <div className="container">
                <div className="hero__heading__wrapper">
                    <h1>Africa to the World</h1>
                    <p>The best seats in the most iconic music venues across the globe, join uduX as we livestream Africa's brightest in music as they continue to conquer the world.</p>
                    <div>
                        <button className='site_button'>Buy Stream Pass</button>
                    </div>
                </div>
            </div>
            <div className="container">
                <Swiper
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'5'}
                    spaceBetween={30}
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation={{
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev',
                      clickable: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="swiper_container"
                >
                    <SwiperSlide>
                        <img src={img1} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img2} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img4} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img5} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img4} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img5} alt="slide_image" />
                    </SwiperSlide>


                    <div className="slider-controler">
                        <div className="swiper-button-prev slider-arrow">
                            <ion-icon name="arrow-back-outline"></ion-icon>
                        </div>
                        <div className="swiper-button-next slider-arrow">
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </Swiper>
            </div>
        </section>
    )
}

export default Hero