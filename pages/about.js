import React from 'react';
import Header from '../src/components/Header';
import Container from '../src/components/Container';
import styled from 'styled-components';

const AboutPage = styled.div`
  font-family: 'Poppins', sans-serif;
  color: white;
  h1 {
    color: white;
    text-align: center;
    margin: 1rem 0 2rem;
  }

  main {
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      width: 50%;
    }

    & > div {
      margin: 0 20px;
    }
  }
  .image-wrapper {
    img {
      width: 100%;
    }
  }
`;

const about = () => {
  return (
    <>
      <Header />
      <Container>
        <AboutPage>
          <h1>O que é um Pokémon ?</h1>
          <main>
            <div className="image-wrapper">
              <img
                src="https://www.hiveworkshop.com/attachments/pokedex1-gif.57488/"
                alt="pokedex"
              />
            </div>
            <div>
              Pokémon é uma franquia de mídia que pertence a The Pokémon
              Company, tendo sido criada por Satoshi Tajiri em 1995. Ela é
              centrada em criaturas ficcionais chamadas "Pokémon", que os seres
              humanos capturam e os treinam para lutarem um contra o outro como
              um esporte.
            </div>
          </main>
        </AboutPage>
      </Container>
    </>
  );
};

export default about;
