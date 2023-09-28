import React from "react";
import SearchForm from "../SearchForm";

import "../FilterCheckbox/FilterCheckbox.css";

function FilterCheckbox({
  isChecked,
  setIsChecked,
  search,
  setSearch,
  handleSearchMovies,
  handleShortMovies,
}) {
  function handleChangeCheckbox() {
    setIsChecked(!isChecked);
    handleShortMovies();
  }

  return (
    <SearchForm
      handleSearchMovies={handleSearchMovies}
      search={search}
      setSearch={setSearch}
      isChecked={isChecked}
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
