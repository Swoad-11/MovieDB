import Image from "next/image";
import { getMovieById } from "../[lang]/movies";
import { getDictionary } from "../[lang]/dictionaries";

const MovieDetails = async ({ id, lang }) => {
  const movie = await getMovieById(id);

  if (!movie) {
    return;
  }

  const {
    poster_path,
    title,
    vote_average,
    vote_count,
    popularity,
    overview,
    release_date,
  } = movie;

  const dictionary = await getDictionary(lang);

  return (
    <section>
      <div>
        <Image
          className="object-cover"
          width={0}
          height={300}
          src={poster_path}
          sizes="100vw"
          style={{ width: "100%" }}
          alt="poster"
        />
      </div>

      <div className="grid grid-cols-12 py-12 gap-8">
        <div className="col-span-2">
          <Image
            src={poster_path}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "auto", height: "auto" }}
            alt=""
          />
        </div>
        <div className="col-span-8">
          <h2 className="font-bold text-slate-500 dark:text-slate-300 text-2xl">
            {title}
          </h2>
          <p className="my-2 text-slate-400  italic">{overview}</p>
          <ul className="text-slate-500 dark:text-slate-300 space-y-2 my-8">
            <li>Release Date : {release_date}</li>
            <li>Average Vote : {vote_average}</li>
            <li>Vote Count : {vote_count}</li>
            <li>Popularity : {popularity}</li>
          </ul>
        </div>
        <div className="col-span-2 space-y-4">
          <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
            {dictionary.streamInHD}
          </button>
          <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
            {dictionary.downloadInHD}
          </button>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
