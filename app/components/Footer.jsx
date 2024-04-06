export default function Footer({ isDarkTheme }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 md:py-8 mt-8">
      <div className="container mx-auto">
        <p
          className={`text-center text-sm ${
            isDarkTheme ? "text-black" : "text-slate-400"
          }  `}
        >
          Copyright {currentYear} | All rights reserved by Learn with Sumit
        </p>
      </div>
    </footer>
  );
}
