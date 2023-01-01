import ProblemSolving from '../problem-solving/problem-solving.component';
import Skills from '../skills/skills.component';

import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';

import './about.styles.scss';

const About = () => {
  return (
  <div id='about'>
    <Skills/>
    <ProblemSolving/>
  </div>
  )
}

export default About;
