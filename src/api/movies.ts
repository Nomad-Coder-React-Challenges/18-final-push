import {
  GetResponse,
  IAPIResponse,
  IMovie,
  IMovieDetail,
} from '#src/types/models';
import instance from './instance';

export const getMovieListAPI = async ({ category }: { category: string }) => {
  try {
    const res: GetResponse<IAPIResponse<IMovie[]>> = await instance.get(
      `${category}`
    );

    return res;
  } catch (e) {
    console.log('getPopularListAPI error', e);
    throw e;
  }
};

export const getMovieDetailAPI = async ({ movieId }: { movieId: number }) => {
  try {
    const res: GetResponse<IMovieDetail> = await instance.get(
      `/movie?id=${movieId}`
    );

    return res;
  } catch (e) {
    console.log('getMovieDetailAPI error', e);
    throw e;
  }
};
