import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import movieList from "../data/data";
import MovieList from "../components/MovieList";
import Footer from "../components/Footer";

export default function Home({ params: { lang } }) {
  return (
    <>
      <Navbar lang={lang} />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MovieList movies={movieList?.results} />
        </div>
      </main>
      <Footer />
    </>
  );
}
