import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Title } from '#components/blocks/Thumbnail/Thumbnail.styled';
import { mq } from '#src/styles/mediaQuery';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: start;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  gap: 36px;
  padding: 20px;
  ${mq('desktop')} {
    padding: 40px;
  }
`;

const IsLoading = styled.h2`
  width: 100%;
  color: ${props => props.theme.colors.mono.black};
`;

const List = styled.article`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 20px;
  flex-wrap: wrap;
  ${mq('desktop')} {
    gap: 40px;
  }
`;

const Button = styled(Link)`
  display: flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 24px;
  cursor: pointer;
  background-color: ${props => props.theme.colors.mono.white};
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  @media (hover: hover) {
    &:hover {
      background: ${props => props.theme.colors.mono.black};
      ${Title} {
        color: ${props => props.theme.colors.mono.white};
      }
    }
  }
`;

export { Wrapper, IsLoading, List, Button };
