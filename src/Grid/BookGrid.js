import React, { useState } from "react";
import "./BookGrid.css";

function GridBook({ title, description, imgURL, isRead }) {
  const [status, setStatus] = useState(isRead);

  const changeStatus = () => {
    !status ? setStatus(!status) : console.log("already readed");
  };
  const reset = () => {
    status && setStatus(!status);
  };

  return (
    <div className="grid-card">
      <div className="img-container">
        <img src={imgURL} alt="book-cover" />
      </div>
      <div className="grid-details">
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="grid-links">
          <ul>
            <li className="g-btn g-secondary" onClick={changeStatus}>
              read book
            </li>
            <li className={`${status ? "g-active" : "g-not"}`}>
              {status ? "läst" : "inte"}
            </li>
            <li className="g-btn g-dark" onClick={reset}>
              read again
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default GridBook;
