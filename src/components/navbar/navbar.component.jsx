import { Link as LinkR } from "react-scroll";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import './navbar.styles.scss';
import { useRef } from "react";

const Navbar = ({viewProjectInfo}) => {
  const navRef = useRef();

  const toggleNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  const closeNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
  }
  
  return (
      <header className="header" style={{'display': `${viewProjectInfo ? 'none' : ''}`}}>
        <LinkR
          className='header__logo unselectable' 
          to='home'
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={700}
          onClick={closeNavbar}
        >
          {"<Siddharth Kothari/>"}
        </LinkR>
        <nav className='navbar__menu ' ref={navRef}>
          <LinkR className='navbar__item' 
            to='home'
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={700}
            onClick={closeNavbar}
          >Home</LinkR>
            
          <LinkR className='navbar__item' 
            to='about'
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={700}
            onClick={closeNavbar}
          >About</LinkR>
            
          <LinkR className='navbar__item' 
            to='projects'
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={700}
            onClick={closeNavbar}
          >Projects</LinkR>
            <button className="navbar__btn navbar__btn_close" onClick={toggleNavbar}>
              <AiOutlineClose />
            </button>
        </nav>
              
        <button className="navbar__btn" onClick={toggleNavbar}>
          <BiMenuAltRight /> 
        </button>
      </header>
     
  )
}

export default Navbar; 
