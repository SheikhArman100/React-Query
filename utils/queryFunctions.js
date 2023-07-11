import axios from "axios";

const movieApi=axios.create({
  baseURL:"http://localhost:3200"
})
const wait=(value)=>{
  return new Promise(resolve,value)
}

export const getMovies = async () => {
  const res = await movieApi.get("/movies");
  return res.data
};

export const getMovie = async (movieId) => {
  const res = await movieApi.get(`/movies/${movieId}`);
  return res.data
}



