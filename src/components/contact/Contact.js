import React from 'react'
import '../contact/contact.css'
import {MdCall} from 'react-icons/md';
import {BsFillChatDotsFill}from 'react-icons/bs';
import {BiMessageAlt}from 'react-icons/bi'
// import{HighChatBubbleBottomCenter}from 'react-icons/hi2';


function Contact() {
  return (
    <div className='c-wrapper'>
        <div className='c-container'>
            <div className='c-left'>
                <span>Our Contact</span>
                <span>Easy to Contact Us</span>
                <span>We always ready to help by providing the best services for you. <br/> We believe a good place to live can make your life better</span>
                    <div className=' contactModes'>
                        <div className='row'>
                            <div className='mode'>
                                

                                <div className='icon-1'>
                                    <div className='icon'>
                                        <MdCall size={20} className='bs'/>
                                    </div>
                                    <div className='details'>
                                        <span>Call</span>
                                        <span> 012 123 156 12</span>
                                       
                                    </div>
                                    
                                </div>
                                <button className='btn-1'>Call now</button>
                            </div>

                            <div className='mode'>
                                

                                <div className='icon-1'>
                                    <div className='icon'>
                                        <BsFillChatDotsFill size={20} className='bs1'/>
                                    </div>
                                    <div className='details'>
                                        <span>Chat</span>
                                        <span> 012 123 156 12</span>
                                       
                                    </div>
                                    
                                </div>
                                <button className='btn-1'>Call now</button>
                            </div>
                        </div>

                        <div className='row'>

                            <div className='mode'>
                                

                                <div className='icon-1'>
                                    <div className='icon'>
                                        <BsFillChatDotsFill size={20} className='bs'/>
                                    </div>
                                    <div className='details'>
                                        <span>videoChat</span>
                                        <span> 012 123 156 12</span>
                                       
                                    </div>
                                    
                                </div>
                                <button className='btn-1'>Call now</button>
                            </div>


                            <div className='mode'>
                                

                                <div className='icon-1'>
                                    <div className='icon'>
                                        <BiMessageAlt size={20} className='bs1'/>
                                    </div>
                                    <div className='details'>
                                        <span>Message</span>
                                        <span> 012 123 156 12</span>
                                       
                                    </div>
                                    
                                </div>
                                <button className='btn-1'>Call now</button>
                            </div>
                        </div>
                    </div>
            </div>
            <div className='c-right'>
                <div className='image-container-1'>
                    <img src='https://images.pexels.com/photos/313691/pexels-photo-313691.jpeg?auto=compress&cs=tinysrgb&w=600' alt='contact'/>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
