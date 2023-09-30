import { MOVIE_IMAGE_PATH } from "../utils/constants";

class MainApi {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  _checkingResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }

  getSavedMovies = (token) => {
    return fetch(this._url, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`, // Добавляем заголовок авторизации
      },
    }).then((res) => {
      return this._checkingResponse(res);
    });
  };

  getUserIfnoApi = (token) => {
    return fetch(this._url + "/users/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`, // Добавляем заголовок авторизации
      },
    }).then((res) => {
      return this._checkingResponse(res);
    });
  };

  sendUserIfno = (name, email) => {
    return fetch(this._url + "/users/me", {
      method: "PATCH",
      body: JSON.stringify(name, email),
    }).then((res) => {
      return this._checkingResponse(res);
    });
  };

  deleteCard = (_id) => {
    return fetch(this._url + _id, {
      method: "DELETE",
    }).then((res) => {
      return this._checkingResponse(res);
    });
  };

  savedMovies = (movie, token) => {
    return fetch(this._url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`, // Добавляем заголовок авторизации
      },
      credentials: "include",
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: MOVIE_IMAGE_PATH + movie.image.url,
        trailerLink: movie.trailerLink,
        thumbnail: MOVIE_IMAGE_PATH + movie.image.url,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      }),
    }).then((res) => {
      return this._checkingResponse(res);
    });
  };
}

const mainApi = new MainApi({
  url: "https://api.tatarenko-diploma.nomoredomainsicu.ru",
});

export default mainApi;
