'use client';
import { createGlobalStyle } from 'styled-components';

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'OpenSans';
    font-weight: 600;
    font-display: swap;
    src: local('OpenSans-SemiBold'),
      url('./fonts/OpenSans-SemiBold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'OpenSans';
    font-weight: 700;
    src: local('OpenSans-Bold'),
      url('./fonts/OpenSans-Bold.ttf') format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 400;
    src: local('SpoqaHanSansNeo-Regular'),
      url('./fonts/SpoqaHanSansNeo-Regular.woff2') format('woff2');
    font-display: swap;
  }

  @font-face {
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 700;
    src: local('SpoqaHanSansNeo-Bold'),
      url('./fonts/SpoqaHanSansNeo-Bold.woff2') format('woff2');
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    src: local('Pretendard-Regular'),
      url('./fonts/Pretendard-Regular.woff2') format('woff2');
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 500;
    src: local('Pretendard-Medium'),
      url('./fonts/Pretendard-Medium.woff2') format('woff2');
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 600;
    src: local('Pretendard-SemiBold'),
      url('./fonts/Pretendard-SemiBold.woff2') format('woff2');
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 700;
    src: local('Pretendard-Bold'),
      url('./fonts/Pretendard-Bold.woff2') format('woff2');
    font-display: swap;
  }

  body {
    font-family: 'Actor-Regular', BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Arial', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default FontStyles;
