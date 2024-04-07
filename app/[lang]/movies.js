import "server-only";

const movies = () =>
  import("./moviedb/movie.json").then((module) => module.default);

export const getAllMovies = async () => {
  const moviesData = await movies();
  return moviesData.movies;
};

export const getMovieById = async (id) => {
  const moviesData = await movies();
  return moviesData.movies.find((movie) => movie.id == id);
};
