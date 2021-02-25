import { useState, useEffect } from 'react';

import { AboutWrapper, Box, Breeding } from '../../styles/components/AboutTab';

const index = ({ pokemonName, height, weight }) => {
  const [aboutPokemon, setAboutPokemon] = useState([]);

  const fetchPokemons = async ({ pokemonName }) => {
    try {
      const data = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`
      );
      const json = await data.json();

      const {
        capture_rate,
        flavor_text_entries,
        egg_groups,
        habitat,
        growth_rate,
      } = json;

      const obj = {
        capture_rate,
        about: flavor_text_entries[0].flavor_text,
        egg_groups: egg_groups.map((item) => item.name),
        habitat: habitat ? habitat.name : 'unknown',
        growthRate: growth_rate.name,
      };
      setAboutPokemon(obj);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (pokemonName) {
      fetchPokemons({ pokemonName });
    }
  }, []);

  return (
    <div>
      <AboutWrapper className="about-Text">
        {aboutPokemon.about && aboutPokemon.about.replace('', '')}
      </AboutWrapper>
      <Box>
        <div>
          <p>Height</p>
          <p>
            ( {(height / 10).toFixed(2)} {height / 10 >= 1 ? 'M' : 'cm'} )
          </p>
        </div>
        <div>
          <p>Weight</p>
          <p>( {weight / 100} kg )</p>
        </div>
      </Box>
      <Breeding>
        <h3>Breeding</h3>
        <p>
          <span>Egg Groups</span>
          {aboutPokemon.egg_groups && aboutPokemon.egg_groups.join(', ')}
        </p>
        <p>
          <span>Capture Rate</span>
          {aboutPokemon.capture_rate}
        </p>
        <p>
          <span>Habitat</span>
          {aboutPokemon.habitat}
        </p>
        <p>
          <span>Growth rate</span>
          {aboutPokemon.growthRate}
        </p>
      </Breeding>
    </div>
  );
};

export default index;
