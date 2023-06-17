import React from 'react'
import '../compony/company.css';
import img1 from '../compony/americanhome.jpg'
import img2 from '../compony/horizon.jpg'
import img3 from '../compony/seaside1.jpg'
import img4 from '../compony/structure.jpg'

function Company() {
  return (
    <div className='company'>
      <img src={img1} alt='img1 not loaded'></img>
      <img src={img2} alt='img2 not loaded'></img>
      <img src={img3} alt='img3 not loaded'></img>
      <img src={img4} alt='img4 not loaded'></img>
    </div>
  )
}

export default Company
