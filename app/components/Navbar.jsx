import Image from "next/image";
import logo from "@/public/logo.svg";
import ring from "@/public/ring.svg";
import cart from "@/public/shopping-cart.svg";
import sun from "@/public/sun.svg";
import moon from "@/public/moon.svg";
import { MdLanguage } from "react-icons/md";
import { useTheme } from "../hooks/useTheme";
import Link from "next/link";

export default function Navbar() {
  const { isDarkTheme, toggleTheme } = useTheme();
  return (
    <header>
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <Link href="/">
          <Image src={logo} width="139" height="26" alt="" />
        </Link>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className={`${
                isDarkTheme ? "bg-primary/[7%]" : "bg-primary/20"
              } rounded-lg backdrop-blur-[2px] p-1 inline-block`}
              href="#"
            >
              <Image src={ring} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <button
              className={`${
                isDarkTheme ? "bg-primary/[7%]" : "bg-primary/20"
              } rounded-lg backdrop-blur-[2px] p-1 inline-block`}
              onClick={toggleTheme}
            >
              <Image
                src={isDarkTheme ? sun : moon}
                width="24"
                height="24"
                alt=""
              />
            </button>
          </li>
          <li>
            <a
              className={`${
                isDarkTheme ? "bg-primary/[7%]" : "bg-primary/20"
              } rounded-lg backdrop-blur-[2px] p-1 inline-block`}
              href="#"
            >
              <Image src={cart} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <button
              className={`flex items-center gap-1 ${
                isDarkTheme ? "bg-primary/[7%]" : "bg-primary/20"
              } rounded-lg backdrop-blur-[2px] p-1 inline-block w-6 h-6`}
            >
              <MdLanguage /> EN
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
