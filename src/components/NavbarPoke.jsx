import React from "react";
import { NavLink } from "react-router-dom";

function NavbarPoke() {
  const claseActive = ({ isActive }) => (isActive ? "active" : "unactive");
  return (
    <nav className="nav">
      <img src="../src/assets/images.png" alt="" />
      <div className="links">
        <NavLink to="/" className={claseActive}>
          Home
        </NavLink>

        <NavLink to="/pokemones" className={claseActive}>
          Pokemones
        </NavLink>
      </div>
    </nav>
  );
}

export default NavbarPoke;
