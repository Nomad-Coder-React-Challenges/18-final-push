import { HEIGHTS } from '#constants';
import { mq } from '#src/styles/mediaQuery';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
  width: 100%;
  height: ${HEIGHTS.header.mobile}px;
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 24px;
  padding-bottom: 20px;
  ${mq('desktop')} {
    height: ${HEIGHTS.header.desktop}px;
  }
`;

const Text = styled(Link)`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.mono.black};
  ${mq('desktop')} {
    font-size: 18px;
  }
`;

const Button = styled(motion.article)`
  display: flex;
  position: relative;
`;

const Dot = styled(motion.div)`
  position: absolute;
  bottom: -16px;
  left: 50%;
  width: 8px;
  height: auto;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.error[400]};
`;

export { Container, Text, Button, Dot };
