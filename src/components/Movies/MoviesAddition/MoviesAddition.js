import React from "react";

import "../MoviesAddition/MoviesAddition.css";

function MoviesAddition({ handleAddMovies }) {
  return (
    <div className="more">
      <button type="button" className="more__button" onClick={handleAddMovies}>
        Еще
      </button>
    </div>
  );
}

export default MoviesAddition;
