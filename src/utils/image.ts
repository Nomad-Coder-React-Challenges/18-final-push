export const makeImagePath = (image: string) => {
  return `https://image.tmdb.org/t/p/w500${image}`;
};

export const makeBgPath = (image: string) => {
  return `https://image.tmdb.org/t/p/original${image}`;
};
