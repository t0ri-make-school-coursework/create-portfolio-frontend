import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css'

import ProjectIndex from './Routes/ProjectIndex/ProjectIndex.jsx'
import ProjectShow from './Routes/ProjectShow/ProjectShow.jsx'


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/projects" exact component={ProjectIndex} />
          <Route 
            path="${match.url}/projectName"
            render={() => <ProjectShow project="${projectName}"
          />
        </Router>
      </div>
    )
  }
}

export default App
