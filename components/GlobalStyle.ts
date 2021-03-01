import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
    word-break: keep-all;
  }

  button,
  input {
    border: 0;

    &:focus {
      outline: none;
    }
  }

  html {
    background-color: #f2efe4;
  }

  body {
    margin: 0;
    color: #262626;
    font-family: 'Nunito', sans-serif;
  }

  a {
    text-decoration: none;
  }
`;
