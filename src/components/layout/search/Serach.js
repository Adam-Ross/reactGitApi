import React, { useState, useContext, Fragment } from "react";
import GithubContext from "../../../context/github/githubContext";
import Alert from "../alert/Alert";
import AlertContext from "../../../context/alert/alertContext";
import "./Search.css";
const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const { setAlert, removeAlert } = alertContext;
  const [text, setText] = useState("");
  const { users, clearUsers } = githubContext;
  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter a name!");
      setTimeout(() => {
        removeAlert();
      }, 1000);
    }
    // want to run the search users that passed in the from the context
    githubContext.searchUsers(text);
    // Need to fix the input, needs to go away after submit, and when clear button is clicked.
    clearInput();
  };

  const clearInput = () => {
    const searchField = document.querySelector(".searchField");
    searchField.value = "";
  };

  return (
    <Fragment>
      <Alert />
      <form className="searchForm" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Search users..."
          className="searchField"
          name="text"
          autoComplete="off"
          onChange={onChange}
        />
        <input type="submit" className="submitBtn" />
      </form>
      {users.length > 0 && (
        <div className="clearBtn" onClick={clearUsers}>
          Clear users
        </div>
      )}
    </Fragment>
  );
};

export default Search;
