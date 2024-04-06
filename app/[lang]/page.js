"use client";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useTheme } from "../hooks/useTheme";
import movieList from "../data/data";
import MovieList from "../components/MovieList";
import Footer from "../components/Footer";

export default function Home() {
  const { isDarkTheme } = useTheme();
  return (
    <body
      className={`${
        isDarkTheme ? "text-dark bg-white" : "text-white bg-body"
      } font-[Sora]`}
    >
      <Navbar />
      <main>
        <div class="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MovieList movies={movieList?.results} />
        </div>
      </main>
      <Footer isDarkTheme={isDarkTheme} />
    </body>
  );
}
