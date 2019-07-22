import React, {useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import Apply from './Components/Apply';
import AcademyTable from './Components/AcademyTable';

function App() {

  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <h1>Film Academies</h1>
            <Link to={'/academies'}>See the academies here</Link>
          </Route>
          <Route exact path="/apply" component={Apply} />
          <Route exact path="/academies" component={AcademyTable} />
        </Switch>
      </Router>
  );
}

export default App;
