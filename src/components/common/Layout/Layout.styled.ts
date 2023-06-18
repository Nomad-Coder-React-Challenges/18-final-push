import styled from 'styled-components';

interface MainProps {
  height: string;
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  margin: 0 auto;
`;

const Main = styled.main<MainProps>`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  min-height: ${props => props.height ?? '100%'};
  transition: height 0.25s;
`;

export { Wrapper, Main };
