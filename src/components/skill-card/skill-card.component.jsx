import React from 'react'
import './skill-card.styles.scss'

export const SkillCard = ({item}) => {
  return (
    <div className='skill-card__container'>
        <h2 className='skill-card__name'>{item.parentSkillTitle}</h2>
        <div className='skills-container'>
        {
            item.skills.map((skill,index) => (
                <div className='skill-container'>
                    <div className='skill__img-container' key={index}>
                        <img src={process.env.PUBLIC_URL + '/assets/' + skill.skillImgSrc} alt=''/>
                    </div>
                    <p className='skill-title'>{skill.skillTitle}</p>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default SkillCard
