import FetchingPokemon from '../src/components/FetchingPokemons';
import Header from '../src/components/Header/index';
import Container from '../src/components/Container';
import Head from 'next/head';
import { Wrapper } from '../src/styles/pages/HomePage';

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
