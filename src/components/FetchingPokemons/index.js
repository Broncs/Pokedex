import React, { useState } from 'react';
import usePokemon from '../../hooks/usePokemon';

import Navigation from '../Navigation';
import Loading from '../Loader';
import Link from 'next/link';
import {
  PokemonList,
  Pokemon,
  PokemonImage,
  PokemonDetails,
  PokemonIndex,
  typesColors,
} from '../../styles/components/FetchingPokemons';

const Pokemons = () => {
  const [pagination, setPagination] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const { pokemon: allPokemon } = usePokemon(pagination, setIsLoading);

  return (
    <>
      <PokemonList>
        {isLoading ? (
          <Loading />
        ) : (
          allPokemon.map((pokemon) => {
            const { name, id, types, image } = pokemon;

            return (
              <Pokemon key={id}>
                <Link href={`/pokemon/${name}`}>
                  <PokemonImage>
                    <img src={image} alt={`${name} Thumbnail`} />
                  </PokemonImage>
                </Link>

                <PokemonDetails typesColors={typesColors}>
                  <div className="type-wrapper">
                    <h3>{name}</h3>
                    <p>
                      {types.map((type, index) => {
                        return (
                          <span key={index} className={`type ${type}`}>
                            {type}
                          </span>
                        );
                      })}
                    </p>
                  </div>
                  <div>
                    <PokemonIndex>{id}</PokemonIndex>
                  </div>
                </PokemonDetails>
              </Pokemon>
            );
          })
        )}
      </PokemonList>
      <Navigation pagination={pagination} setPagination={setPagination} />
    </>
  );
};

export default Pokemons;
