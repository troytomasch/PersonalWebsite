import React, { useEffect, useState } from "react";
import Header from "../organisms/Header";
import TitleText from "../atoms/TitleText";
import Footer from "../organisms/Footer";
import BorderedPicture from "../atoms/BorderedPicture";
import HeaderText from "../atoms/HeaderText";
import SubheaderText from "../atoms/SubheaderText";

// Page shows a random pokemon using fetch with async and await
const Pokemon = () => {
  // State variable with the pokemon
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    document.title = "Pokemon | Troy Tomasch";
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
        <BorderedPicture
          imagePath={pokemon.sprites.front_default}
          size={"h-40 w-40"}
          alt={pokemon.name}
        />
      </div>
    );
  }

  return (
    <div>
      <Header />

      <div className={"m-5 flex gap-7 flex-col"}>
        <TitleText text="Displays a random pokemon" />
        {pokemonCard}
      </div>

      <Footer />
    </div>
  );
};

export default Pokemon;
