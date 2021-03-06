import { useEffect, useState } from 'react';

const usePokemon = (pagination, setIsLoading) => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      setIsLoading(true);
      try {
        const data = await fetch(
          `https://pokeapi.co/api/v2/pokemon/?offset=${pagination}&limit=20`
        );
        const json = await data.json();
        const { results = [] } = json;
        const pokemon = await Promise.all(
          results.map(async (result) => {
            const { url } = result;

            const pokeResponse = await fetch(url);
            if (pokeResponse.ok) {
              return await pokeResponse.json();
            }
          })
        );

        setPokemons(pokemon);
        setTimeout(() => {
          setIsLoading(false);
        }, 800);
      } catch (e) {
        console.log(e);
        setIsLoading(false);
      }
    };
    fetchPokemons();
  }, [pagination]);

  const pokemon = pokemons.map((pokemon) => {
    if (pokemon) {
      const { id, name, types, sprites } = pokemon;

      return {
        id,
        name,
        types: types && types.map((type) => type.type.name),
        image: sprites.front_default,
      };
    } else {
      return {
        id: '',
        name: 'notfound',
        types: ['notfound'],
        image: 'notfound',
      };
    }
  });
  return { pokemon };
};

export default usePokemon;
