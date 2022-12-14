import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <h2 className="logo">React Javascript Blog</h2>
          <ul className="nav__links">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active active__link" : " link"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/post"
                className={({ isActive }) =>
                  isActive ? "active active__link" : "link"
                }
              >
                Post
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "active active__link" : "link"
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
