import Fade from 'react-reveal/Fade';
import Social from '../../components/social-icons/social.component';
import Typewriter from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";

import './home.styles.scss';


const stringSplitter = string => {
  const splitter = new GraphemeSplitter();
  return splitter.splitGraphemes(string);
};

const Home = () => {
  return (
    <div className='home' id='home'>
      <Fade left>
        <div className='home__img-container'>
          <img src={process.env.PUBLIC_URL + '/assets/avatar.svg'} alt=''/>
        </div>
      </Fade>
      <Fade right>
        <div className='home__content-wrapper'>
          <p className='content-intro'>Hey <span className="wave">👋</span></p>
          <p className='content-main'>I'm <span className='content-name'>Siddharth</span>.</p>
          <span className='typewriter-content'>
            <Typewriter
              options={{
                strings: [
                  'Software Engineer✨', 
                  'Full Stack Developer🚀',
                  'Cloud and Devops🌩️',
                  'Competitive Programmer👨‍💻'
                  ],
                autoStart: true,
                loop: true,
                stringSplitter,
                delay: 50,
                pauseFor: 1500
              }}
            /> 
          </span> 
          <p className='content'>
            <div className='content-description'>
              I am a Software Engineer with a knack for building highly scalable and distributed systems. 
            </div>

            <div className='experience-container'>
              <h2>WORKED AT</h2>
              <div className='worked-at-logo-container'>
                <div className='worked-at-item'>
                <img src={process.env.PUBLIC_URL + '/assets/worked-at-logos/amazon-web-services.svg'} alt=''/>
                </div>
                <div className='worked-at-item'>
                <img src={process.env.PUBLIC_URL + '/assets/worked-at-logos/shiprocket.svg'} alt=''/>
                </div>
              </div>
            </div>
          </p>

          <a href={process.env.PUBLIC_URL + '/assets/Siddharth_Kothari_VIIT.pdf'} 
          target='_blank' 
          rel="noopener noreferrer"
          className='resume'>My Resume</a>
          
        </div>
      </Fade>
      <Social/>
    </div>
  )
}

export default Home