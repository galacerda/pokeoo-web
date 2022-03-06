import { createGlobalStyle } from 'styled-components';
import { defaultTheme } from './defaultTheme';

const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  src: local(''),
       url('/fonts/poppins-v15-latin-regular.woff2') format('woff2');
}

@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  src: local(''),
       url('/fonts/poppins-v15-latin-500.woff2') format('woff2');
}

@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  src: local(''),
       url('/fonts/poppins-v15-latin-600.woff2') format('woff2');
}

@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  src: local(''),
       url('/fonts/poppins-v15-latin-700.woff2') format('woff2');
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: "Poppins";
  }

  html,body,#__next{
    font-size: 62.5%;
    scroll-behavior: smooth;
    @media(max-height: 900px){
        font-size: 55%;
    }
  }

  body {
    background-color: ${defaultTheme.colors.primary};
    font-size: 1.6rem;
  }
`;

export default GlobalStyles;
