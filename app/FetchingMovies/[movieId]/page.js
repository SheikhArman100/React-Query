import getQueryClient from "@/lib/react-query/getQueryClient";
import { getMovie } from "@/utils/queryFunctions";
import { Hydrate, dehydrate } from "@tanstack/react-query";
import React from "react";
import Details from "./Details";

const MovieDetails = async ({ params }) => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["movies", params.movieId], getMovie(params.movieId));
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <div className=" flex flex-col items-center md:px-8">
        <h1 className="text-2xl font-bold">Movie Details</h1>
        <Details id={params.movieId}/>
      </div>
    </Hydrate>
  );
};

export default MovieDetails;
