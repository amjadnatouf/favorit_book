import React, { useState } from "react";
import "./BooksView.css";

function BooksView({
  id,
  title,
  description,
  imgURL,
  isRead,
  el,
  setBook,
  setId,
}) {
  const [status, setStatus] = useState(isRead);

  const set = (e) => {
    e.preventDefault();
    setId(id);
    const _el = el;
    // console.log(_el);
    setBook({ ..._el });
  };

  const reset = () => {
    setStatus(!status);
  };

  return (
    <div className="book-card">
      <div className="img-container">
        <img src={imgURL} alt="book-cover" />
      </div>
      <div className="book-details">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="book-links">
          <ul>
            <li className="view btn-dark" onClick={set}>
              view book
            </li>
            <li className={`${status ? " new" : " read"}`}>
              {status ? "currently" : "read"}
            </li>
            <li className="again" onClick={reset}>
              {!status ? "read again" : "klart"}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BooksView;
