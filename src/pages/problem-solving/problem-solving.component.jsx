import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';
import './problem-solving.styles.scss';

const ProblemSolving = () => {
  return (
    <>
    <div className='ps'>
      <Fade left>
      <h1 className='ps__content-heading'>
        Problem Solving and Competitive Programming
      </h1>
      </Fade>
      <Fade right>
      <span className='ps__content'>
        I love picking my brain solving <span className='highlightedText'>algorithmic</span> problems.
      </span>
      </Fade>
      <Fade left>
      <span className='ps__content'>
        Near the end of my Second Year of Engineering, I secured  <span className='highlightedText'>First Rank</span> in an all over Pune  <span className='highlightedText'>coding competition</span> hosted by CSI and ReliScore with over <span className='highlightedText'>250+</span> applicants. Here's my <a href={process.env.PUBLIC_URL + '/assets/codex.jpeg' }target='_blank' rel="noopener noreferrer">Certificate</a>. 
      </span>
      </Fade>
      <Fade right>
      <span className='ps__content'>
        I have solved around <span className='highlightedText'>500+</span> algorithmic questions in all. I'm currently <span className='highlightedText'>rank 2</span> in my institute on GFG Platform. Here's the <a href='https://auth.geeksforgeeks.org/college/vishwakarma-institute-of-information-technology-viit-pune' target='_blank' rel="noopener noreferrer">leaderboard</a>.
      </span>
      </Fade>
      <Fade left>
      <span className='ps__content'>
        I have also completed <span className='highlightedText'>DSA Self Paced Course</span> from GFG. Here's my <a href={process.env.PUBLIC_URL + '/assets/dsa.pdf'} target='_blank' rel="noopener noreferrer">Certificate</a>.
      </span>
      </Fade>
      <Fade right>
      <span className='ps__content'>
        I was also elected as the <span className='highlightedText'>President</span> of CodeChef Campus Chapter for my institute for the year 2020-2021. We started with a group of around 30 students but grew to become a community of over 140 students. Here's my <a href={process.env.PUBLIC_URL + '/assets/pre.pdf'} target='_blank' rel="noopener noreferrer">Certificate</a>.
      </span>
      </Fade>
      <Fade left>
      <span className='ps__content'>
        And I have a <span className='highlightedText'>4 star</span> rating on CodeChef.
      </span>
      </Fade>
      <div className='ps__icon-wrapper'>
        <Roll left>
          <a href='https://auth.geeksforgeeks.org/user/siddharthkothari655/practice/' target='_blank' rel="noopener noreferrer">  
            <img src={process.env.PUBLIC_URL + '/assets/cp/gfg.svg'} alt=''/>
          </a>
        </Roll>
        <Roll left>
          <a href='https://www.codechef.com/users/siddharth_997' target='_blank' rel="noopener noreferrer">  
            <img src={process.env.PUBLIC_URL + '/assets/cp/codechef.svg'} alt=''/>
          </a>
        </Roll>
        <Roll left>
          <a href='https://leetcode.com/siddharth_997/' target='_blank' rel="noopener noreferrer">  
            <img src={process.env.PUBLIC_URL + '/assets/cp/leetcode.svg'} alt=''/>
          </a>
        </Roll>
      </div>
    </div>
    </>
  )
}

export default ProblemSolving;
