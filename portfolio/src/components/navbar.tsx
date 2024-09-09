import React, { useState } from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-custom-dark-blue rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a href="/">Sobre</a>
            </li>
            <li>
              <a href="/">Projetos</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-custom-green" href="/">
          Willian Costa
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/#sobre">Sobre</a>
          </li>
          <li>
            <a href="/#projetos">Projetos</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
