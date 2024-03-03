import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import NavbarPoke from "./components/NavbarPoke";
import PokemonDetail from "./components/PokemonesDetail";
import Pokemones from "./views/Pokemones";

function App() {
  return (
    <Router>
      <NavbarPoke />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemones" element={<Pokemones />} />
        <Route path="/pokemon/:name" element={<PokemonDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
