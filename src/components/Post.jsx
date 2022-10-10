import React, { useState } from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Post = ({ data, setData }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = data.length ? data[data.length - 1].id + 1 : 1;
    const newPost = {
      id: newId,
      title: title,
      body: body,
      dateTime: format(new Date(), "MMMM dd, yyyy pp"),
    };
    setData([...data, newPost]);
    setBody("");
    setTitle("");
    navigate("/");
  };

  return (
    <>
      <section className="post">
        <h1 className="post__heading">New Post</h1>
        <form className="form__post" onSubmit={handleSubmit}>
          <label htmlFor="title" className="title">
            Title :
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="input__title"
            placeholder="enter the title"
            autoFocus
            // required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <label htmlFor="post" className="post__title">
            Post :
          </label>
          <textarea
            name="body"
            id="post"
            cols="30"
            rows="6"
            className="post__textarea"
            placeholder="enter your comments"
            // required
            onChange={(e) => setBody(e.target.value)}
            value={body}
          ></textarea>
          <button className=" btn btn--submit" type="submit">
            Submit
          </button>
        </form>
      </section>
    </>
  );
};

export default Post;
