import styles from './App.module.css'
import { Navbar } from './components/Navbar'
import { Intro } from './components/Intro'
import { About } from './components/About'
import { Experience } from './components/Experiences'
import { Projects } from './components/Projects'
import { Credits } from './components/Credits'


function App() {

  return (
    <div className={styles.App}>
       <Navbar/>
       <Intro/>
       <About/>
       <Experience/>
       <Projects/>
       <Credits/>
    </div>
  )
}

export default App
