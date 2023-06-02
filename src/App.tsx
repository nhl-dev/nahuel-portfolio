import AboutMe from './components/content/AboutMe'
import Presentation from './components/content/Presentation'
import Timeline from './components/content/Timeline'
import NavBar from './components/navigation/NavBar'

import { working, education } from './assets/data'
import { Flex } from '@chakra-ui/react'
import Contact from './components/content/Contact'
import Footer from './components/footer/Footer';

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
        //TODO: Projects
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>

      <Flex flexDirection={{ base: 'column', '2xl': 'row' }} alignContent={'center'} className='odd' py={70}>
        <Timeline title='Working Experience' data={working} />

        <Timeline title='Education' data={education} />
      </Flex>


      <Contact />

      <Footer />
    </>
  )
}

export default App
