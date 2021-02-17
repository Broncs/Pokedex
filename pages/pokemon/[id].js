import { useRouter } from 'next/router';
import Head from 'next/head';

import SinglePokemonPage from '../../src/components/SinglePokemonPage';

const singlePokemonPage = () => {
  const router = useRouter();
  const pokemonName = router.query.id;

  return (
    <>
      <Head>
        <title>Pokedex / {pokemonName}</title>
      </Head>
      <SinglePokemonPage pokemonName={pokemonName} />;
    </>
  );
};

export default singlePokemonPage;
