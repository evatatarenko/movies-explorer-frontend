import React from "react";
import { Route, Routes, NavLink, Link, useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import logoHeader from '../../images/logo__header.svg';

import "../Header/Header.css";

function Header({ loggedIn }) {
  const location = useLocation();

  return (
    (location.pathname === "/" ||
      location.pathname === "/movies" ||
      location.pathname === "/saved-movies" ||
      location.pathname === "/profile") && (
      <>
          {loggedIn ? (
            location.pathname === "/" &&
                <header className="header">
                  <Link to="/" className="header__logo"></Link>
                  <Navigation />
                </header>

          ) : (
            location.pathname === "/" &&
                <header className="header">
                  <Link to="/" className="header__logo"></Link>
                  <div className="header__container">
                    <img src={logoHeader} alt="Логотип" className="header__logo" />
                    <nav className="header__container-right">
                      <Link
                        to={"/sign-up"}
                        className={"header__link header__link_reg"}
                      >
                        {"Регистрация"}
                      </Link>
                      <Link to={"/sign-in"} className="header__link">
                        <button type="button" className="header__button">
                          Войти
                        </button>
                      </Link>
                    </nav>
                  </div>
                </header>

          )}
          {location.pathname === "/movies" && <Navigation />}
          {location.pathname === "/saved-movies" && <Navigation />}
          {location.pathname === "/profile" && <Navigation />}
      </>
    )
  );
}

export default Header;
