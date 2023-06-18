import HomePageTemplate from '#components/templates/home';
import { useMovieList } from '#hooks/queries/moviesQuery';

const HomePage = () => {
  const { data: movieList, isLoading } = useMovieList();

  return (
    <HomePageTemplate
      movieList={movieList?.data?.results}
      isLoading={isLoading}
    />
  );
};

export default HomePage;
