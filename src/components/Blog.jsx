import React from "react";
import SingleBlog from "./SingleBlog.jsx";

const Blog = ({ data }) => {
  // console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
  };

  return (
    <main>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="search">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="search blog"
            className="search__input"
            autoFocus
            required
          />
        </label>
      </form>
      <section className="blog__data">
        {data.map((item) => (
          <SingleBlog {...item} key={item.id} />
        ))}
      </section>
    </main>
  );
};

export default Blog;
