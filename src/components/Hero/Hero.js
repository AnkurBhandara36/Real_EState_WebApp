import React from 'react'
import '../Hero/Hero.css'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'
function Hero() {
  return (
    <div className='hero-wrapper'>
        <div className='hero-1'>

            <div className='orange_circle'></div>

                <div className='heading'>
                    <h1>Discover <br></br> Most Suitable <br></br>Property</h1>
                </div>

                <div className='para'>
                    <p>Lorem Ipsum is simply dummy text of the printing. <br></br>
                    Lorem Ipsum has been the industry's standard  text </p>
                </div>

                <div className='inputs'>
                    <HiLocationMarker color='blue' size={25} className='loc-icon'/>
                    <input type='text'/>
                    <button className='btn'>Search</button>
                </div>

               <div className='stat'>
                <div className='status count-1'>
                        <div className='space'>
                            <CountUp start={8200} end={9000} duration={4} className='count-num'/>
                            <span className='plus'>+</span>
                        </div>
                        <p className='count-text'> Premium  Product </p>
                    </div>

                    <div className='status count-2'>
                      <div className='space'>
                      <CountUp start={1200} end={2000} duration={4} className='count-num'/>
                        <span className='plus'>+</span>
                      </div>
                        <p className='count-text'> Happy  Customer </p>
                    </div>
                    
                    <div className='status count-3'>
                       <div className='space'>
                       <CountUp  end={28} duration={4} className='count-num'/>
                        <span className='plus'>+</span>
                       </div>
                        <p className='count-text'> Award  Winning </p>
                    </div>
                </div>
        </div>
        <div className='hero-2'>
            <img src='https://images.pexels.com/photos/2921077/pexels-photo-2921077.jpeg?auto=compress&cs=tinysrgb&w=300' alt="img not found"/>
        </div>
    </div>
  )
}

export default Hero;
