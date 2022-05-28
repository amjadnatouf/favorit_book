import React from "react";
import "./BookView.css";

const BookView = ({ id, title, body, imgURL, setId }) => {
  return (
    <div className="post-container">
      <div className="post-img">
        <img src={imgURL} alt="bookphoto" />
      </div>
      <div className="post-card">
        <div className="content">
          <h2>{title}</h2>
          <div>
            <h3>by Sophie Kinsella</h3>
            <h3>category #{id}</h3>
          </div>
          <p>{body}</p>
          <p>{body}</p>
          <p>{body}</p>
        </div>
        <div className="post-links">
          <ul>
            <li className="btn btn-dark" onClick={() => setId("")}>
              check books again
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BookView;
