import './project-card.styles.scss';

const ProjectCard = ({item,toggleViewProjectInfo,setProject}) => {

  const {imgSrc, projectTitle, employer, desc,id} = item;
  const handleClick = () => {
    setProject(item);
    toggleViewProjectInfo(true);
  }
  return (
    <div className='project-card__container' >
      <span className='offset' id={id}/>
      <div className='project-card__img-container'>
        <img src={process.env.PUBLIC_URL + imgSrc} alt=''/>
      </div>
      <div className='project-card__name'>{projectTitle}</div>
      <span className='project-card__employer'>{employer}</span>
      <div className='project-card__desc'>{desc}</div>
      <div className='project-card__expand'
        onClick={handleClick}
      >View More</div>
    </div>
  )
}

export default ProjectCard;
