import styled from 'styled-components';
export const Header = styled.header`
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

export const NavLinks = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  li {
    margin: 0 10px;
  }
`;
