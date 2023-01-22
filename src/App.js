import './global.styles.scss';
import './app.styles.scss';

import { useState, useEffect } from 'react';

import Navbar from './components/navbar/navbar.component';
import Home from './pages/home/home.component';
import About from './pages/about/about.component';
import Projects from './pages/projects/projects.component';
import Footer from './components/footer/footer.component';

import Fade from 'react-reveal/Fade';

function App() {

  const [viewProjectInfo,toggleViewProjectInfo] = useState(false);
  return (
    <div className="app">
      <Navbar viewProjectInfo={viewProjectInfo}/>
      <div className='sections'>
        <Home/>
        <About/>
        <Fade>
          <Projects viewProjectInfo={viewProjectInfo} toggleViewProjectInfo={toggleViewProjectInfo}/>
        </Fade>
        <Footer viewProjectInfo={viewProjectInfo}/>  
      </div>
    </div>
  );
}

export default App;
