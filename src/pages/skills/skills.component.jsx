import React from 'react'
import './skills.styles.scss'

import SkillCard from '../../components/skill-card/skill-card.component'
import {skillsArray} from './skills.data'

const Skills = () => {
  return (
    <div className='skills'>
        <h1 className='skills__heading'>My Skills</h1>
        <div className='skills-card__container'>
          {
            skillsArray.map((item,index) => (
              <SkillCard 
                key={index}
                item={item}
              />
            ))
          }
        </div>
    </div>
  )
}

export default Skills