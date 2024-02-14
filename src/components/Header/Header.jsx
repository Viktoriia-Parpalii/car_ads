import React from "react";
import { Suspense } from "react";

import { NavLink, Outlet } from "react-router-dom";
import { StyledHeader, StyledNavLink } from "./Header.styled";
import Loader from "../Loader/Loader";
// import Logo from "../../images/logo.png";

const Header = () => {
  return (
    <>
      <StyledHeader>
        <NavLink className="logo" to="/">
          <img src="/src/images/logo.png" alt="logo" />
          JourneyWheels
        </NavLink>
        <nav className="nav">
          <StyledNavLink className="navLink" to="/">
            Home
          </StyledNavLink>
          <StyledNavLink className="navLink" to="/catalog">
            Catalog
          </StyledNavLink>
          <StyledNavLink className="navLink" to="/favorites">
            Favorites
          </StyledNavLink>
        </nav>
      </StyledHeader>

      <main className="container">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Header;
