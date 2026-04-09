import React from "react";
import logoNetflix from "../assets/logoNetflix.jpg";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Link to="/">
        <img src={logoNetflix} style={{ height: "15rem" }}></img>
      </Link>
    </div>
  );
};
