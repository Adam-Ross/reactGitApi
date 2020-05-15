import React from "react";
import "./UserItem.css";
import { Link } from "react-router-dom";

const UserItem = ({ user, loading }) => {
  const { avatar_url, login, location } = user;

  return (
    <div className="userItem">
      <img src={avatar_url} alt="" />
      <h1>{login}</h1>
      <p>{location}</p>
      <Link to={`/user/${login}`} className="profileBtn">
        Profile
      </Link>
    </div>
  );
};

export default UserItem;
