import './project-info-hamburger-menu.styles.scss';

const ProjectInfoHamburgerMenu = ({toggleViewProjectInfo}) => {
  return (
    <div className='project-info__hamburger-menu'
        onClick={() => toggleViewProjectInfo(false)}
      >
        <span className='project-info__hamburger-line'></span>
        <span className='project-info__hamburger-line'></span>
      </div>
  )
}

export default ProjectInfoHamburgerMenu;