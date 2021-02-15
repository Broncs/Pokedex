import { useEffect, useState } from 'react';

const usePokemon = (pagination, setLoading) => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const data = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?offset=${pagination}&limit=20`
      );
      const json = await data.json();
      const { results = [] } = json;

      console.log(json);

      const pokemon = await Promise.all(
        results.map(async (result) => {
          const { url } = result;
          const pokeResponse = await fetch(url);
          return await pokeResponse.json();
        })
      );
      setPokemons(pokemon);
    };
    fetchPokemons();
  }, [pagination]);

  const pokemon = pokemons.map((pokemon) => {
    const { id, name, types, sprites } = pokemon;

    return {
      id,
      name,
      types: types.map((type) => type.type.name),
      image: sprites.front_default,
    };
  });
  return { pokemon };
};

export default usePokemon;
