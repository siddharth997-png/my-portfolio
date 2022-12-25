import Roll from 'react-reveal/Roll';
import './social.styles.scss';

const Social = () => {
  return (
    <div className='home__social-icon-wrapper'>
      <Roll right>
        <a href='mailto:siddharthkothari655@gmail.com' target='_blank' rel="noopener noreferrer">  
          <img src={process.env.PUBLIC_URL + '/assets/social/mail.svg'} alt=''/>
        </a>
      </Roll>
      <Roll right>
       <a href='https://www.linkedin.com/in/1-siddharth-kothari/' target='_blank' rel="noopener noreferrer">  
          <img src={process.env.PUBLIC_URL + '/assets/social/linkedin.svg'} alt=''/>
        </a>
      </Roll>
      <Roll right>
        <a href='https://github.com/siddharth997-png' target='_blank' rel="noopener noreferrer">  
          <img src={process.env.PUBLIC_URL + '/assets/social/github.svg'} alt=''/>
        </a>
      </Roll>
      

    </div>
  )
}

/*
<Roll right>
        <a href='https://instagram.com/siddharth_997' target='_blank' rel="noopener noreferrer">  
          <img src={process.env.PUBLIC_URL + '/assets/social/instagram.svg'} alt=''/>
        </a>
      </Roll>
*/

export default Social
