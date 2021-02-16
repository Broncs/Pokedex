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

const ProgressBar = styled.ul`
  margin: 0;
  padding: 0;

  li {
    margin: 9px 0;
  }
  p {
    color: black;
    font-weight: 600;

    span {
      color: #303943;
      display: inline-block;
      opacity: 0.8;
      font-weight: 400;
      width: 100px;
    }
  }

  .progress-bar {
    border-radius: 5px;
    overflow: hidden;
    width: 100%;

    span {
      display: block;
    }
  }
  .bar {
    background: rgba(0, 0, 0, 0.075);
  }

  .progress {
    background: #4bc07a;
    color: #fff;
    padding: 5px;

    &.progress-red {
      background: #fb6c6c;
    }
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

              <Tabs data={data} />

              {stats && (
                <ProgressBar>
                  <li>
                    <p>
                      <span>HP</span>
                      {stats[0]}
                    </p>

                    <div className="progress-bar">
                      <span className="bar">
                        <span
                          className="progress progress-red"
                          style={{ width: `${stats[0]}%` }}
                        ></span>
                      </span>
                    </div>
                  </li>

                  <li>
                    <p>
                      <span>Attack</span>
                      {stats[1]}
                    </p>

                    <div className="progress-bar">
                      <span className="bar">
                        <span
                          className="progress"
                          style={{ width: `${stats[1]}%` }}
                        ></span>
                      </span>
                    </div>
                  </li>
                  <li>
                    <p>
                      <span>Defense</span>
                      {stats[2]}
                    </p>

                    <div className="progress-bar ">
                      <span className="bar">
                        <span
                          className="progress progress-red"
                          style={{ width: `${stats[2]}%` }}
                        ></span>
                      </span>
                    </div>
                  </li>
                  <li>
                    <p>
                      <span>Sp. Atk</span>
                      {stats[3]}
                    </p>

                    <div className="progress-bar">
                      <span className="bar">
                        <span
                          className="progress"
                          style={{ width: `${stats[3]}%` }}
                        ></span>
                      </span>
                    </div>
                  </li>
                  <li>
                    <p>
                      <span>Sp. Def</span>
                      {stats[4]}
                    </p>

                    <div className="progress-bar">
                      <span className="bar">
                        <span
                          className="progress"
                          style={{ width: `${stats[4]}%` }}
                        ></span>
                      </span>
                    </div>
                  </li>
                  <li>
                    <p>
                      <span>Speed</span>
                      {stats[5]}
                    </p>

                    <div className="progress-bar">
                      <span className="bar">
                        <span
                          className="progress progress-red"
                          style={{ width: `${stats[5]}%` }}
                        ></span>
                      </span>
                    </div>
                  </li>

                  <li>Total {stats.reduce((acc, curr) => acc + curr, 0)}</li>
                </ProgressBar>
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
