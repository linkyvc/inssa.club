import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

import { ClubhouseColors } from '@/constants/Colors';

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
    background-color: ${ClubhouseColors.background_ivory};
  }

  body {
    margin: 0;
    color: ${ClubhouseColors.text_black};
    font-family: 'Nunito', sans-serif;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }
`;
