import './global.styles.scss';
import './app.styles.scss';

import NavComplete from './components/navcomplete/navcomplete.component';
// import Home from './pages/home/home.component';
// import About from './pages/about/about.component';
// import Projects from './pages/projects/projects.component';
// import Footer from './components/footer/footer.component';

import Fade from 'react-reveal/Fade';

function App() {
  return (
    <div className="app">
      <NavComplete/>
      <div className='sections'>
        {/* <Home/> */}
        {/* <About/>
        <Fade>
          <Projects/>
        </Fade>
        <Footer/> */}
      </div>
    </div>
  );
}

export default App;
