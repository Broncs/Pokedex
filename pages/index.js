import styled from 'styled-components';
import FetchingPokemon from '../src/components/FetchingPokemons';
import Header from '../src/components/Header/index';
import Container from '../src/components/Container';
import Head from 'next/head';

const Wrapper = styled.main`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  padding: 0;
`;

export default function Home() {
  return (
    <Wrapper>
      <Head>
        <title>Pokedex</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Container>
        <FetchingPokemon />
      </Container>
    </Wrapper>
  );
}
