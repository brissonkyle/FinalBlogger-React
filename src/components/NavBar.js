import React from "react";
import "../styles/NavBar.css";

export const NavBar = () => {
  return (
    <nav className="navBar">
      <h1>Final Blogger</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create">New Blog</a>
      </div>
    </nav>
  );
};
