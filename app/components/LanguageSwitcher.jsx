"use client";
import { MdLanguage } from "react-icons/md";
import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();

  const languages = [
    {
      code: "en",
      language: "English",
    },
    {
      code: "bn",
      language: "Bangla",
    },
  ];
  const found = languages.find((lang) => pathname.includes(lang.code));
  const [selectedLanguage, setSelectedLanguage] = useState(
    found ?? languages[0]
  );
  const [showMenu, setShowMenu] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const closeDropdown = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.body.addEventListener("click", closeDropdown);

    return () => {
      document.body.removeEventListener("click", closeDropdown);
    };
  }, []);

  const handleLanguageChange = (lang) => {
    setSelectedLanguage({
      ...selectedLanguage,
      code: lang,
      language: lang === "en" ? "English" : "Bangla",
    });
    setShowMenu(false);
    router.push(`/${lang}` + pathname.slice(3));
  };

  return (
    <div className="flex gap-4 items-center text-md">
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="flex items-center gap-2 bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1"
        >
          <MdLanguage />
          <span
            className={`text-transparent bg-clip-text bg-gradient-to-br ${
              selectedLanguage.language === "Bangla"
                ? "from-green-800 via-red-600 to-green-800"
                : "from-blue-700 via-red-700 to-blue-700"
            } `}
          >
            {selectedLanguage.language}
          </span>
        </button>

        {showMenu && (
          <div className="absolute right-0 top-full mt-2 w-30 rounded-md border border- bg-white dark:bg-[#12141D] p-2 z-10 shadow-lg">
            {languages.map((entry) => (
              <button
                key={entry.code}
                onClick={() => handleLanguageChange(entry.code)}
                className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-primary dark:hover:bg-slate-400"
              >
                <MdLanguage />
                <span
                  className={` text-transparent bg-clip-text bg-gradient-to-br ${
                    entry.language === "Bangla"
                      ? "from-green-700 via-red-600 to-green-700"
                      : "from-blue-600 via-red-600 to-blue-600"
                  } `}
                >
                  {entry.language}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
