import ProblemSolving from '../problem-solving/problem-solving.component';
import Skills from '../skills/skills.component';

import Fade from 'react-reveal/Fade';

import './about.styles.scss';

const About = () => {
  return (
  <div id='about'>
    <Fade>
      <Skills/> 
    </Fade>
    <ProblemSolving/>
  </div>
  )
}

export default About;
