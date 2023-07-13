import movieData from "../../../../utils/movieData.json";
import { NextResponse } from "next/server";
export async function GET(request, { params }) {
  //request is not used.But without it, we could not access params.movieId
  const movies = movieData.movies;

  const movieId = Number(params.movieId); //access url params

  const movie = movies.find((movie) => movie.id === movieId);

  return NextResponse.json(movie);
}
