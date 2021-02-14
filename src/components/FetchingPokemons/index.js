import React, { useEffect, useState } from 'react';
import usePokemon from '../../hooks/usePokemon';
import styled from 'styled-components';

const PokemonList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10em, 1fr));
  grid-gap: 1em;
  padding: 1em;
  margin: 0;
  filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.4));
  li {
    margin: 0;
  }
`;

const Pokemon = styled.li`
  position: relative;
  text-align: center;
  background-color: mintcream;
  padding: 1.5em;
  border-radius: 0.3em;
  clip-path: polygon(
    0% 0%,
    0% 0%,
    100% 0%,
    100% 0%,
    100% 100%,
    100% 100%,
    8% 100%,
    0% 92%
  );
`;

const PokemonImage = styled.div`
  position: relative;
  height: 0;
  background-color: black;
  padding-top: 100%;
  border-radius: 0.15em;
  box-shadow: inset 0 -3px 10px rgba(255, 255, 255, 0.4);

  img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
`;

const PokemonDetails = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 1em 0 0;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h3 {
      font-size: 1em;
      margin: 0;
    }

    p {
      font-size: 0.8em;
      margin: 0;
    }
  }
`;

const PokemonIndex = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2em;
  height: 2em;
  font-size: 0.8em;
  font-weight: bold;
  color: white;
  background-color: dodgerblue;
  border-radius: 100%;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  margin-right: -0.5em;
`;

const Pokemons = () => {
  const { pokemon: allPokemon } = usePokemon();

  return (
    <PokemonList>
      {allPokemon.map((pokemon, index) => {
        const { name, id, types, image } = pokemon;

        return (
          <Pokemon key={id}>
            <PokemonImage>
              <img src={image} alt={`${name} Thumbnail`} />
            </PokemonImage>
            <PokemonDetails>
              <div>
                <h3>{name}</h3>
                <p>{types.join(', ')}</p>
              </div>
              <div>
                <PokemonIndex>{index + 1}</PokemonIndex>
              </div>
            </PokemonDetails>
          </Pokemon>
        );
      })}
    </PokemonList>
  );
};

export default Pokemons;
