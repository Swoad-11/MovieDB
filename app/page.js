"use client";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useTheme } from "./hooks/useTheme";

export default function Home() {
  const { isDarkTheme } = useTheme();
  return (
    <main
      className={`${
        isDarkTheme ? "text-dark bg-white" : "text-white bg-body"
      } font-[Sora]`}
    >
      <Navbar />
      <Sidebar />
    </main>
  );
}
