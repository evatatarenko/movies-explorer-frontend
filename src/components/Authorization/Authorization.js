import React from "react";
import { Link } from "react-router-dom";

function Authorization({
  type,
  title,
  children,
  textButton,
  text,
  pathEdit,
  path,
  linkEdit,
  textLink,
  onClick,
  onSubmit,
  isDisabled = false,
  errorAuth,
}) {
  console.log({ type });
  return (
    <section className="login">
      <div className="login__header">
        <Link to="/">
          <img alt="Логотип пользователя" className="login__logo" />
        </Link>
        <h1 className="welcome-title welcome-title_login">{title}</h1>
      </div>
      <form className="login__form" onSubmit={onSubmit}>
        {children}
        <button
          type="submit"
          className="login__button login__button-login"
          disabled={isDisabled}
          name="submit_btn"
          onSubmit={onSubmit}
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
