import React,{useState, useEffect} from 'react'

function Header() {

    const [toggleMenu, setToggleMenu] = useState(true)
    const [ screenWidth, setScreenWidth] = useState(window.innerWidth)
    const toggleNav = () =>{
        setToggleMenu(!toggleMenu)
    }
    return (
     
        <div className='header'>
            <a href='#' target='_blank' className='logo'>KEY2IQ</a>

            {(toggleMenu || screenWidth > 768) && (
                 <div className='toggle'>
                 <ul>
                     <li><a href='#' target='_blank'>Home</a></li>
                     <li><a href='#' target='_blank'>Subscribe</a></li>
                     <li><a href='#' target='_blank'>Recommendations</a></li>
                 </ul>
                
             </div>
            )}
          <div className='toggle-btn' onClick={toggleNav}><i class="fas fa-bars"></i></div>
        </div>
    );
  }

  export default Header;