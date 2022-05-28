import React from "react";
import "./BookView.css";

const BookView = ({ id, title, body, imgURL }) => {
  return (
    <div className="post-card">
      <div className="content">
        <h2>{title}</h2>
        <div>
          <h3>by Sophie Kinsella</h3>
          <h3>category #{id}</h3>
        </div>
        <p>{body}</p>
      </div>
      <div className="post-links">
        <ul>
          <li className="">finished</li>
          <li className="">currently</li>
          <li className="">read again</li>
        </ul>
      </div>
    </div>
  );
};

export default BookView;
