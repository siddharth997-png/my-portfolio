import { Link as LinkR } from "react-scroll";

import './navbar.styles.scss';

const Navbar = ({isOpen, toggleIsOpen}) => {
  return (
    <div className={'navbar ' + (isOpen ? 'active' : '')} >
      <LinkR
        className='navbar__logo unselectable' 
        to='home'
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-70}
        duration={700}
      >
        {"<Siddharth Kothari/>"}
      </LinkR>
      <div className='navbar__menu'>
        <LinkR className='navbar__item' 
          to='home'
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={700}
        >Home</LinkR>
          
        <LinkR className='navbar__item' 
          to='about'
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={700}
        >About</LinkR>
          
        <LinkR className='navbar__item' 
          to='projects'
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={700}
        >Projects</LinkR>
          
        
      
      </div>

      <div className='hamburger-menu' onClick={()=>{toggleIsOpen(!isOpen)}}>
        <span className='hamburger-line'></span>
        <span className='hamburger-line'></span>
        <span className='hamburger-line'></span>
      </div>
    </div>
  )
}

export default Navbar 
