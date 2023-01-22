import './footer.styles.scss'

const Footer = ({viewProjectInfo}) => {
  return (
    <div className='footer' style={{'display': `${viewProjectInfo ? 'none' : ''}`}}>
      Made with <span className='footer_love wave'>&#10084;</span> by Siddharth Kothari
    </div>
  )
}
 
export default Footer;
