import React from 'react';
import Link from 'next/link';

import CustomLink from '../CustomLink';
import { Header, NavLinks } from '../../styles/components/Header';
import { Container } from '../../styles/components/Container';

const index = () => {
  return (
    <Header>
      <Container>
        <nav>
          <Link href="/">
            <img
              src="https://cdn.bulbagarden.net/upload/4/4b/Pok%C3%A9dex_logo.png"
              alt="pokedex"
            />
          </Link>
          <NavLinks>
            <li>
              <CustomLink href="/">
                <a>Inicio</a>
              </CustomLink>
            </li>
            <li>
              <CustomLink href="/sobre">
                <a>Sobre</a>
              </CustomLink>
            </li>
          </NavLinks>
        </nav>
      </Container>
    </Header>
  );
};

export default index;
