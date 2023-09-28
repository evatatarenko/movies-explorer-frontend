import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../../hooks/useForm";

import "../Profile/Profile.css";

function Profile({ onUpdateUser, errorAuth, handleSignout }) {
  const currentUser = React.useContext(CurrentUserContext);
  const { values, errors, handleChange, isValid, setIsValid, resetForm } =
    useFormWithValidation();

  const [isDisabled, setIsDisabled] = useState(false);

  React.useEffect(() => {
    if (currentUser) {
      resetForm(currentUser, {}, true);
    }
  }, [currentUser, resetForm]);

  function handleSubmit(e) {
    e.preventDefault();
    if (
      values.name === currentUser.name &&
      values.email === currentUser.email
    ) {
      setIsDisabled(true);
      setIsValid(false);
    } else {
      onUpdateUser({ name: values.name, email: values.email });
    }
  }

  function onEditDataUser(e) {
    e.preventDefault();
    setIsDisabled(!isDisabled);
  }

  return (
    <section className="profile">
      <h2 className="welcome-title">Привет, {currentUser.name}!</h2>
      <form
        className="profile__form"
        name="authorization-form"
        onSubmit={handleSubmit}
      >
        <div className="profile__form-input profile__form-input_border">
          <span className="profile__form-text">Имя</span>
          <input
            className="profile__form-text profile__form-text_input"
            id="name-input"
            name="name"
            type="text"
            onChange={handleChange}
            value={values.name || ""}
            minLength="2"
            maxLength="30"
            pattern="[A-Za-zА-Яа-яЁё\- ]{1,}"
            placeholder="Имя"
            disabled={!isDisabled}
            required
          />
          <span
            className="login__error"
            id="name-input-error"
          >
            {errors.name || ""}
          </span>
        </div>
        <div className="profile__form-input">
          <span className="profile__form-text">E-mail</span>
          <input
            className="profile__form-text profile__form-text_input"
            id="email-input"
            name="email"
            type="email"
            pattern="^([^ ]+@[^ ]+\.[a-z]{2,6}|)$"
            value={values.email || ""}
            onChange={handleChange}
            disabled={!isDisabled}
            placeholder="E-mail"
            required
          />
          <span
            className="login__error"
            id="email-input-error"
          >
            {errors.email || ""}
          </span>
        </div>
      </form>
      <div className="profile__button-container">
        <button className="common-link" onClick={onEditDataUser}>
          Редактировать
        </button>
        {isDisabled ? (
          <button
            type="submit"
            className="common-link common-link_red"
            disabled={!isValid}
            name="submit_btn"
            value="Сохранить"
            onSubmit={handleSubmit}
          >
            Сохранить
            <span className="authorization__button-error authorization__button-error_active">
              {errorAuth}
            </span>
          </button>
        ) : (
          ""
        )}
        <Link
          to="/sign-in"
          className="common-link common-link_red"
          onClick={handleSignout}
        >
          Выйти из аккаунта
        </Link>
      </div>
    </section>
  );
}

export default Profile;
