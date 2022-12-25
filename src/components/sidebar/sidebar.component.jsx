import { Link as LinkR } from "react-scroll";

import './sidebar.styles.scss';

const Sidebar = ({isOpen, toggleIsOpen}) => {
  return (
    <div className={'sidebar ' + (isOpen ? 'active' : '')}
    onClick={() => toggleIsOpen(false)}
    >
      <LinkR className='sidebar__item' 
        to='home' 
        onClick={() => toggleIsOpen(false)}
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-40}
        duration={700}
      >Home</LinkR>

      <LinkR className='sidebar__item' 
        to='about' 
        onClick={() => toggleIsOpen(false)}
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-40}
        duration={700}
      >About</LinkR>

      <LinkR className='sidebar__item' 
        to='projects' 
        onClick={() => toggleIsOpen(false)}
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-40}
        duration={700}
      >Projects</LinkR>

      <div className='hamburger-menu active' onClick={()=>{toggleIsOpen(!isOpen)}}>
        <span className='hamburger-line'></span>
        <span className='hamburger-line'></span>
        <span className='hamburger-line'></span>
      </div>
    </div>
  )
}

export default Sidebar
