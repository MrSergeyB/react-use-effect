import React from "react";
import "./details.css";

const Details = ({loading, userInfo}) => {
  if (!loading) {
    return null;
  } else {
    return (
      <ul className="userdetails-box">
        <li>
          <img src={userInfo.data.avatar} alt={userInfo.data.name} />
        </li>
        <li>Name: {userInfo.data.name}</li>
        <li>City: {userInfo.data.details.city}</li>
        <li>Company: {userInfo.data.details.company}</li>
        <li>Position: {userInfo.data.details.position}</li>
      </ul>
    );
  }
};

export default Details;
