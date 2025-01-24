"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Breadcrumbs = () => {
  const pathname = usePathname();
  const crumbs = pathname.split("/").filter(Boolean);

  return (
    <nav aria-label="breadcrumbs" className="p-4 backdrop-blur-md bg-white/80 rounded-lg shadow-sm max-w-[1256px] mx-auto">
      <ol className="flex flex-wrap items-center space-x-2">
        <li>
          <Link href="/">
            <span className="text-gray-600 hover:text-sky-600 text-sm md:text-base transition-colors duration-200">
              Home
            </span>
          </Link>
        </li>

        {crumbs.map((crumb, index) => (
          <li key={index} className="flex items-center">
            <span className="text-gray-400 mx-2">/</span>

            {index === crumbs.length - 1 ? (
              <span className="text-sky-600 font-semibold text-sm md:text-base">
                {crumb}
              </span>
            ) : (
              <Link href={`/${crumbs.slice(0, index + 1).join("/")}`}>
                <span className="text-gray-600 hover:text-sky-600 text-sm md:text-base transition-colors duration-200">
                  {crumb}
                </span>
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;