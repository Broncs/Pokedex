import { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  PokemonImage,
  PokemonDetails,
  PokemonIndex,
  typesColors,
} from '../FetchingPokemons';
import Header from '../Header';
import data from '../../data';
import Tabs from '../Tabs';

const PokemonSingleDetails = styled(PokemonDetails)`
  .type-wrapper {
    width: 100%;
  }
`;

const SinglePokemonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 20px;
  margin: 20px 0;

  @media (max-width: 600px) {
    margin: 50px 0;
  } ;
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

    const { id, name, types, sprites, stats, weight, height } = json;

    const obj = {
      id,
      name,
      types: types.map((type) => type.type.name),
      image: sprites.front_default,
      stats: stats.map((item) => item.base_stat),
      weight,
      height,
    };

    setSinglePokemon(obj);
  };

  useEffect(() => {
    if (pokemonName) {
      fetchPokemons({ pokemonName });
    }
  }, []);

  const { name, id, types, image, stats, weight, height } = singlePokemon;

  return (
    <>
      <Header />
      <SinglePokemonWrapper>
        <Pokemon>
          <PokemonImageBig>
            <img src={image} alt={`${name} Thumbnail`} />
          </PokemonImageBig>
          <PokemonSingleDetails typesColors={typesColors}>
            <div className="type-wrapper">
              <h2>{name}</h2>
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
                <Tabs
                  data={data}
                  stats={stats}
                  pokemonName={name}
                  weight={weight}
                  height={height}
                />
              )}
            </div>
            <div>
              <PokemonIndex>{id}</PokemonIndex>
            </div>
          </PokemonSingleDetails>
        </Pokemon>
      </SinglePokemonWrapper>
    </>
  );
};

export default index;
