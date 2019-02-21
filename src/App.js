import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css'

import ProjectIndex from './Routes/ProjectIndex/ProjectIndex.jsx'
// import ProjectShow from './Routes/ProjectShow/ProjectShow.jsx'

const fetch = require('node-fetch')

class App extends React.Component {

  componentDidMount() {
    fetch('/api/projects').then((res) => {
      return res.json()
    }).then((json) => {
      const { projects } = json
      console.log(projects)
      // const { about } = json // Get a value from JSON object
      // this.setState({ about }) // Set a value on state with returned value
    }).catch((err, json) => {
      // Handle errors
      console.log(err.message)
    })
  }
  
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
