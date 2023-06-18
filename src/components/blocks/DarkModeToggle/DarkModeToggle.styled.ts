import styled from 'styled-components';

interface ThemeProps {
  isDarkMode: boolean;
}

interface DarkIconProps extends ThemeProps {
  isDarkIcon?: boolean;
}

const Button = styled.button<ThemeProps>`
  position: fixed;
  bottom: 36px;
  right: 36px;
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.2s;
  background-color: ${(props) => props.theme.colors.mono.white};
  ${(props) =>
    props.isDarkMode
      ? `background-color: ${props.theme.colors.mono[100]};`
      : 'box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);'}
  @media (hover: hover) {
    &:hover {
      background-color: ${(props) =>
        props.isDarkMode
          ? props.theme.colors.mono.white
          : props.theme.colors.mono[100]};
      box-shadow: none;
    }
  }
`;

const Icons = styled.article<DarkIconProps>`
  @keyframes rotateAndShrink {
    0% {
      transform: scale(1) rotate(0deg);
    }
    100% {
      transform: scale(0) rotate(360deg);
    }
  }
  @keyframes rotateAndExpand {
    0% {
      transform: scale(0) rotate(0deg);
    }
    100% {
      transform: scale(1) rotate(360deg);
    }
  }
  position: absolute;
  animation: ${(props) =>
      props.isDarkMode
        ? props.isDarkIcon
          ? 'rotateAndExpand'
          : 'rotateAndShrink'
        : props.isDarkIcon
        ? 'rotateAndShrink'
        : 'rotateAndExpand'}
    0.3s cubic-bezier(0.2, 0, 0.8, 1.2) forwards;
`;

export { Button, Icons };
