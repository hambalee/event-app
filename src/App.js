import React from "react";
import "./App.css";
import Home from "./containers/Home";
import Login from "./containers/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./containers/About";
import NavBar from "./components/NavBar";
import NotFound from "./containers/error/NotFound";
import Admin from "./containers/Admin";
import Event from "./containers/Event";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar />

          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/admin">
              <Admin />
            </Route>
            <Route exact path="/event">
              <Event />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
