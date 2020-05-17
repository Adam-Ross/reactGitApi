import React, { useEffect, useContext, Fragment } from "react";
import Repos from "../repos/Repos";
import "./User.css";
import GithubContext from "../../context/github/githubContext";
const User = (props) => {
  const githubContext = useContext(GithubContext);

  const { getUser, user, getRepos } = githubContext;
  const { match } = props;

  useEffect(() => {
    getUser(match.params.login);
    getRepos(match.params.login);
  }, []);

  const {
    login,
    avatar_url,
    location,
    html_url,
    hirable,
    email,
    public_repos,
    public_gists,
    following,
    followers,
    bio,
    blog,
  } = user;
  return (
    <Fragment>
      <div className="userCard">
        <div className="userInfo">
          <img
            src={avatar_url}
            alt=""
            style={{ width: "200px", marginRight: "1rem" }}
          />
          <h1>{login}</h1>
          <p>{location}</p>
        </div>
        <div className="userData">
          {!bio || bio.split(" ").length < 15 ? (
            <p className="bio">
              'To live is to dare, to dare is to care, to care is to matter, to
              matter is to matter.'
            </p>
          ) : (
            <p className="bio">{bio}</p>
          )}
          <a href={html_url} target="_blank" className="profile">
            Profile
          </a>
          <a href={blog} className="blog">
            Blog
          </a>
          <div
            className="userBlock"
            style={{ background: "var(--blue)", color: "var(--white)" }}
          >
            Following: {following}
          </div>
          <div
            className="userBlock"
            style={{ background: "var(--dark)", color: "var(--blue)" }}
          >
            Followers: {followers}
          </div>
          <div
            className="userBlock"
            style={{ background: "var(--white)", color: "var(--dark)" }}
          >
            Public Gists: {public_gists}
          </div>
          <div
            className="userBlock"
            style={{ background: "var(--blue)", color: "var(--dark)" }}
          >
            Public Repos: {public_repos}
          </div>
        </div>
      </div>
      <div className="reposCard">
        <Repos />
      </div>
    </Fragment>
  );
};

export default User;
