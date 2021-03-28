import { createGlobalStyle, css } from 'styled-components';
import normalize from 'styled-normalize';

import { ClubhouseColors } from '@/constants/Colors';

const fonts = css`
  @font-face {
    font-family: 'TmoneyRoundWindRegular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/TmoneyRoundWindRegular.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'TmoneyRoundWindExtraBold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/TmoneyRoundWindExtraBold.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${fonts}

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
    font-family: 'Nunito', 'TmoneyRoundWindRegular', sans-serif;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  img {
    user-select: none;
    -webkit-user-drag: none;
  }
`;
