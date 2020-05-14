import React, { useContext } from "react";
import UserItem from "../userItem/UserItem";
import GithubContext from "../../context/github/githubContext";
import "./Users.css";

const Users = () => {
  const githubContext = useContext(GithubContext);

  const { loading, users } = githubContext;

  return (
    <div className="usersContainer">
      {users.map((user) => (
        <UserItem user={user} key={user.id} />
      ))}
    </div>
  );
};

export default Users;
