import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "../Navigation/Navigation.css";
import logoHeader from '../../images/logo__header.svg'; 
import profileButton from '../../images/profile.svg'; 

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      <div className="headerAuthorised headerAuthorised_white">
        <div className="headerAuthorised__container">
          <Link to={"/"}>
            <img
              src={logoHeader}
              alt="Логотип"
              className="headerAuthorised__logo"
            />
          </Link>
          <nav className="headerAuthorised__container-middle">
            <Link to={"/movies"} className={"headerAuthorised__link "}>
              {"Фильмы"}
            </Link>
            <Link to={"/saved-movies"} className={"headerAuthorised__link "}>
              Сохранённые фильмы
            </Link>
            <Link to={"/profile"}>
              <img
                src={profileButton}
                alt="Аккаунт"
                className="headerAuthorised__button"
              />
            </Link>
          </nav>
          <button
            type="button"
            className="headerAuthorised__nav-mobile"
            onClick={() => setIsMenuOpen(false)}
          >
            <img
              // src={iconMenu}
              alt="Иконка меню"
              className="headerAuthorised__icon-menu"
            />
          </button>
        </div>
      </div>
      <div>{isMenuOpen && <Sidebar setIsMenuOpen={setIsMenuOpen} />}</div>
    </>
  );
}

export default Navigation;
