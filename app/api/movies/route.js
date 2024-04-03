import { v4 as uuidv4 } from "uuid";
import movieList from "@/app/data/data";

export async function GET() {
  return Response.json(movieList);
}

export async function POST(request) {
  const movie = await request.json();
  const uniqueId = uuidv4();
  const newMovie = {
    id: uniqueId,
    adult: movie.adult,
    backdrop_path: movie.backdrop_path,
    genre_ids: movie.genre_ids,
    original_language: movie.original_language,
    original_title: movie.original_title,
    overview: movie.overview,
    popularity: movie.popularity,
    poster_path: movie.poster_path,
    release_date: movie.release_date,
    title: movie.title,
    video: movie.video,
    vote_average: movie.vote_average,
    vote_count: movie.vote_count,
  };
  movieList.results.push(newMovie);

  return new Response(JSON.stringify(newMovie), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
