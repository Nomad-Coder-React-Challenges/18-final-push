import styled from 'styled-components';

export interface InputProps {
  width?: string | number;
  isError?: boolean;
}

export const Input = styled.input<InputProps>`
  width: ${({ width }) =>
    typeof width === 'number' ? `${width}px` : width || '200px'};
  height: 40px;
  padding: 12px 14px;
  border: 1px solid
    ${({ theme, isError }) =>
      isError ? theme.colors.error[500] : theme.colors.mono[200]};
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.mono.black};
  &::placeholder {
    color: ${({ theme }) => theme.colors.mono[300]};
  }
  &:focus {
    outline: 0 !important;
    border: 2px solid ${({ theme }) => theme.colors.primary[300]};
  }
  &:placeholder-shown {
    border: ${({ theme, isError }) =>
      isError
        ? `1px solid ${theme.colors.error[500]}`
        : `1px solid ${theme.colors.mono[200]}`};
  }
  background-color: ${({ theme }) => theme.colors.mono.white};
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.1s;
`;
