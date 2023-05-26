import AboutMe from './components/content/AboutMe'
import Presentation from './components/content/Presentation'
import Timeline from './components/content/Timeline'
import NavBar from './components/navigation/NavBar'

import { working, education } from './assets/data'
import { Flex } from '@chakra-ui/react'
import Contact from './components/content/Contact'

function App() {

  return (
    <>
      <NavBar />

      <Presentation />

      <AboutMe />

      <Flex flexDirection={{ base: 'column', '2xl': 'row' }} alignContent={'center'}>
        <Timeline title='Working Experience' data={working} />

        <Timeline title='Education' data={education} />
      </Flex>

      <Contact />
    </>
  )
}

export default App
