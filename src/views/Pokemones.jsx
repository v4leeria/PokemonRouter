import React from "react";
import { useNavigate } from "react-router-dom";
import PokemonList from "../components/PokemonList";
function Pokemones() {
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    const selectedName = event.target.value;
    navigate(`/pokemon/${selectedName}`);
  };

  return (
    <div>
      <h1>Pokemones</h1>
      <p>¿Cuál es tu pokemon favorito?</p>
      <PokemonList onSelect={handleSelectChange} />
    </div>
  );
}

export default Pokemones;
