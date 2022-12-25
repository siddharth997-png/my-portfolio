import {Link as LinkR} from 'react-scroll';

import './project-menu.styles.scss';
import menuItems from './menu-items';

const ProjectMenu = ({selected,setSelected}) => {

  return (
    <div className='projects__menu'>
      {
        menuItems.map(({id,title}) => (
          <LinkR 
            key={id} 
            className={'projects__menu-item '+(selected === id ? 'active' : '')}
            onClick={() => setSelected(id)}
            activeClass="active"
            to='projects__container'
            spy={true}
            smooth={true}
            offset={-70}
            duration={700}
          >
            {title}
          </LinkR>
        ))
      }
      </div>
  )
}

export default ProjectMenu
