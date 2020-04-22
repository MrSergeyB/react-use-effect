import React from "react";
import "./list.css";

const List = ({usersList, displayUserInfo}) => {
  return (
    <ul className="user-box">
      {usersList.data.map((user) => {
        return (
          <li
            className="user"
            id={user.id}
            key={user.id}
            onClick={(e) => displayUserInfo(e.target.id)}
          >
            {user.name}
          </li>
        );
      })}
    </ul>
  );
};

export default List;
