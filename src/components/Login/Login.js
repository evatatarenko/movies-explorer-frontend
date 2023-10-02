import React from "react";
import Authorization from "../Authorization/Authorization";
import { useFormWithValidation } from "../../hooks/useForm";

import "../Login/Login.css";

function Login({ onLogin, isSubmitError, errorAuth, isLoading }) {
  const { values, errors, handleChange, isValid } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    if (!values.email || !values.password) {
      return;
    }
    onLogin(values);
  }

  return (
    <Authorization
      type="login"
      title="Рады видеть!"
      textButton="Войти"
      text="Ещё не зарегистрированы?"
      pathEdit="/profile"
      path="/sign-up"
      textLink="Регистрация"
      handleSubmit={handleSubmit}
      isDisabled={!isValid || isLoading}
      isSubmitError={isSubmitError}
      errorAuth={errorAuth}
    >
      <div className="login__form-input">
        <label className="login__label-text">E-mail</label>
        <input
          className="login__input-text"
          id="email-input"
          name="email"
          type="email"
          pattern="^([^ ]+@[^ ]+\.[a-z]{2,6}|)$"
          value={values.email || ""}
          onChange={handleChange}
          placeholder="E-mail"
          required
          disabled={isLoading}
        />
        <span
          className="login__error"
          id="email-input-error"
        >
          {errors.email || ""}
        </span>
      </div>
      <div className="login__form-input">
        <label className="login__label-text">Пароль</label>
        <input
          className="login__input-text"
          id="password-input"
          name="password"
          type="password"
          onChange={handleChange}
          value={values.password || ""}
          placeholder="Пароль"
          required
          disabled={isLoading}
        />
        <span
          className="login__error"
          id="password-input-error"
        >
          {errors.password || ""}
        </span>
      </div>
    </Authorization>
  );
}

export default Login;
