import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { getAllMovies } from "./movies";
import MovieList from "../components/MovieList";

const Home = async ({ params: { lang } }) => {
  const movies = await getAllMovies();
  return (
    <>
      <Navbar />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar lang={lang} />
          <MovieList lang={lang} movies={movies} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
