import axios from 'axios';

const MOVIE_DATA = [];

const CATEGORY_DATA = [
  {
    id: 'c-0',
    name: 'all',
  },
  {
    id: 'c-1',
    name: 'drama',
  },
  {
    id: 'c-2',
    name: 'action',
  },
  {
    id: 'c-3',
    name: 'adventure',
  },
  {
    id: 'c-4',
    name: 'historical',
  },
];

const BASE_URL = 'http://localhost:3000';

export const getMovies = () => {
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(MOVIE_DATA);
  //     // reject('Cannot fetch data!');
  //   }, 50);
  // });

  return axios.get(`${BASE_URL}/api/v1/movies`).then((res) => res.data);
};

export const getMovieById = (id) => {
  return axios.get(`${BASE_URL}/api/v1/movies/${id}`).then((res) => res.data);
};

export const createMovie = (movie) => {
  // Adding an Id
  movie.id = Math.random().toString(36).substr(2, 5);
  return axios.post(`${BASE_URL}/api/v1/movies`, movie).then((res) => res.data);
};

export const deleteMovie = (id) => {
  return axios
    .delete(`${BASE_URL}/api/v1/movies/${id}`)
    .then((res) => res.data);
};

export const updateMovie = (movie) => {
  return axios
    .patch(`${BASE_URL}/api/v1/movies/${movie.id}`, movie)
    .then((res) => res.data);
};

// categories
export const getCategories = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(CATEGORY_DATA);
    }, 50);
  });
};

export const getPosts = () => {
  return axios.get(`${BASE_URL}/api/v1/posts`).then((res) => res.data);
};
