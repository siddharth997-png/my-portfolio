import './project-info-hamburger-menu.styles.scss';

const ProjectInfoHamburgerMenu = ({toggleViewProject}) => {
  return (
    <div className='project-info__hamburger-menu'
        onClick={() => toggleViewProject(false)}
      >
        <span className='project-info__hamburger-line'></span>
        <span className='project-info__hamburger-line'></span>
      </div>
  )
}

export default ProjectInfoHamburgerMenu;