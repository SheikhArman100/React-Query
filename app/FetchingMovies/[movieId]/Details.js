"use client";
import { addReview, getMovie } from "@/utils/queryFunctions";
import {useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";

import ReviewContainer from "./ReviewContainer";

const Details = ({ id }) => {
  const queryClient = useQueryClient()
  const [review,setReview]=useState("")
  const { data, status, error } = useQuery({
    queryKey: ["movies", id],
    queryFn: () => getMovie(id),
  });
  //console.log(data);

  //mutation for add review
  const addReviewMutation=useMutation({
    mutationFn:(newReview)=>addReview(id,newReview),
    onSuccess:()=>{
      queryClient.invalidateQueries({queryKey:["movies", id]})
    }
  })

  const handleSubmit=(e)=>{
    e.preventDefault()
    addReviewMutation.mutate({id:Math.ceil(Math.random() * 1000000), review:review})
    setReview("")

  }

  if (status === "loading") return <div>Loading......</div>;
  if (status === "error") return <div>${error}</div>;
  return (
    <>
      <div className="mt-6  md:flex md:justify-center  md:gap-x-8">
        <Image
          height="800"
          width="800"
          alt="movie details"
          src={data.image}
          className="md:w-[24rem] md:aspect-[9/11] rounded"
        />

        <div className="mt-2 md:w-[50%] flex flex-col ">
          <div className="flex items-center justify-start">
            <small className="py-1 px-2 rounded bg-gray-500">
              {data.rating}
            </small>
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
            <form className="flex items-center w-full justify-between gap-x-2 mt-1" onSubmit={handleSubmit}>
              <input
                placeholder="add a review"
                className="flex-1 border border-gray-700 bg-transparent py-1 px-2 rounded"
                value={review}
                onChange={(e)=>setReview(e.target.value)}
              />
              <button className="py-2 px-4 md:px-8 bg-purple-600 rounded">
                <FaLocationArrow className="transform rotate-45" />
              </button>
            </form>
            <div className="flex flex-col items-start gap-y-3 mt-3">
              {data.reviews?.map((review)=><ReviewContainer key={review.id} review={review.review} />)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
