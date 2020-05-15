import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";

import {
  SEARCH_USERS,
  GET_USER,
  CLEAR_USERS,
  GET_REPOS,
  SET_LOADING,
} from "../types";

const GithubState = (props) => {
  const initialState = {
    users: [],
    repos: [],
    user: {},
    loading: false,
  };

  // Use Reducer hook
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //Search user
  const searchUsers = async (text) => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    dispatch({ type: SEARCH_USERS, payload: res.data.items });
    dispatch({ type: SET_LOADING });
  };

  // Get user
  const getUser = async (login) => {
    setLoading();

    const res = await axios.get(`https://api.github.com/users/${login}`);

    dispatch({ type: GET_USER, payload: res.data });
  };
  // Get repos

  // Clear users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });
  // Set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  // Return provider
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        repos: state.repos,
        loading: state.loading,
        user: state.user,
        searchUsers,
        clearUsers,
        getUser,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
