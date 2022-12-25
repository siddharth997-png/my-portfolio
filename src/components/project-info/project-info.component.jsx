import ProjectInfoHamburgerMenu from '../project-info-hamburger-menu/project-info-hamburger-menu.component';

import './project-info.styles.scss';

const ProjectInfo = ({project,toggleViewProject}) => {
  const {projectTitle, employer, mainDesc, links, techUsed,imgSrc} = project;
  const newText = mainDesc.split('<br>')
  .map ((item, i) => (
    <p key={i}>{item}</p>
  ));
  return (
    <div className='project-info'>
      <ProjectInfoHamburgerMenu 
        toggleViewProject={toggleViewProject} 
      />
      <div className='container'>
        <div className='project__info-content'>
          <span className='header'>Project</span>
          <div className='project-name'>
            {projectTitle}
          </div>
          <span className='employer'>
            - {employer}
          </span>
          <div className='main-desc-header'>About</div>
          <div className='main-desc'>
            {newText}
          </div>
          <div className='links'>
          {
                links.map(({src, title, publicAsset},index) => (
                <a key={index} 
                href={`${publicAsset ? process.env.PUBLIC_URL+src : src}`} 
                target='_blank'  rel="noopener noreferrer" >{title}</a>
              ))
            }
          </div>
        </div>
        <div className='project-info__img-container'>
          <div className='tech-container'>
            <span className='tech-used'>Technologies Used</span>
            <div className='tech-stack'>
              {
                   techUsed.map((tech,index) => (
                  <span key={index}className='tech'>{tech}</span>
                ))
              }
            </div>
          </div>
          <img src={process.env.PUBLIC_URL+imgSrc} alt=''/> 
        </div>
      </div>
    </div>
  )
}

export default ProjectInfo;
