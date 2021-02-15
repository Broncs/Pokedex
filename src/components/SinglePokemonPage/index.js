import { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  PokemonImage,
  PokemonDetails,
  PokemonIndex,
  typesColors,
} from '../FetchingPokemons';

const SinglePokemonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Pokemon = styled.div`
  position: relative;
  width: 400px;
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

const PokemonImageBig = styled(PokemonImage)`
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: 50% 50%;
  }
`;

const index = ({ pokemonName }) => {
  const [singlePokemon, setSinglePokemon] = useState([]);

  const fetchPokemons = async ({ pokemonName }) => {
    const data = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    const json = await data.json();

    const { id, name, types, sprites, stats } = json;
    const obj = {
      id,
      name,
      types: types.map((type) => type.type.name),
      image: sprites.front_default,
      stats: stats.map((item) => item.base_stat),
    };

    setSinglePokemon(obj);
  };

  useEffect(() => {
    if (pokemonName) {
      fetchPokemons({ pokemonName });
    }
  }, []);

  const { name, id, types, image, stats } = singlePokemon;

  return (
    <SinglePokemonWrapper>
      <Pokemon>
        <PokemonImageBig>
          <img src={image} alt={`${name} Thumbnail`} />
        </PokemonImageBig>
        <PokemonDetails typesColors={typesColors}>
          <div className="type-wrapper">
            <h3>{name}</h3>
            <p>
              {types &&
                types.map((type, index) => {
                  return (
                    <span key={index} className={`type ${type}`}>
                      {type}
                    </span>
                  );
                })}
            </p>
            {stats && (
              <ul>
                <li>HP {stats[0]}</li>
                <li>Attack {stats[1]}</li>
                <li>Defense {stats[2]}</li>
                <li>Sp. Atk {stats[3]}</li>
                <li>Sp. Def {stats[4]}</li>
                <li>Speed {stats[5]}</li>
                <li>Total {stats.reduce((acc, curr) => acc + curr, 0)}</li>
              </ul>
            )}
          </div>
          <div>
            <PokemonIndex>{id}</PokemonIndex>
          </div>
        </PokemonDetails>
      </Pokemon>
    </SinglePokemonWrapper>
  );
};

export default index;
