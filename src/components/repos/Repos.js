import React, { useContext } from "react";
import RepoItem from "../repoItem/RepoItem";
import GithubContext from "../../context/github/githubContext";
import "./Repos.css";

const Repos = () => {
  const githubContext = useContext(GithubContext);
  const { repos } = githubContext;

  return (
    <div className="reposContainer">
      <h1>Latest Repos</h1>
      {repos.map((repo) => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
    </div>
  );
};

export default Repos;
