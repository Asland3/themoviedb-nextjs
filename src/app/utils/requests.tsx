// const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
// const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const API_KEY = "1446fd860b344643fce09d3f96debc19";
const BASE_URL = "https://api.themoviedb.org/3";

export const getTrendingMovies = async () => {
  const response = await fetch(`${BASE_URL}/trending/movie/day?language=en-US&api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const getMovies = async (query: any) => {
  const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`);
  const data = await response.json();
  return data.results;
};

export const getMovieDetails = async (id: any) => {
  const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`);
  const data = await response.json();
  return data;
};

export const getSimilarMovies = async (id: any) => {
  const response = await fetch(`${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`);
  const data = await response.json();
  return data.results;
};
