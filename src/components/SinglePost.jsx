import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const SinglePost = ({ data, setData }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  // console.log(typeof id);

  const newData = data.find((item) => item.id.toString() === id);
  // console.log(newData);

  const { dateTime, title, body } = newData;

  const handleDelete = (id) => {
    // console.log(id);
    const newData = data.filter((item) => item.id.toString() !== id);
    // console.log(newData);
    setData(newData);
    navigate("/");
  };

  return (
    <>
      <section className="single__post">
        <h1 className="single__post__heading">{title}</h1>
        <h2 className="single__post__date">{dateTime}</h2>
        <p className="single__post__body">{body}</p>
        <button onClick={() => handleDelete(id)} className="btn btn--delete">
          Delete Post
        </button>
      </section>
    </>
  );
};

export default SinglePost;
