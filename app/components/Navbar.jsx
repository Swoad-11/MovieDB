"use strict";
import Image from "next/image";
import logo from "@/public/logo.svg";
import ring from "@/public/ring.svg";
import cart from "@/public/shopping-cart.svg";
import sun from "@/public/sun.svg";
import moon from "@/public/moon.svg";
import { MdLanguage } from "react-icons/md";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  return (
    <header>
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <Link href="/">
          <Image src={logo} width="139" height="26" alt="" />
        </Link>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <Image src={ring} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <ThemeSwitcher />
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <Image src={cart} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <button className="flex items-center gap-2 bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1">
              <MdLanguage />
              EN
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
