import AboutMe from './components/content/AboutMe';
import Presentation from './components/content/Presentation';
import NavBar from './components/navigation/NavBar';

import Projects from './components/content/Projects';

import Contact from './components/content/Contact';
import Footer from './components/footer/Footer';
import Skills from './components/content/Skills';
import Experience from './components/content/Experience';

function App() {

  return (
    <>
      <div className='screen'>
        <NavBar />
        <Presentation />
      </div>

      <div className='odd'>
        <AboutMe />
      </div>

      <div>
        <Projects />
      </div>

      <div className='odd'>
        <Skills />
      </div>

      <div>
        <Experience />
      </div>

      <div>
        <Contact />
      </div>

      <Footer />
    </>
  )
}

export default App
