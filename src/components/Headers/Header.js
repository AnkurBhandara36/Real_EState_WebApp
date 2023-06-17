import React ,{useState} from 'react'
import {BiMenuAltRight}from 'react-icons/bi';
import '../Headers/Header.css';


function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  function getStyle(isMenuOpen){
    if(document.documentElement.clientWidth <=800){
      return {right : !isMenuOpen && "-100%"}
    }
  }

  return (
    <div className='h-wrapper'>
        <div className='logo'>
            <h1 className='logo_title'>Homyz</h1>
            <div className='blueCircle'></div>
        </div>

    
        <div className="menu" style={getStyle(isMenuOpen)}>
          <a href='/residencies'>Residencies</a>
          <a href='/value'>Our Value</a>
          <a href='/contactUS'>Contact Us</a>
          <a href='/get'>Get Started</a>
        <button className='btn'>Contact</button>
     </div>

       

    <div className='menuIcon' onClick={()=>setMenuOpen((prev)=>!prev)}>
        <BiMenuAltRight size={30}/>
    </div>
      
    </div>
  )
}


export default Header

