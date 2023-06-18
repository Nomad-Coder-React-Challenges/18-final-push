import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard';
    font-weight: 700;
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff') format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 300;
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Light.woff') format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 500;
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff') format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-display: fallback;
  }

  * {
    font-family: Pretendard, sans-serif;
    margin: 0;
    padding: 0;
    font: inherit;
    color: inherit;
  }
  *,
  :after,
  :before {
    box-sizing: border-box;
    flex-shrink: 0;
  }
  html,
  body {
    font-family: Pretendard, sans-serif;
    background: ${props => props.theme.colors.mono.white};
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }
  button,
  hr {
    background: none;
    border: 0;
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  :root {
    -webkit-tap-highlight-color: transparent;
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
    cursor: default;
    line-height: 1.5;
    overflow-wrap: break-word;
    word-break: break-word;
    tab-size: 4;

    --mainGreen: #00d764;
    --greenGradient: linear-gradient(134.33deg, #00d764 0%, #00be64 90.62%);
    --subGreen: #00be64;
    --subPink: #ff5064;
    --subBlue: #558cff;

    --white: #ffffff;

    --mono1: #f3f3f3;
    --mono2: #d2d2d2;
    --mono3: #999999;
    --mono4: #585858;

    --black: #000000;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export default GlobalStyles;
