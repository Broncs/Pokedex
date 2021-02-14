import React, { useEffect, useState } from 'react';
import usePokemon from '../../hooks/usePokemon';
import styled from 'styled-components';

const typesColors = {
  normal: '#A8A878',
  fighting: '#C03028',
  flying: '#A890F0',
  poison: '#A040A0',
  ground: '#E0C068',
  rock: '#B8A038',
  bug: '#A8B820',
  ghost: '#705898',
  fire: '#F08030',
  water: '#6890F0',
  grass: '#78C850',
  electric: '#F8D030',
  psychic: '#F85888',
  ice: '#98D8D8',
  dragon: '#7038F8',
  dark: '#705848',
  fairy: '#EE99AC',
  unknown: '#68A090',
  shadow: '#333158',
};

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

  .type-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;

    h3 {
      font-size: 1em;
      margin: 0;
    }

    p {
      font-size: 0.8em;
      margin: 0;
      margin-top: 5px;
    }

    .type {
      border-radius: 10px;
      padding: 2px 6px;
      margin: 2px;
      display: inline-block;
    }

    .normal {
      background-color: ${({ typesColors }) => typesColors.normal};
    }
    .fighting {
      background-color: ${({ typesColors }) => typesColors.fighting};
    }
    .flying {
      background-color: ${({ typesColors }) => typesColors.flying};
    }
    .poison {
      background-color: ${({ typesColors }) => typesColors.poison};
    }
    .ground {
      background-color: ${({ typesColors }) => typesColors.ground};
    }
    .rock {
      background-color: ${({ typesColors }) => typesColors.rock};
    }
    .bug {
      background-color: ${({ typesColors }) => typesColors.bug};
    }
    .ghost {
      background-color: ${({ typesColors }) => typesColors.ghost};
    }
    .fire {
      background-color: ${({ typesColors }) => typesColors.fire};
    }
    .water {
      background-color: ${({ typesColors }) => typesColors.water};
    }
    .grass {
      background-color: ${({ typesColors }) => typesColors.grass};
    }
    .electric {
      background-color: ${({ typesColors }) => typesColors.electric};
    }
    .psychic {
      background-color: ${({ typesColors }) => typesColors.psychic};
    }
    .ice {
      background-color: ${({ typesColors }) => typesColors.ice};
    }
    .dragon {
      background-color: ${({ typesColors }) => typesColors.dragon};
    }
    .dark {
      background-color: ${({ typesColors }) => typesColors.dark};
    }
    .fairy {
      background-color: ${({ typesColors }) => typesColors.fairy};
    }
    .unknown {
      background-color: ${({ typesColors }) => typesColors.unknown};
    }
    .shadow {
      background-color: ${({ typesColors }) => typesColors.shadow};
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
            <PokemonDetails typesColors={typesColors}>
              <div className="type-wrapper">
                <h3>{name}</h3>
                <p>
                  {types.map((type, index) => {
                    return (
                      <span key={index} className={`type ${type}`}>
                        {type}{' '}
                      </span>
                    );
                  })}
                </p>
                {/* <p className={types.join(' ')}>{types.join(', ')}</p> */}
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
