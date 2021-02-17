import { useState, useEffect } from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.p`
  line-height: 1.5;
  text-align: center;
`;

const Box = styled.div`
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  text-align: center;
  justify-content: space-around;
  padding: 5px 0;
  margin: 10px 0;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  div p:first-child {
    opacity: 0.6;
  }
`;

const Breeding = styled.div`
  margin-top: 10px;

  p {
    display: flex;
    justify-content: space-between;
    font-weight: 600;
  }

  span {
    opacity: 0.6;
    font-weight: 400;
    font-size: 0.7rem;
  }
`;

const index = ({ pokemonName, height, weight }) => {
  const [aboutPokemon, setAboutPokemon] = useState([]);

  const fetchPokemons = async ({ pokemonName }) => {
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
    console.log(json);
    const obj = {
      capture_rate,
      about: flavor_text_entries[0].flavor_text,
      egg_groups: egg_groups.map((item) => item.name),
      habitat: habitat.name,
      growthRate: growth_rate.name,
    };
    setAboutPokemon(obj);
  };

  useEffect(() => {
    if (pokemonName) {
      fetchPokemons({ pokemonName });
    }
  }, []);

  // const aboutText = aboutPokemon.about;
  // console.log(aboutText);
  // const newAboutText = aboutText.replace(/[^a-z0-9]/gi, ' ');
  // console.log(newAboutText);

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
