import getQueryClient from "@/lib/react-query/getQueryClient";
import { getMovies } from "@/utils/queryFunctions";
import { Hydrate, dehydrate } from "@tanstack/react-query";
import React from "react";
import Movies from "./Movies";

const FetchingProducts = async () => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["movies"], getMovies);
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <div className='w-full flex flex-col items-center gap-y-3'>
        <h1 className="text-2xl font-bold">Movies</h1>
        <Movies/>
      </div>
    </Hydrate>
  );
};

export default FetchingProducts;
