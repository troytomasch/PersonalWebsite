import React, { useEffect, useState } from "react";
import Header from "../organisms/Header";
import TitleText from "../atoms/TitleText";
import Footer from "../organisms/Footer";
import HeaderText from "../atoms/HeaderText";
import SubheaderText from "../atoms/SubheaderText";

// Page shows a random pokemon using fetch with async and await
const Pokemon = () => {
  // State variable with the pokemon
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    document.title = "pokemon | Troy Tomasch";
  }, []);

  // useEffect to make pokemon api call
  useEffect(() => {
    const getPokemon = async () => {
      const randomNum = Math.floor(Math.random() * 100);
      const url = `https://pokeapi.co/api/v2/pokemon/${randomNum}/`;
      const response = await fetch(url);
      const data = await response.json();
      setPokemon(data);
    };

    getPokemon();
  }, []);

  // Loading text
  let pokemonCard = (
    <div className={"flex flex-col items-center gap-2"}>
      <SubheaderText text={"Loading..."} />
    </div>
  );

  // Once pokemon has been retrieved, set the pokemon card
  if (pokemon) {
    pokemonCard = (
      <div className={"flex flex-col items-center gap-2"}>
        <HeaderText text={pokemon.name} />
        <img
          src={pokemon.sprites.front_default}
          className="h-40 w-40 animate-bounce hover:pause"
          alt={pokemon.name}
        />
      </div>
    );
  }

  return (
    <div className="m-10">
      <Header />

      <div className={"m-5 flex gap-7 flex-col"}>
        <div className="flex flex-row justify-between items-center">
          <div className="p-2 flex gap-2 flex-col">
            <TitleText text="Displays a random pokemon" />
            <SubheaderText text="Hover over it to stop it" />
          </div>
          <img
            className="w-20 h-20 animate-spin-slow"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/master-ball.png"
            alt="Pokeball"
          ></img>
        </div>
        {pokemonCard}
      </div>

      <Footer />
    </div>
  );
};

export default Pokemon;
