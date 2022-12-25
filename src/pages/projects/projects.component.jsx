import { useState,useEffect } from 'react';

import ProjectMenu from '../../components/project-menu/project-menu.component';
import ProjectCard from '../../components/project-card/project-card.component';
import ProjectInfo from '../../components/project-info/project-info.component';

import './projects.styles.scss';

import {
  allProjectsData,
  nodeProjects,
  reactProjects,
  phpProjects,
  jsProjects 
} from './project-data';

const Projects = () => {

  const [selected,setSelected] = useState('all');
  const [data,setData] = useState([]);

  const [viewProject,toggleViewProject] = useState(false);
  const [project,setProject] = useState({});

  useEffect(() => {
    switch(selected) {
      case 'all' : {
        setData(allProjectsData);
          break;
      }
      case 'react' : {
        setData(reactProjects);
        break;
      }
      case 'node' : {
        setData(nodeProjects);
        break;
      }
      case 'php' : {
        setData(phpProjects);
        break;
      }
      case 'js' : {
        setData(jsProjects);
        break;
      }
      default: {
        setData([]);
      }
    }
  },[selected])
  return (
    <div className='projects' id='projects'>
      <h1 className='projects__heading'>My Projects</h1>
      <ProjectMenu selected={selected} setSelected={setSelected}/>
      <div className='projects__container' id='projects__container'>
        {
            data.map((item,index) => (
              <ProjectCard key={index} 
                item={item} 
                toggleViewProject={toggleViewProject}
                setProject={setProject}
              />
          ))
        }
      </div>
      {
        (viewProject ? 
            <ProjectInfo 
              toggleViewProject={toggleViewProject}
              project={project}
            /> 
          : null)
      }
        
    </div>
  )
}

export default Projects
