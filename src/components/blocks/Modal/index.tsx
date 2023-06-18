import { useRecoilState, useRecoilValue } from "recoil";
import {
  Container,
  Description,
  Image,
  Info,
  Paragraph,
  Title,
} from "./Modal.styled";
import { motion, AnimatePresence } from "framer-motion";
import { ModalState, ScreenSizeState } from "#src/stores/appStateStore";
import { Box } from "#components/atoms/Box";
import { useMovieDetail } from "#hooks/queries/moviesQuery";
import { makeBgPath, makeImagePath } from "#src/utils/image";
import { IconExit } from "#components/atoms/svgs";
import { useTheme } from "styled-components";

const Modal = () => {
  const theme = useTheme();
  const { isMobile } = useRecoilValue(ScreenSizeState);
  const [modalValue, setModalValue] = useRecoilState(ModalState);
  const { data, isLoading } = useMovieDetail(Number(modalValue.id));
  const imgPath = data?.data?.backdrop_path;
  const handleModalCloseClick = () => {
    setModalValue({ id: null, isOpen: false });
  };
  const option = {
    maximumFractionDigits: 2,
  };
  return (
    <AnimatePresence>
      {modalValue.id ? (
        <Container
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleModalCloseClick}
        >
          <Box width={isMobile ? "80%" : "400px"} layoutId={modalValue?.id}>
            <Image src={makeBgPath(`${imgPath}`)} />
            <Description>
              <Title>{data?.data?.title}</Title>
              <Paragraph>{data?.data?.overview}</Paragraph>
              <Info>
                <Paragraph>
                  Budget: $
                  {data?.data?.budget?.toLocaleString(undefined, option)}
                </Paragraph>
                <Paragraph>
                  Revenue: $
                  {data?.data?.revenue?.toLocaleString(undefined, option)}
                </Paragraph>
                <Paragraph>Runtime: {data?.data?.runtime} minutes</Paragraph>
                <Paragraph>
                  Rating: {data?.data?.vote_average?.toFixed(1)}
                </Paragraph>
                <Paragraph>Homepage: {data?.data?.homepage}</Paragraph>
              </Info>
            </Description>
            <IconExit
              width={28}
              height={28}
              stroke={theme.colors.mono[400]}
              onClick={handleModalCloseClick}
              style={{ position: "absolute", top: 20, right: 20 }}
            />
          </Box>
        </Container>
      ) : null}
    </AnimatePresence>
  );
};

export default Modal;
