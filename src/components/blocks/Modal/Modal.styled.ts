import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 2 / 3;
  border-radius: 20px;
  cursor: pointer;
  object-fit: cover;
`;

const Description = styled.article`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80%;
  background: linear-gradient(transparent, #111111, #000000);
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: flex-start;
  gap: 12px;
  padding: 40px 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: white;
`;

const Paragraph = styled.h1`
  font-size: 12px;
  font-weight: 500;
  line-height: 110%;
  color: ${({ theme }) => theme.colors.mono[400]};
`;

const Info = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
`;

export { Container, Image, Description, Title, Paragraph, Info };
