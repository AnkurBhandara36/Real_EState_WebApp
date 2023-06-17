import React from 'react'
import {Swiper,SwiperSlide,useSwiper} from 'swiper/react';
import '../Residencies/Res.css'
import 'swiper/css';
import data from "../../utlis/data.json";
import { sliderSetting } from '../../utlis/common.js';


function Res() {
  const swiper=useSwiper()
  return (
    <section>
      <div className='r-wrapper'>
        <div className='res_heading'>
          <span className='head1'>
            BestChoice
          </span>

          <span className='head2'>
            Popular Residencies
          </span>
        </div>
      
      
          <Swiper {...sliderSetting}>
            <SliderButton/>
          {
          
                data.map((card,i)=>{
                return(
                  <SwiperSlide key={i}>
                      <div className='r-card'>
                        <img src={card.image} alt="home" className='img' />

                        <span style={{margin:"10px 0"}}>
                          <span style={{color:"orange"}}>$</span>
                          <span>{card.price}</span>
                        </span>

                        <span>{card.name}</span>
                        <span>{card.detail}</span>
                      </div>
                    </SwiperSlide>
                )
                })
            }

          </Swiper>
      </div>
    </section>
  )
}

export default Res;

const SliderButton =()=>{
  const swiper=useSwiper();
  return(
    <div className='r-buttons'>
      <button onClick={()=>swiper.slidePrev()} className="left-btn btns">&lt;</button>
      <button onClick={()=>swiper.slideNext()} className="right-btn btns">&gt;</button>
    </div>
  )
}