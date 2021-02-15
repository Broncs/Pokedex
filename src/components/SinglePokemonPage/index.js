import { useState, useEffect } from 'react';

const index = ({ pokemonName }) => {
  const [singlePokemon, setSinglePokemon] = useState([]);

  const fetchPokemons = async ({ pokemonName }) => {
    const data = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    const json = await data.json();

    const { id, name, types, sprites } = json;
    const obj = {
      id,
      name,
      types: types.map((type) => type.type.name),
      image: sprites.front_default,
    };

    setSinglePokemon(obj);
  };

  useEffect(() => {
    if (pokemonName) {
      fetchPokemons({ pokemonName });
    }
  }, []);

  const { name, id, types, image } = singlePokemon;

  return (
    <div>
      {singlePokemon.length !== 0 && (
        <>
          <h1>{id}</h1>
          <div>
            <img src={image} alt={`${name} Thumbnail`} />
          </div>
          <div>
            <h3>{name}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default index;
