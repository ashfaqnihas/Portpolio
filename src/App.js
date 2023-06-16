import React from 'react'
import Header from './Components/Header'
import TopContainer from './Components/TopContainer'
import ProjectContant from './ProjectContainer/ProjectContant'
import SkillContainer from './SkillContainer/SkillContainer'
import "./App.css"
import ExperianceContant from './Components/ExperianceContainer/ExperianceContant'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Header />
      <TopContainer />
      <SkillContainer />
      <ProjectContant />
      <ExperianceContant />
      <Contact />
    </div>
  )
}

export default App
