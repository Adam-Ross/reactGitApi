import React from "react";
import Navbar from "./components/layout/navbar/Navbar";
import Search from "./components/layout/search/Serach";
import Users from "./components/users/Users";
import GithubState from "./context/github/GithubState";
import "./App.css";

function App() {
  return (
    <GithubState>
      <div className="App">
        <Navbar />
        <div className="container">
          <Search />
          <Users />
        </div>
      </div>
    </GithubState>
  );
}

export default App;
