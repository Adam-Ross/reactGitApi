import React from "react";
import "./RepoItem.css";

const RepoItem = ({ repo }) => {
  const { html_url, name } = repo;

  return (
    <div className="repoItemCard">
      <a
        href={html_url}
        className="repoItem"
        target="_blank"
        rel="noopener noreferrer"
      >
        {name}
      </a>
    </div>
  );
};

export default RepoItem;
