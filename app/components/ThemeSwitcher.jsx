"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Sun from "@/public/sun.svg";
import Moon from "@/public/moon.svg";
import Image from "next/image";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button
          onClick={() => setTheme("light")}
          className={`rounded-lg backdrop-blur-[2px] p-1 inline-block dark:bg-primary/20 bg-primary/[7%]`}
        >
          <Image src={Sun} width="24" height="24" alt="" />
        </button>
      );
    } else {
      return (
        <button
          onClick={() => setTheme("dark")}
          className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
        >
          <Image src={Moon} width="24" height="24" alt="" />
        </button>
      );
    }
  };

  return <>{renderThemeChanger()}</>;
};

export default ThemeSwitcher;
