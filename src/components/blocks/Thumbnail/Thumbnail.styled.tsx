import styled from 'styled-components';
import { mq } from '#src/styles/mediaQuery';
import { motion } from 'framer-motion';

const ThumbnailContainer = styled(motion.article)`
  max-width: 100px;
  min-width: 90px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  ${mq('desktop')} {
    max-width: 250px;
    min-width: 140px;
    gap: 16px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 2 / 3;
  border-radius: 20px;
  cursor: pointer;
`;

const Title = styled.h3`
  width: 100%;
  white-space: pre-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 100%;
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.colors.mono.black};
  ${mq('desktop')} {
    font-size: 24px;
  }
`;

export { ThumbnailContainer, Image, Title };
