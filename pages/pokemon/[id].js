import { useRouter } from 'next/router';

import SinglePokemonPage from '../../src/components/SinglePokemonPage';

const singlePokemonPage = () => {
  const router = useRouter();
  const pokemonName = router.query.id;

  return <SinglePokemonPage pokemonName={pokemonName} />;
};

export default singlePokemonPage;
