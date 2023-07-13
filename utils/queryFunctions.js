import axios from "axios";

const movieApi=axios.create({
  baseURL:"http://localhost:3000/api"
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



export const addReview=async(movieId,review)=>{
  return await movieApi.post(`/movies/${movieId}/reviews`,review)
}



