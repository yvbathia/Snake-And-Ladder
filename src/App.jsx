import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import { HOME } from "./constants/routes";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={HOME}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
