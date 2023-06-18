import { useQuery, useQueryClient } from '@tanstack/react-query';

import { getMovieListAPI, getMovieDetailAPI } from '#src/api/movies';
import { useLocation } from 'react-router-dom';

export const useMovieList = () => {
  const location = useLocation();
  const queryClient = useQueryClient();
  const category = location.pathname === '/' ? 'popular' : location.pathname;
  return useQuery([category], () => getMovieListAPI({ category }), {
    refetchOnMount: 'always',
  });
};

export const useMovieDetail = (movieId: number) => {
  return useQuery([movieId], () => getMovieDetailAPI({ movieId }), {
    enabled: !!movieId,
  });
};
