import Thumbnail from '#components/blocks/Thumbnail';
import { IMovie } from '#src/types/models';
import { Button, IsLoading, List, Wrapper } from './home.styled';
import DarkModeToggle from '#components/blocks/DarkModeToggle';
import { AnimatePresence } from 'framer-motion';

interface HomePageTemplateProps {
  movieList?: IMovie[];
  isLoading: boolean;
}

const HomePageTemplate = ({ movieList, isLoading }: HomePageTemplateProps) => {
  return (
    <Wrapper>
      {isLoading ? (
        <IsLoading>Loading...</IsLoading>
      ) : (
        <AnimatePresence>
          <List>
            {movieList?.map((movies, index) => (
              <Thumbnail info={movies} key={movies.id} index={index} />
            ))}
          </List>
        </AnimatePresence>
      )}
    </Wrapper>
  );
};

export default HomePageTemplate;
