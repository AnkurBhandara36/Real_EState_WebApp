import React from 'react'
import '../footer/footer.css'
function Footer() {
  return (
    <div className='f-container'>
        <div className='footer'>
            <div className='f-left'>
                <h3 className='f-heading'>Homzy</h3>
                <div className='orangeCircle'></div>
                <p className='f-para'>our vision is to make all people <br/>
                the best place to live for them
                </p>
            </div>
            <div className='f-right'>
                <h3 className='f-head'>Information</h3>
                <p className='f-para'>145 Nagpur IN 7777</p>
                <div>
                    <span className='f-item'>Property</span>
                    <span className='f-item'>Services</span>
                    <span className='f-item'>Product</span>
                    <span className='f-item'>About Us</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
