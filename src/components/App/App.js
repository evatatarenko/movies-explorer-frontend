import React, { useState, useEffect, useCallback } from "react";
import "../App/App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import PageNotFound from "../PageNotFound/PageNotFound";
import api from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";
import * as auth from "../../utils/auth";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import PopupWithMessage from "../PopupWithMessage/PopupWithMessage";
import PopupWithInfoWin from "../PopupWithInfo/PopupWithInfoWin/PopupWithInfoWin";
import ProtectedRoute from "../ProtectedRoute";
import Preloader from "../Movies/Preloader/Preloader";
import { DURATION_SHORT_MOVIE } from "../../utils/constants";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [allMovies, setAllMovies] = useState([]);
  const [foundMovies, setFoundMovies] = useState(null);
  const [shortMovies, setShortMovies] = useState(null);
  const [savedMovies, setSavedMovies] = useState(null);
  const [loggedIn, setLoggedIn] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [search, setSearch] = useState("");
  const [firstSearch, setFirstSearch] = useState(false);
  const [isInfoPopupOpen, setIsInfoPopupOpen] = useState(false);
  const [errorAuth, setErrorAuth] = useState("");
  const [isInfoPopupWinOpen, setIsInfoPopupWinOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    handleTokenCheck();
  }, []);

  useEffect(() => {
    if (loggedIn) handleGetUserMovies();
  }, [loggedIn]);

  const saveData = useCallback(() => {
    localStorage.setItem("movies", JSON.stringify(foundMovies));
    localStorage.setItem("search", JSON.stringify(search));
    localStorage.setItem("isChecked", JSON.stringify(isChecked));

    search === "" ? setFirstSearch(false) : setFirstSearch(true);
  }, [foundMovies, search, isChecked]);

  useEffect(() => {
    window.addEventListener("beforeunload", saveData);

    // Здесь не нужно очищать listener, так как beforeunload вызывается перед закрытием страницы
    // Если мы попробуем очистить будет баг
    // return window.removeEventListener("beforeunload", saveData);
  }, [saveData]);

  function handleLogin({ email, password }) {
    setIsLoading(true);
    auth
      .authorize(email, password)
      .then((data) => {
        if (data) {
          localStorage.setItem("jwt", data.token);
          setLoggedIn(true);
          navigate("/movies");
        }
      })
      .catch((err) => {
        if (err === "Ошибка: 401") {
          setErrorAuth("Вы ввели неправильный логин или пароль.");
        } else if (err === "Ошибка: 400") {
          setErrorAuth("При авторизации произошла ошибка");
        } else if (err === "Ошибка: 500") {
          setErrorAuth("На сервере произошла ошибка.");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleRegister({ name, email, password }) {
    setIsLoading(true);
    auth
      .register(name, email, password)
      .then((res) => {
        handleLogin({ email, password });
      })
      .catch((err) => {
        if (err === "Ошибка: 409") {
          setErrorAuth("Пользователь с таким email уже существует.");
        } else if (err === "Ошибка: 400") {
          setErrorAuth("При регистрации пользователя произошла ошибка.");
        } else if (err === "Ошибка: 500") {
          setErrorAuth("На сервере произошла ошибка.");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const handleTokenCheck = useCallback(() => {
    const token = localStorage.getItem("jwt");

    if (token) {
      auth
        .checkToken(token)
        .then((res) => {
          setLoggedIn(true);
        })
        .catch((err) => {
          handleSignout();
        });
    } else {
      handleSignout();
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (loggedIn) {
      mainApi
        .getUserIfnoApi(token)
        .then((res) => {
          setCurrentUser(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [setCurrentUser, loggedIn]);

  function handleUpdateUser(name, email) {
    setIsLoading(true);
    mainApi
      .sendUserIfno(name, email, localStorage.getItem("jwt"))
      .then((res) => {
        setCurrentUser(res.data);
        setIsLoading(false);
        setIsInfoPopupWinOpen(true);
      })
      .catch((err) => {
        console.log(err);
        if (err === "Ошибка: 409") {
          setErrorAuth("Пользователь с таким email уже существует.");
        } else if (err === "Ошибка: 400") {
          setErrorAuth("При обновлении профиля произошла ошибка.");
        } else if (err === "Ошибка: 500") {
          setErrorAuth("На сервере произошла ошибка.");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleGetMovies() {
    setIsLoading(true);
    return api
      .getAllMovies()
      .then((res) => {
        setAllMovies(res);
        const foundUserMovies = res.filter((movie) => {
          return movie.nameRU.toLowerCase().includes(search.toLowerCase());
        });
        if (foundUserMovies.length) {
          setFoundMovies(foundUserMovies);
        } else {
          setFoundMovies(null);
          setAllMovies(allMovies);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsInfoPopupOpen(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleGetUserMovies() {
    const searchUserMovies = localStorage.getItem("search");
    if (searchUserMovies) {
      const searchMovies = JSON.parse(searchUserMovies);
      setSearch(searchMovies);
    }
    const checkedMovies = localStorage.getItem("isChecked");
    if (checkedMovies) {
      const checkedUserMovies = JSON.parse(checkedMovies);
      setIsChecked(checkedUserMovies);
    }
  }

  function handleCetShortMovies() {
    if (foundMovies?.length) {
      const foundShortMovies = foundMovies.filter((movie) => {
        return movie.duration <= DURATION_SHORT_MOVIE;
      });
      if (foundShortMovies.length >= 1) {
        setShortMovies(foundShortMovies);
        localStorage.setItem("shortMovies", JSON.stringify(foundShortMovies));
      } else {
        setFoundMovies(null);
      }
    }
  }

  useEffect(() => {
    handleGetUserShortMovies();
  }, []);

  function handleGetUserShortMovies() {
    const moviesShortJSON = localStorage.getItem("shortMovies");
    if (moviesShortJSON) {
      const foundUserShortMovies = JSON.parse(moviesShortJSON);
      setShortMovies(foundUserShortMovies);
    }
  }

  function handleGetSavedMovies() {
    if (loggedIn) {
      const token = localStorage.getItem("jwt");
      return mainApi.getSavedMovies(token).then((res) => {
        setSavedMovies(res);
        return res;
      });
    }
  }

  function handleSaveMovie(movie) {
    const token = localStorage.getItem("jwt");
    return mainApi.savedMovies(movie, token).then(() => {
      const getSavedMovies = [...savedMovies];
      setSavedMovies(getSavedMovies);
    });
  }

  function handleDeleteMovie(id) {
    const token = localStorage.getItem("jwt");
    return mainApi.deleteCard(id, token).then(() => {
      const getSavedMovies = savedMovies.filter((c) => {
        return (c.id || c._id) !== id;
      });
      setSavedMovies(getSavedMovies);
    });
  }

  function closePopup() {
    setIsInfoPopupWinOpen(false);
  }

  function handleSignout() {
    setLoggedIn(false);
    setCurrentUser({});
    localStorage.clear();
    navigate("/");
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App-page">
        <Header loggedIn={loggedIn} />
        <Preloader isLoading={isLoading} />
        <Routes>
          <Route
            path="/sign-up"
            element={
              <Register
                onRegister={handleRegister}
                isLoggedIn={loggedIn}
                errorAuth={errorAuth}
                setErrorAuth={setErrorAuth}
                isLoading={isLoading}
              />
            }
          />
          <Route
            path="/sign-in"
            element={
              <Login
                onLogin={handleLogin}
                isLoggedIn={loggedIn}
                errorAuth={errorAuth}
                setErrorAuth={setErrorAuth}
                isLoading={isLoading}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                element={Profile}
                onUpdateUser={handleUpdateUser}
                loggedIn={loggedIn}
                handleSignout={handleSignout}
                errorAuth={errorAuth}
              />
            }
          />
          <Route path="/" element={<Main />} />
          <Route
            path="/movies"
            element={
              <ProtectedRoute
                element={Movies}
                loggedIn={loggedIn}
                shortMovies={shortMovies}
                allMovies={allMovies}
                handleGetMovies={handleGetMovies}
                handleGetSavedMovies={handleGetSavedMovies}
                search={search}
                setSearch={setSearch}
                isChecked={isChecked}
                savedMovies={savedMovies}
                setIsChecked={setIsChecked}
                isLoading={isLoading}
                isInfoPopupOpen={isInfoPopupOpen}
                handleShortMovies={handleCetShortMovies}
                onSavedMovie={handleSaveMovie}
                onDeleteMovie={handleDeleteMovie}
                firstSearch={firstSearch}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                element={SavedMovies}
                loggedIn={loggedIn}
                savedMovies={savedMovies}
                setSavedMovies={setSavedMovies}
                isInfoPopupOpen={isInfoPopupOpen}
                onSavedMovie={handleSaveMovie}
                onDeleteMovie={handleDeleteMovie}
                handleGetSavedMovies={handleGetSavedMovies}
              />
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
        <PopupWithMessage
          isOpen={isInfoPopupOpen}
          message="Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз."
        />
        <PopupWithInfoWin isOpen={isInfoPopupWinOpen} onClose={closePopup} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
