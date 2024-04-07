import Image from "next/image";
import trending from "@/public/trending.svg";
import newRelease from "@/public/newRelease.svg";
import commingSoon from "@/public/commingSoon.svg";
import favourite from "@/public/favourite.svg";
import watchLater from "@/public/watchLater.svg";
import { getDictionary } from "../[lang]/dictionaries";

const Sidebar = async ({ lang }) => {
  const dictionary = await getDictionary(lang);
  return (
    <aside>
      <ul className="space-y-2">
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
            href="#"
          >
            <Image src={trending} width="24" height="24" alt="" />
            <span>{dictionary.trending}</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <Image src={newRelease} width="24" height="24" alt="" />
            <span>{dictionary.newReleases}</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <Image src={commingSoon} width="24" height="24" alt="" />
            <span>{dictionary.comingSoon}</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <Image src={favourite} width="24" height="24" alt="" />
            <span>{dictionary.favorites}</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <Image src={watchLater} width="24" height="24" alt="" />
            <span>{dictionary.watchLater}</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
