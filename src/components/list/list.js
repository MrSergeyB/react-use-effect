import React from "react";
import "./list.css";

const List = ({loaderOne, usersList, setId}) => {
  if (loaderOne) {
    return <p>Loading...</p>;
  } else {
    return (
      <ul className="user-box">
        {usersList.data.map((user) => {
          return (
            <li
              className="user"
              id={user.id}
              key={user.id}
              onClick={(e) => setId(e.target.id)}
            >
              {user.name}
            </li>
          );
        })}
      </ul>
    );
  }
};

export default List;
