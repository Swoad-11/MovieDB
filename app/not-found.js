import Link from "next/link";

export default function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200 dark:bg-body">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-4">
          Page Not Found
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-400 mb-8">
          The page you are requesting was not found!
        </p>
        <Link
          href={"/"}
          className="bg-primary/70 hover:bg-primary text-white px-6 py-3 rounded-md shadow-md transition-colors duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
