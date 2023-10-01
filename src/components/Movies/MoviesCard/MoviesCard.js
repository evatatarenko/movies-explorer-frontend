import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MOVIE_IMAGE_PATH, HOUR } from "../../../utils/constants";

import "../MoviesCard/MoviesCard.css";

function MoviesCard({
  movie,
  onSavedMovie,
  onDeleteMovie,
  isShowLikeBtn = true,
  isShowDeleteBtn = false,
  savedMovies,
}) {
  const location = useLocation();
  const [isLikedMovie, setIsLikeMovie] = useState(false);
  const movieLikeButton = `moviesCard__saved ${
    isLikedMovie && "moviesCard__heart-button-active"
  }`;
  const savedUserMovie = savedMovies?.find((i) => i.nameRU === movie.nameRU);
  const hours = Math.floor(movie.duration / HOUR);
  const minutes = Math.floor(movie.duration % HOUR);

  useEffect(() => {
    if (savedUserMovie) {
      setIsLikeMovie(true);
    }
  }, [location]);

  function handleLikeMovie() {
    onSavedMovie(movie);
    setIsLikeMovie(!isLikedMovie);
  }

  function handleRemoveLike() {
    onDeleteMovie(savedUserMovie._id);
    setIsLikeMovie(false);
  }

  function handleDeleteMovie() {
    onDeleteMovie(movie._id);
    setIsLikeMovie(false);
  }

  return (
    <article className="moviesCard">
      <a href={movie.trailerLink} target="_blank" rel="noopener noreferrer">
        <img
          src={
            movie.image.url ? MOVIE_IMAGE_PATH + movie.image.url : movie.image
          }
          alt={movie.nameRU}
          className="moviesCard__image"
        />
      </a>
      <div className="moviesCard__title-block">
        <div className="moviesCard__likes">
          <h2 className="moviesCard__title">{movie.nameRU}</h2>
          {isShowLikeBtn && (
            <button
              type="button"
              className={movieLikeButton}
              aria-label="Отметить фильм."
              onClick={!isLikedMovie ? handleLikeMovie : handleRemoveLike}
            ></button>
          )}
          {isShowDeleteBtn && (
            <button
              type="button"
              className="moviesCard__close-button"
              aria-label="Отметить фильм."
              onClick={handleDeleteMovie}
            ></button>
          )}
        </div>
        <p className="moviesCard__subtitle">
          {hours}ч {minutes}м
        </p>
      </div>
    </article>
  );
}

export default MoviesCard;
