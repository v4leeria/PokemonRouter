import React, { useState, useEffect } from "react";

function PokemonList({ onSelect }) {
  const [pokemonNombres, setPokemonNombres] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const respuesta = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=20"
        );
        const data = await respuesta.json();
        const nombres = data.results.map((pokemon) => pokemon.name);
        setPokemonNombres(nombres);
      } catch (error) {
        console.error("No se pudo acceder a la lista", error);
      }
    };

    fetchData();
  }, []);

  return (
    <select onChange={onSelect} className="select">
      <option value="">Selecciona un Pokemon</option>
      {pokemonNombres.map((name, index) => (
        <option key={index} value={name}>
          {name}
        </option>
      ))}
    </select>
  );
}

export default PokemonList;
