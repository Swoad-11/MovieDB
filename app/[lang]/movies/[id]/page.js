import MovieDetails from "@/app/components/MovieDetails";
import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";
import { notFound } from "next/navigation";
import { getMovieById } from "../../movies";

const MovieDetailsPage = async ({ params: { id, lang } }) => {
  const movie = await getMovieById(id);
  if (!movie) {
    notFound();
  }

  return (
    <body className="dark:bg-body bg-white font-[Sora] dark:text-white text-dark">
      <Navbar />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar lang={lang} />
          <MovieDetails id={id} lang={lang} />
        </div>
      </main>
    </body>
  );
};

export default MovieDetailsPage;
