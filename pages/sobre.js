import React from 'react';
import Header from '../src/components/Header';
import Container from '../src/components/Container';
import { AboutPage } from '../src/styles/pages/Sobre';

const about = () => {
  return (
    <>
      <Header />
      <Container>
        <AboutPage>
          <h1>O que é um Pokémon ?</h1>
          <section className="wrapper">
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
          </section>

          <h1>Sobre Esse Projeto</h1>
          <section className="wrapper">
            <div className="image-wrapper">
              <img
                src="https://i1.wp.com/www.multarte.com.br/wp-content/uploads/2019/03/display-pokemon.png?resize=458%2C458&ssl=1"
                alt="pokedex"
              />
            </div>
            <div>
              Esse projeto foi realizado pra praticar minhas habilidades,
              utilizado as tecnologias Next.js, Styled Components,e React icons.
              Os dados são fornecidos por uma RestfulApi chamada PokeApi.
            </div>
          </section>
        </AboutPage>
      </Container>
    </>
  );
};

export default about;
