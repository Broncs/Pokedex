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
import Link from 'next/link';
import { IoChevronBack } from 'react-icons/io5';

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
  margin-top: 20px;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: 50% 50%;
    animation: taadaa 1.3s ease-in-out;
  }
  @keyframes taadaa {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;
const RedLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 5px;
  left: 10px;
  text-decoration: none;
  width: 3em;
  height: 3em;

  font-size: 0.7em;
  font-weight: bold;
  color: white;
  background-color: dodgerblue;
  border-radius: 100%;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`;
const Dot = styled.div`
  position: absolute;
  top: 11px;
  left: 50px;
  .dot {
    height: 10px;
    width: 10px;
    background-color: red;
    display: inline-block;
    border-radius: 50%;
    margin: 5px;
    border: 1px solid black;
  }

  .dot-2 {
    background-color: yellow;
  }
  .dot-3 {
    background-color: green;
  }
`;

const index = ({ pokemonName }) => {
  const [singlePokemon, setSinglePokemon] = useState([]);
  const [error, setError] = useState(false);

  const fetchPokemons = async ({ pokemonName }) => {
    try {
      const data = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );

      if (data.ok) {
        console.log('ok');
      } else {
        console.log('error');
      }
      const json = await data.json();

      const {
        id,
        name,
        types,
        sprites,
        stats,
        weight,
        height,
        abilities,
      } = json;

      const obj = {
        id,
        name,
        types: types.map((type) => type.type.name),
        image: sprites.front_default,
        stats: stats.map((item) => item.base_stat),
        weight,
        height,
        skill: abilities.map((item) => item.ability.name),
      };

      setSinglePokemon(obj);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (pokemonName !== undefined) {
      fetchPokemons({ pokemonName });
    }
  }, [pokemonName]);

  const {
    name,
    id,
    types,
    image,
    stats,
    weight,
    height,
    skill,
  } = singlePokemon;

  return (
    <>
      <Header />
      <SinglePokemonWrapper>
        <Pokemon>
          <Link href="/" passHref>
            <RedLink>
              <IoChevronBack style={{ fontSize: '1rem' }} />
            </RedLink>
          </Link>
          <Dot>
            <div className="dot dot-1"></div>
            <div className="dot dot-2"></div>
            <div className="dot dot-3"></div>
          </Dot>

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
                  skill={skill}
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
