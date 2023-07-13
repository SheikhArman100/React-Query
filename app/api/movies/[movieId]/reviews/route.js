import { headers } from "next/dist/client/components/headers";
import movieData from "../../../../../utils/movieData.json";
import { NextResponse } from "next/server";

export async function POST(req, { params }) {
  //request is not used.But without it, we could not access params.movieId
  const movies = movieData.movies;

  const movieId = Number(params.movieId); //access url params

  const movie = movies.find((movie) => movie.id === movieId);

  const {id,review}=await req.json()
  movie.reviews.unshift({id,review})

  return NextResponse.json(movie.reviews)
}
