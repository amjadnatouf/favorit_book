import React, { useState } from "react";
import "./BookList.css";

function ListBook({ title, description, imgURL, isRead }) {
  const [status, setStatus] = useState(isRead);

  const changeStatus = () => {
    !status ? setStatus(!status) : console.log("already readed");
  };
  const reset = () => {
    status && setStatus(!status);
  };

  return (
    <div className="card">
      <div className="img-container">
        <img src={imgURL} alt="book-cover" />
      </div>
      <div className="details">
        <div className="info">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="book-links">
          <ul>
            <li className="btn btn-secondary" onClick={changeStatus}>
              read book
            </li>
            <li className={`${status ? "active" : "not"}`}>
              {status ? "läst" : "inte"}
            </li>
            <li className="btn btn-dark" onClick={reset}>
              read again
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ListBook;
