import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-6 px-4 shadow-lg">
        <Logo></Logo>
      <nav>
        <ul className="flex gap-5">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-400 underline" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favourites"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-400 underline" : ""
              }
            >
              Favourites
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-400 underline" : ""
              }
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
