import React from "react";
import { Link } from "react-router-dom";

const SingleBlog = ({ id, title, body, dateTime }) => {
  // console.log(
  //   "🚀 ~ file: SingleBlog.jsx ~ line 5 ~ SingleBlog ~ body",
  //   body.length
  // );

  return (
    <>
      <Link to={`/${id}`}>
        <article className="card">
          <h2 className="card__title">{title}</h2>
          <p className="card__body">{body.slice(0, 50)}</p>
          <h3 className="card__date">{dateTime}</h3>
        </article>
      </Link>
    </>
  );
};

export default SingleBlog;
