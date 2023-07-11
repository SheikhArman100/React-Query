"use client";
import { getMovie } from "@/utils/queryFunctions";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";
import {FaLocationArrow} from "react-icons/fa"

const Details = ({ id }) => {
  const { data, status, error } = useQuery({
    queryKey: ["movies", id],
    queryFn: () => getMovie(id),
  });
  console.log(data);

  if (status === "loading") return <div>Loading......</div>;
  if (status === "error") return <div>${error}</div>;
  return (
    <>
      <div className="mt-6  md:flex md:justify-center  md:gap-x-4">
        
        <Image
          height="800"
          width="800"
          alt="movie details"
          src={data.image}
          className="md:w-[24rem] md:aspect-[9/11] rounded"
        />

        <div className="mt-2 md:w-[50%] flex flex-col ">
            <div className="flex items-center justify-start">

          <small className="py-1 px-2 rounded bg-gray-500">{data.rating}</small>
            </div>
          <h3 className="mt-1 text-xl md:text-4xl font-bold">{data.title}</h3>
          <h5 className="text-sm md:text-base text-gray-600">{data.type}</h5>
           <div className="flex items-center justify-start">
                <h6 className="py-1 px-2 mt-2 text-sm md:text-base bg-white w text-black font-semibold rounded">
            {data.genre}
          </h6>
            </div>
          

          <p className="text-sm md:text-base mt-3 font-medium">{data.plot}</p>
          <div className="mt-3">
            <h4 className="text-lg font-semibold">Reviews</h4>
            <form className="flex items-center w-full justify-between gap-x-2 mt-1">
            <input placeholder="add a comment" className="flex-1 border border-gray-700 bg-transparent py-1 px-2 rounded"/>
            <button className="py-2 px-4 bg-purple-600 rounded"><FaLocationArrow/></button>

            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
