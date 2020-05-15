import React, { useEffect, useContext, Fragment } from "react";
import GithubContext from "../../context/github/githubContext";
const User = (props) => {
  const githubContext = useContext(GithubContext);

  const { getUser, user } = githubContext;
  const { match } = props;

  useEffect(() => {
    getUser(match.params.login);
  }, []);

  const { login, avatar_url, location } = user;
  return (
    <Fragment>
      <img src={avatar_url} alt="" style={{ width: "200px" }} />
      <h1>{login}</h1>
      <p>{location}</p>
    </Fragment>
  );
};

export default User;
