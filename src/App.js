import React, { Fragment } from "react";
import Navbar from "./components/layout/navbar/Navbar";
import Search from "./components/layout/search/Serach";
import About from "./components/layout/about/About";
import Users from "./components/users/Users";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import Alert from "./components/layout/alert/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import User from "./components/user/User";

import "./App.css";

function App() {
  return (
    <Router>
      <AlertState>
        <GithubState>
          <div className="App">
            <Navbar />
            <div className="container">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <Fragment>
                      <Search />
                      <Users />
                    </Fragment>
                  )}
                />
                <Route exact path="/about" component={About} />
                <Route
                  exact
                  path="/user/:login"
                  render={(props) => <User {...props} />}
                />
              </Switch>
            </div>
          </div>
        </GithubState>
      </AlertState>
    </Router>
  );
}

export default App;
