import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function PokemonDetail() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        const data = await response.json();
        const { stats } = data;

        const attack = stats.find(
          (stat) => stat.stat.name === "attack"
        ).base_stat;
        const hp = stats.find((stat) => stat.stat.name === "hp").base_stat;
        const defense = stats.find(
          (stat) => stat.stat.name === "defense"
        ).base_stat;
        const specialAttack = stats.find(
          (stat) => stat.stat.name === "special-attack"
        ).base_stat;
        const specialDefense = stats.find(
          (stat) => stat.stat.name === "special-defense"
        ).base_stat;
        const speed = stats.find(
          (stat) => stat.stat.name === "speed"
        ).base_stat;

        setPokemon({
          name,
          hp,
          attack,
          speed,
          defense,
          specialAttack,
          specialDefense,
          image: data.sprites.other["official-artwork"].front_default,
        });
      } catch (error) {
        console.error("No se obtuvieron datos", error);
      }
    };

    fetchData();
  }, [name]);

  if (!pokemon) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="card">
      <img src={pokemon.image} alt={pokemon.name} />
      <div>
        <h1>{pokemon.name}</h1>
        <ul>
          <li>HP: {pokemon.hp}</li>
          <li>Ataque: {pokemon.attack}</li>
          <li>Defensa: {pokemon.defense}</li>
          <li>Special-Attack: {pokemon.specialAttack}</li>
          <li>Special-Defense: {pokemon.specialDefense}</li>
          <li>Speed: {pokemon.speed}</li>
        </ul>
      </div>
    </div>
  );
}

export default PokemonDetail;
