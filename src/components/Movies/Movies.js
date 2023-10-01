import React from "react";
import FilterCheckbox from "../Movies/SearchForm/FilterCheckbox/FilterCheckbox";
import CardList from "../Movies/CardList/CardList";
import { DURATION_SHORT_MOVIE } from "../../utils/constants";

import "../Movies/Movies.css";

function Movies({
  foundMovies,
  isChecked,
  setIsChecked,
  search,
  setSearch,
  handleSearchMovies,
  handleShortMovies,
  isLoading,
  isInfoPopupOpen,
  shortMovies,
  onMovieLike,
  onSavedMovie,
  onDeleteMovie,
  savedMovies,
  firstSearch,
}) {
  const moviesList = foundMovies?.filter((movie) => {
    if (!isChecked) return movie;
    return movie.duration <= DURATION_SHORT_MOVIE;
  }) || [];

  console.log({isChecked, foundMovies, moviesList})

  return (
    <main className="content content__movies">
      <FilterCheckbox
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        handleSearchMovies={handleSearchMovies}
        search={search}
        setSearch={setSearch}
        handleShortMovies={handleShortMovies}
      ></FilterCheckbox>
      <CardList
        moviesList={moviesList}
        onMovieLike={onMovieLike}
        isLoading={isLoading}
        isChecked={isChecked}
        isInfoPopupOpen={isInfoPopupOpen}
        onSavedMovie={onSavedMovie}
        onDeleteMovie={onDeleteMovie}
        savedMovies={savedMovies}
        firstSearch={firstSearch}
      />
    </main>
  );
}

export default Movies;
