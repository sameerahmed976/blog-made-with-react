import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Blog from "./components/Blog";
import ErrorPage from "./components/ErrorPage";
import Layout from "./components/Layout";
import Post from "./components/Post";
import "./css/style.css";

const App = () => {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Blog />} />
              <Route path="/post" element={<Post />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
