import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import Battle from './Battle'
import Results from './Results'
import Popular from './Popular'


const App = () => (
  <Router>
    <div className="container">
      <Nav/>
      <Switch>
        <Route
          exact
          path="/"
          component={ Home }
        />
        <Route
          exact
          path="/battle"
          component={ Battle }
        />
        <Route
          path="/battle/results"
          component={ Results }
        />
        <Route
          path="/popular"
          component={ Popular }
        />
        <Route
          render={() => (
            <h1>
              404 – Page Not Found!
            </h1>
          )}
        />
      </Switch>
    </div>
  </Router>
)



export default App;
