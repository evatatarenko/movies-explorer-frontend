import React from "react";
import SearchForm from "../SearchForm";

import "../FilterCheckbox/FilterCheckbox.css";

function FilterCheckbox({
  isChecked,
  setIsChecked,
  search,
  setSearch,
  handleGetSavedMovies,
  handleGetMovies,
  savedMovies
}) {
  function handleChangeCheckbox() {
    setIsChecked(!isChecked);
  }

  return (
    <SearchForm
      search={search}
      setSearch={setSearch}
      handleGetSavedMovies={handleGetSavedMovies}
      handleGetMovies={handleGetMovies}
      isChecked={isChecked}
      savedMovies={savedMovies}
    >
      <div className="filterCheckbox">
        <input
          type="checkbox"
          className="searchForm__item-switch"
          name="switch"
          id="switch"
          checked={isChecked}
          onChange={handleChangeCheckbox}
        />
        <p className="filterCheckbox__title">Короткометражки</p>
      </div>
    </SearchForm>
  );
}

export default FilterCheckbox;
