import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Blog from "./components/Blog";
import ErrorPage from "./components/ErrorPage";
import Layout from "./components/Layout";
import Post from "./components/Post";
import SinglePost from "./components/SinglePost";
import "./css/style.css";
import dataBlock from "../data/db.js";
import Footer from "./components/Footer";

const App = () => {
  const [data, setData] = useState(dataBlock);
  console.log(data);
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Blog data={data} setData={setData} />} />
              <Route
                path="/post"
                element={<Post data={data} setData={setData} />}
              />
              <Route path="/about" element={<About />} />
              <Route
                path="/:id"
                element={<SinglePost data={data} setData={setData} />}
              />
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  );
};

export default App;
