import { motion } from "framer-motion";
import styled from "styled-components";
import { mq } from "#src/styles/mediaQuery";

interface BoxProps {
  width?: string;
}

export const Box = styled(motion.div)<BoxProps>`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: auto;
  aspect-ratio: 2 / 3;
  border-radius: 20px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.mono.black};
  ${(props) =>
    props.width &&
    `
    display: flex;
    position: relative;
  `}
  overflow: hidden;
  ${mq("desktop")} {
    aspect-ratio: ${(props) => (props.width ? "5 / 6" : "2 / 3")};
  }
`;
