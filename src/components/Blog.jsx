import React, { useEffect, useState } from "react";
import SingleBlog from "./SingleBlog.jsx";

const Blog = ({ data, setData }) => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState("");
  // console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
  };

  useEffect(() => {
    const result = data.filter(
      (item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.body.toLowerCase().includes(search.toLowerCase())
    );
    // setData(result);
    setSearchResult(result.reverse());
  }, [search, data]);

  return (
    <main>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="search">
          <input
            type="text"
            name="search"
            id="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="search blog"
            className="search__input"
            autoFocus
            required
          />
        </label>
      </form>
      <section className="blog__data">
        {searchResult.length ? (
          searchResult.map((item) => <SingleBlog {...item} key={item.id} />)
        ) : (
          <h1>No match found</h1>
        )}
      </section>
    </main>
  );
};

export default Blog;
