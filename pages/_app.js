import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: #FC4321;
    font-family: Helvetica, Arial, sans-serif;
  }

  h1{
    color: black;
  }

  ul{
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li{
    margin-bottom: 1.5rem;
  }
`;

const theme = {
  colors: {
    primary: 'black',
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
