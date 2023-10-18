import React, { useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../../hooks/useForm";

import "../Profile/Profile.css";

function Profile({ onUpdateUser, errorAuth, handleSignout }) {
  const currentUser = React.useContext(CurrentUserContext);
  const { values, errors, handleChange, isValid, resetForm } =
    useFormWithValidation();

  const [isDisabled, setIsDisabled] = useState(true);
  const [isChanged, setIsChanged] =useState(values.name !== currentUser.name || values.email !== currentUser.email);
    // values.name !== currentUser.name || values.email !== currentUser.email;

  React.useEffect(() => {
    console.log({ currentUser });
    if (currentUser) {
      resetForm(currentUser, {}, true);
    }
  }, [currentUser, resetForm]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submit");
    onUpdateUser({ name: values.name, email: values.email });
  }

  function onEditDataUser(e) {
    e.preventDefault();
    setIsDisabled(!isDisabled);
  }

  function handleLocalChange (e) {
    handleChange(e);
    setIsChanged(values.name !== currentUser.name || values.email !== currentUser.email);
    isChanged ? setIsDisabled(false) : setIsDisabled(true)
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
            onChange={handleLocalChange}
            value={values.name || ""}
            minLength="2"
            maxLength="30"
            pattern="[A-Za-zА-Яа-яЁё\- ]{1,}"
            placeholder="Имя"
            // disabled={!isDisabled}
            required
          />
          <span className="login__error" id="name-input-error">
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
            onChange={handleLocalChange}
            // disabled={!isDisabled}
            placeholder="E-mail"
            required
          />
          <span className="login__error" id="email-input-error">
            {errors.email || ""}
          </span>
        </div>
      </form>
      <span className="authorization__button-error authorization__button-error_active">
        {errorAuth}
      </span>
      <div className="profile__button-container">
        <button className="common-link" type="submit" onClick={handleSubmit} disabled={!isValid || isDisabled}>
          Редактировать
        </button>
        {/* {isDisabled && (
          <button
            type="submit"
            className="common-link common-link_red"
            // Кнопка блочится если поля не валидны
            disabled={!isValid || !isChanged}
            name="submit_btn"
            value="Сохранить"
            onClick={handleSubmit}
          >
            Сохранить
          </button>
        )} */}
        <button className="common-link common-link_red" onClick={handleSignout}>
          Выйти из аккаунта
        </button>
      </div>
    </section>
  );
}

export default Profile;
