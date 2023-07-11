"use client"
import React from "react";
import MovieCard from "../components/MovieCard";
import { useQuery } from "@tanstack/react-query";
import { getMovies } from "@/utils/queryFunctions";

const Movies = () => {
  const { data,status,error } = useQuery({ queryKey: ['movies'], queryFn: getMovies})
  //console.log(data)

  if(status==="loading")return<div>Loading......</div>
  if(status==="error")return<div>${error}</div>

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 mx-auto sm:gap-x-8 lg:gap-x-12 sm:gap-y-6  gap-x-4 gap-y-3  mt-2 sm:mt-4 place-items-center">
      {data?.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          image={movie.image}
          rating={movie.rating}
          genre={movie.genre}
          title={movie.title}
          type={movie.type}
          plot={movie.plot}
        />
      ))}
    </div>
  );
};

export default Movies;
