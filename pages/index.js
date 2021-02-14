import styled from 'styled-components';
import FetchingPokemon from '../src/components/FetchingPokemons';
import Header from '../src/components/Header/index';
import Container from '../src/components/Container';

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
      <Header />
      <Container>
        <FetchingPokemon />
      </Container>
    </Wrapper>
  );
}
