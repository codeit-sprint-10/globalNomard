import { createGlobalStyle } from 'styled-components';
import OpenSansSemiBoldFontSrc from '@/assets/fonts/OpenSans-SemiBold.ttf';
import OpenSansBoldFontSrc from '@/assets/fonts/OpenSans-Bold.ttf';
import PretendardRegularFontSrc from '@/assets/fonts/Pretendard-Regular.woff2';
import PretendardMediumFontSrc from '@/assets/fonts/Pretendard-Medium.woff2';
import PretendardSemiBoldFontSrc from '@/assets/fonts/Pretendard-SemiBold.woff2';
import PretendardBoldFontSrc from '@/assets/fonts/Pretendard-Bold.woff2';
import SpoqaHanSansNeoRegularFontSrc from '@/assets/fonts/SpoqaHanSansNeo-Regular.woff2';
import SpoqaHanSansNeoBoldFontSrc from '@/assets/fonts/SpoqaHanSansNeo-Bold.woff2';

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'OpenSans-SemiBold';
    font-weight: 600;
    src: url(${OpenSansSemiBoldFontSrc}) format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'OpenSans-Bold';
    font-weight: 700;
    src: url(${OpenSansBoldFontSrc}) format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'SpoqaHanSansNeo-Regular';
    font-weight: 400;
    src: url(${SpoqaHanSansNeoRegularFontSrc}) format('woff2');
    font-display: swap;
  }

  @font-face {
    font-family: 'SpoqaHanSansNeo-Bold';
    font-weight: 700;
      src: url(${SpoqaHanSansNeoBoldFontSrc}) format('woff2');
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard-Regular';
    font-weight: 400;
    src: url(${PretendardRegularFontSrc}) format('woff2');
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard-Medium';
    font-weight: 500;
    src: url(${PretendardMediumFontSrc}) format('woff2');
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard-SemiBold';
    font-weight: 600;
    src: url(${PretendardSemiBoldFontSrc}) format('woff2');
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard-Bold';
    font-weight: 700;
    src: url(${PretendardBoldFontSrc}) format('woff2');
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
