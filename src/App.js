import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/auth/Login";
import Home from "./components/dashboard/Home";
import NavBar from "./components/layout/NavBar";
const App = () => (
  <Router>
    <Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Fragment>
  </Router>
);

export default App;
