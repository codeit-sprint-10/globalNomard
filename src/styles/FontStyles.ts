'use client';
import { createGlobalStyle } from 'styled-components';

const OpenSansSemiBoldFontSrc = './fonts/OpenSans-SemiBold.ttf';
const OpenSansBoldFontSrc = './fonts/OpenSans-Bold.ttf';
const PretendardRegularFontSrc = './fonts/Pretendard-Regular.woff2';
const PretendardMediumFontSrc = './fonts/Pretendard-Medium.woff2';
const PretendardSemiBoldFontSrc = './fonts/Pretendard-SemiBold.woff2';
const PretendardBoldFontSrc = './fonts/Pretendard-Bold.woff2';
const SpoqaHanSansNeoRegularFontSrc = './fonts/SpoqaHanSansNeo-Regular.woff2';
const SpoqaHanSansNeoBoldFontSrc = './fonts/SpoqaHanSansNeo-Bold.woff2';

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'OpenSans';
    font-weight: 600;
    font-display: swap;
    src: local('OpenSans-SemiBold'),
      url(${OpenSansSemiBoldFontSrc}) format('truetype');
  }

  @font-face {
    font-family: 'OpenSans';
    font-weight: 700;
    src: local('OpenSans-Bold'),
      url(${OpenSansBoldFontSrc}) format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 400;
    src: local('SpoqaHanSansNeo-Regular'),
      url(${SpoqaHanSansNeoRegularFontSrc}) format('woff2');
    font-display: swap;
  }

  @font-face {
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 700;
    src: local('SpoqaHanSansNeo-Bold'),
      url(${SpoqaHanSansNeoBoldFontSrc}) format('woff2');
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    src: local('Pretendard-Regular'),
      url(${PretendardRegularFontSrc}) format('woff2');
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 500;
    src: local('Pretendard-Medium'),
      url(${PretendardMediumFontSrc}) format('woff2');
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 600;
    src: local('Pretendard-SemiBold'),
      url(${PretendardSemiBoldFontSrc}) format('woff2');
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 700;
    src: local('Pretendard-Bold'),
      url(${PretendardBoldFontSrc}) format('woff2');
    font-display: swap;
  }

  body {
    font-family: 'Actor-Regular', BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Arial' 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default FontStyles;
