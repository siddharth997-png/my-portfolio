import React from 'react'
import './skills.styles.scss'

import SkillCard from '../../components/skill-card/skill-card.component'
import {skillsArray} from './skills.data'

const Skills = () => {
  return (
    <div className='skills'>
      <div className='skills__header'>
        <h1 className='skills__heading'>My Skills</h1>
        <span className='skills__description'>Here are some of the tools/frameworks I have worked on</span>
      </div>
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