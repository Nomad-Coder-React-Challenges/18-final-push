import { IMovie } from '#src/types/models';
import { makeImagePath } from '#src/utils/image';
import { useSetRecoilState } from 'recoil';
import { ThumbnailContainer, Image, Title } from './Thumbnail.styled';
import { ModalState } from '#src/stores/appStateStore';
import { Box } from '#components/atoms/Box';

interface ProfileProps {
  info: IMovie | undefined;
  index: number;
}

const Thumbnail = ({ info, index }: ProfileProps) => {
  const setModalValue = useSetRecoilState(ModalState);

  return (
    <ThumbnailContainer
      onClick={() => {
        setModalValue({ id: `${info?.id}`, isOpen: true });
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ delay: index * 0.1 }}
    >
      <Box
        layoutId={`${info?.id}`}
        whileHover={{
          scale: 1.05,
          y: -10,
        }}
        transition={{
          stiffness: 200,
          type: 'spring',
        }}
      >
        <Image src={makeImagePath(`${info?.poster_path}`)} loading='lazy' />
      </Box>
      <Title>{info?.title}</Title>
    </ThumbnailContainer>
  );
};

export default Thumbnail;
