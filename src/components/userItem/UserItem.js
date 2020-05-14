import React from "react";
import "./UserItem.css";

const UserItem = ({ user, loading }) => {
  const { avatar_url, login, location } = user;

  return (
    <div className="userItem">
      <img src={avatar_url} alt="" />
      <h1>{login}</h1>
      <p>{location}</p>
      <a href="#" className="profileBtn">
        Profile
      </a>
    </div>
  );
};

export default UserItem;
