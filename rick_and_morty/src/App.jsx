import "./App.css";
import Nav from "./components/Nav/Nav.jsx";
import Cards from "./components/Cards/Cards.jsx";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Error from "./components/Error/Error.jsx";
import Form from "./components/Form/Form.jsx";
import Favorites from "./components/favorites/favorites.jsx";
const EMAIL = "Cesar@henry.com";
const PASSWORD = "casa1234";

function App() {
  let [characters, setCharacters] = useState([]);
  const [renderedCharacterIds, setRenderedCharacterIds] = useState({});

  const onSearch = (id) => {
    if (renderedCharacterIds[id]) {
      window.alert("Este personaje ya está renderizado");
    } else {
      axios(
        `https://rym2.up.railway.app/api/character/${id}?key=pi-cesarlisarazo`
      ).then(({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
          setRenderedCharacterIds((oldIds) => ({ ...oldIds, [id]: true }));
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      });
    }
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id != id));
    setRenderedCharacterIds((oldIds) => {
      const newIds = { ...oldIds };
      delete newIds[id];
      return newIds;
    });
  };

  const clearScreen = () => {
    setCharacters([]);
    setRenderedCharacterIds({});
  };

  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    var headTextElement = document.querySelector(".headText");
    var color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    headTextElement.style.color = color;
  });
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/Home");
    } else {
      alert("Wrong credentiald");
    }
  }
  
  useEffect(() => {
    //negar para devolcer funcionalidad 
    access && navigate("/");
  }, [access]);
  const logout = () => {
    setAccess(false);
  };

  return (
    <div>
      {pathname === "/Home" ||
      pathname === "/Favorites" ||
      pathname === "/About" ||
      pathname.includes("/Detail") ? (
        <Nav onSearch={onSearch} clearScreen={clearScreen} logout={logout} />
      ) : null}

      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/Home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/About" element={<About />} />
        <Route path="/Favorites" element= {<Favorites onClose={onClose}/> }  />
        <Route path="/Detail/:id" element={<Detail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
