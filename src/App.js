import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

import Home from "./components/Home";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Profile from "./components/Profile";
import Experience from "./components/Experience";

function App() {
  return (
    <Router>
      <>
        <Route exact path="/" component={Home} />
        <Switch>
          <Route path="/skills" component={Skills} />
          <Route path="/education" component={Education} />
          <Route path="/profile" component={Profile} />
          <Route path="/experience" component={Experience} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
