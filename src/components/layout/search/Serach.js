import React, { useState } from "react";
import "./Search.css";
const Search = () => {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
    console.log(text);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // want to run the search users that passed in the from the context
  };

  return (
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
  );
};

export default Search;
