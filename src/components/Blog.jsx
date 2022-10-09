import React from "react";

const Blog = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
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
    </main>
  );
};

export default Blog;
