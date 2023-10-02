import React from "react";
import { Link, Navigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import logoMain from "../../images/logo__header.svg";

function Authorization({
  title,
  children,
  textButton,
  text,
  path,
  textLink,
  handleSubmit,
  isDisabled = false,
  errorAuth,
}) {
  const currentUser = React.useContext(CurrentUserContext);
  const isRedirect = !!Object.keys(currentUser).length;
  if (isRedirect) return <Navigate to="/" />;

  return (
    <section className="login">
      <div className="login__header">
        <Link to="/">
          <img
            src={logoMain}
            alt="Логотип пользователя"
            className="login__logo"
          />
        </Link>
        <h1 className="welcome-title welcome-title_login">{title}</h1>
      </div>
      <form className="login__form" onSubmit={handleSubmit}>
        {children}
        <button
          type="submit"
          className="login__button login__button-login"
          disabled={isDisabled}
          name="submit_btn"
          onSubmit={handleSubmit}
          value={textButton}
        >
          {textButton}
          <span className="authorization__button-error authorization__button-error_active">
            {errorAuth}
          </span>
        </button>
      </form>
      <div className="login__link-container">
        <p className="common-link common-link_grey">{text}</p>
        <Link to={path} className="common-link common-link_orange">
          {textLink}
        </Link>
      </div>
    </section>
  );
}

export default Authorization;
