import AboutMe from './components/content/AboutMe'
import Presentation from './components/content/Presentation'
import Timeline from './components/content/Timeline'
import NavBar from './components/navigation/NavBar'

import { working, education } from './assets/data'

function App() {

  return (
    <>
      <NavBar />

      <Presentation />

      <AboutMe />

      <Timeline title='Working Experience' data={working} />

      <Timeline title='Education' data={education} />
    </>
  )
}

export default App
