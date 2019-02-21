import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css'

const fetch = require('node-fetch')

import ProjectIndex from './Routes/ProjectIndex/ProjectIndex.jsx'
// import ProjectShow from './Routes/ProjectShow/ProjectShow.jsx'


class App extends React.Component {

  
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path="/projects" component={ProjectIndex} />
            <Route path="/" exact component={ProjectIndex} />
            {/* <Route 
              path="${match.url}/projectName"
              render={() => <ProjectShow project="${projectName}" />}
            /> */}
          </div>
        </Router>
      </div>
    )
  }
}

export default App
