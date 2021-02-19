import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Container from '../Container';
import CustomLink from '../CustomLink';

const Header = styled.header`
  color: white;
  background-color: #c70039;
  color: white;

  .selected {
    border-bottom: 1px solid white;
  }
  a {
    text-decoration: none;
    color: white;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  img {
    height: 80px;
    cursor: pointer;
  }
  @media (max-width: 600px) {
    img {
      height: 50px;
    }
  }
`;

const NavLinks = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  li {
    margin: 0 10px;
  }
`;

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
