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
  p {
    font-size: 3rem;
    margin: 0;
  }
  li {
    margin: 0;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const index = () => {
  return (
    <Header>
      <Container>
        <nav>
          <p>Pokédex</p>
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
