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

const index = ({ pokemonName, height, weight }) => {
  const [aboutPokemon, setAboutPokemon] = useState([]);

  const fetchPokemons = async ({ pokemonName }) => {
    const data = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`
    );
    const json = await data.json();

    const { capture_rate, flavor_text_entries } = json;
    const obj = {
      capture_rate,
      about: flavor_text_entries[0].flavor_text,
    };
    setAboutPokemon(obj);
  };

  useEffect(() => {
    if (pokemonName) {
      fetchPokemons({ pokemonName });
    }
  }, []);
  return (
    <div>
      <AboutWrapper className="about-Text">{aboutPokemon.about}</AboutWrapper>
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

      <p> Capture Rate{aboutPokemon.capture_rate}</p>
    </div>
  );
};

export default index;
