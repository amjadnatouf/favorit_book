import React, { useState } from "react";
import "./BookGrid.css";

function GridBook({
  id,
  title,
  description,
  imgURL,
  isRead,
  setId,
  el,
  setBook,
}) {
  const [status, setStatus] = useState(isRead);

  // const set = () => {
  //   setId(id);
  //   console.log(id)

  // };

  const set = (e) => {
    e.preventDefault();
    const _el = el;
    console.log(_el);
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
      </div>
      <div className="links">
        <span className="read" onClick={set}>
          w.read
        </span>
        <span className={`${status ? "new" : "old"}`}>
          {!status ? "new" : "old"}
        </span>
        <span className="read again" onClick={reset}>
          r.again
        </span>
      </div>
    </div>
  );
}

export default GridBook;
