import Image from "next/image";
import tag from "@/public/tag.svg";
import star from "@/public/star.svg";
import genreMapping from "../data/genreID";
import Link from "next/link";

export default function MovieCard({ movie }) {
  const { title, vote_average, poster_path, genre_ids } = movie;
  let rating = vote_average / 2;
  const genres = genre_ids.map((id) => genreMapping[id]).join("/");
  return (
    <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
      <Image
        className="object-cover"
        width={0}
        height={0}
        src={poster_path}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        alt="poster"
      />
      <figcaption className="pt-4">
        <h3 className="text-xl mb-1">{title}</h3>
        <p className="text-[#575A6E] text-sm mb-2">{genres}</p>
        <div className="flex items-center space-x-1 mb-5">
          {Array(Math.floor(rating))
            .fill()
            .map((_, index) => (
              <Image
                key={index}
                src={star}
                width={14}
                height={14}
                alt={`Star ${index + 1}`}
              />
            ))}
          {rating % 1 >= 0.5 && (
            <Image src={star} width={14} height={14} alt="Star" />
          )}
        </div>
        <Link
          className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
          href="./modal.html"
        >
          <Image src={tag} alt="" />
          <span>Details</span>
        </Link>
      </figcaption>
    </figure>
  );
}
