import React, { useState, useContext, Fragment } from "react";
import GithubContext from "../../../context/github/githubContext";
import "./Search.css";
const Search = () => {
  const githubContext = useContext(GithubContext);

  const [text, setText] = useState("");
  const { users, clearUsers } = githubContext;
  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
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
      <form className="searchForm" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Search users..."
          className="searchField"
          name="text"
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
