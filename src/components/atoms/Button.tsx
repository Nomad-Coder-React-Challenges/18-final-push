import styled from 'styled-components';
import { SVGProps } from 'react';

interface ButtonProps extends ContainerProps {
  text: string;
}
interface ContainerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** 버튼 타입 */
  color?: 'primary' | 'default' | 'text';
  /** 버튼 크기 */
  size?: 'sm' | 'md' | 'lg';
  /** 기본/둥근 버튼 구분 */
  isRound?: boolean;
  width?: string | number;
}
export const Button = ({
  text,
  color,
  size,
  isRound,
  width,
  ...props
}: ButtonProps) => {
  return (
    <Container
      color={color || 'default'}
      size={size || 'md'}
      isRound={isRound}
      width={width ?? 'fit-content'}
      {...props}
    >
      <span>{text}</span>
    </Container>
  );
};
const Container = styled.button<ContainerProps>`
  display: flex;
  position: relative;
  width: ${({ width }) =>
    width && typeof width === 'string' ? width : `${width}px`};
  justify-content: center;
  align-items: center;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  gap: 4px;
  font-weight: 500;
  user-select: none;
  &:active {
    transform: scale(0.97);
  }
  ${({ isRound }) => (isRound ? isRoundList['true'] : isRoundList['false'])}
  ${({ color, theme }) =>
    color
      ? color === 'primary'
        ? `
          color: white;
          background: ${theme.colors.primary[500]};
          @media (hover: hover) {
            &:hover {
              background: ${theme.colors.primary[400]};
            }
          }
          &:active {
            background: ${theme.colors.primary[400]};
          }`
        : color === 'default'
        ? `
          color: ${theme.colors.mono.black};
          border: 1px solid ${theme.colors.mono[200]};
          background: ${theme.colors.mono.white};
          @media (hover: hover) {
            &:hover {
              background: ${theme.colors.mono[100]};
            }
          }
          &:active {
            background: ${theme.colors.mono[200]};
          }`
        : color === 'text' &&
          `
          color: ${theme.colors.mono.black};
          background: ${theme.colors.mono.white};
          @media (hover: hover) {
            &:hover {
              background: ${theme.colors.mono[100]};
            }
          }
          &:active {
            background: ${theme.colors.mono[200]};
          }`
      : `
          color: ${theme.colors.mono.black};
          border: 1px solid ${theme.colors.mono[200]};
          background: ${theme.colors.mono.white};
          @media (hover: hover) {
            &:hover {
              background: ${theme.colors.mono[100]};
            }
          }
          &:active {
            background: ${theme.colors.mono[200]};
          }`}
  ${({ size }) => size && sizeList[size]}
  ${({ size, color }) =>
    size === 'lg'
      ? `padding: 17px ${color === 'default' ? '19px' : '20px'};`
      : size === 'md'
      ? `padding: 10px ${color === 'default' ? '19px' : '20px'};`
      : size === 'sm' &&
        `padding: 8px ${color === 'default' ? '13px' : '14px'};`}
`;
// size에 따른 css
const sizeList = {
  sm: `
    height: 32px;
    font-size: 14px;`,
  md: `
    height: 40px;
    font-size: 14px;`,
  lg: `
    height: 50px;
    font-size: 16px;`,
};
// isRound에 띠른 css
const isRoundList = {
  true: `
    border-radius: 92px;`,
  false: `
    border-radius: 6px;`,
};
