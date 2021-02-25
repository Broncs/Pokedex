import styled from 'styled-components';

export const AboutPage = styled.div`
  font-family: 'Poppins', sans-serif;
  color: white;
  text-align: center;

  h1 {
    color: white;
    text-align: center;
  }

  .wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: flex-start;
    margin: 20px 0;
  }
  .image-wrapper {
    text-align: center;
    margin-bottom: 20px;
    img {
      width: 70%;
      display: inline-block;
    }
  }
  @media (max-width: 600px) {
    .wrapper {
      display: block;
    }
  }
`;
