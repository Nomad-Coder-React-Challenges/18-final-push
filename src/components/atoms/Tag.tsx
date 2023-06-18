import styled from 'styled-components';
import React from 'react';
interface TagProps extends ContainerProps {
  text: string;
}
interface ContainerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** 버튼 크기 */
  size?: 'sm' | 'md';
  /** 기본/둥근 버튼 구분 */
  isRound?: boolean;
}
export const Tag = ({ text, size, isRound, ...props }: TagProps) => {
  return (
    <Container size={size || 'md'} isRound={isRound} {...props}>
      <>
        {/* 태그 이름 */}
        <span>{text}</span>
      </>
    </Container>
  );
};
const Container = styled.button<ContainerProps>`
  display: flex;
  position: relative;
  width: fit-content;
  min-width: max-content;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  font-weight: 500;
  user-select: none;
  color: ${(props) => props.theme.colors.mono.white};
  background: ${(props) => props.theme.colors.mono.black};
  ${({ isRound }) => (isRound ? isRoundList['true'] : isRoundList['false'])}
  ${({ size }) => size && sizeList[size]}
  ${({ size }) =>
    size === 'md' ? `padding: 6px 12px;` : size === 'sm' && `padding: 4px 8px;`}
`;
// size에 따른 css
const sizeList = {
  sm: `
    height: 20px;
    font-size: 12px;`,
  md: `
    height: 26px;
    font-size: 14px;`,
};
// isRound에 띠른 css
const isRoundList = {
  true: `
    border-radius: 50%`,
  false: `
    border-radius: 6px;`,
};
