import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Container from '../Container';

const Header = styled.header`
  width: 100%;
  color: white;
  background-color: #c70039;
  color: white;

  a {
    text-decoration: none;
    color: white;
  }

  li {
    margin: 0;
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
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </Header>
  );
};

export default index;
