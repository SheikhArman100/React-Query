import movieData from "../../../utils/movieData.json"
import { NextResponse } from "next/server";
export async function GET(){
    const movies=movieData.movies
     
      
      return NextResponse.json(movies)

}