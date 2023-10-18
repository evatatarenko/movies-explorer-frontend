import React from "react";

import "../SearchForm/SearchForm.css";

function SearchForm({
  search,
  setSearch,
  children,
  handleGetSavedMovies,
  handleGetMovies,
  savedMovies,
}) {
  const [errors, setErrors] = React.useState({});
  const [val, setVal] = React.useState("");

  React.useEffect(() => {
    if (search) {
      setVal(search);
    }
  }, [search]);

  const handleFormSubmit = async (evt) => {
    evt.preventDefault();
    if (!savedMovies?.length) {
      await handleGetSavedMovies();
      if (handleGetMovies) await handleGetMovies();
      setSearch(val);
    } else {
      setSearch(val);
    }
  };

  const handleInputChange = (evt) => {
    const target = evt.target;
    const name = target.name;
    setVal(evt.target.value);
    setErrors({ ...errors, [name]: target.validationMessage });
  };

  return (
    <section className="searchForm">
      <form className="searchForm__form" onSubmit={handleFormSubmit} noValidate>
        <fieldset className="searchForm__input-form">
          <input
            className="searchForm__input"
            id="searchForm-input"
            type="text"
            name="search"
            minLength="1"
            value={val || ""}
            onChange={handleInputChange}
            placeholder="Фильм"
            required
          />

          <button
            className="searchForm__button-sbt"
            type="submit"
            name="submit_btn"
            value="Поиск"
            onSubmit={handleFormSubmit}
          ></button>
        </fieldset>
        <div className="searchForm__error" id="name-input-error">
          {errors.search || ""}
        </div>
        {children}
      </form>
    </section>
  );
}

export default SearchForm;
