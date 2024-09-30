"use client"; //utilizar sempre que for utilizar algum hook do react para carrecgar do lado do cliente e nao no servidor

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdMenu, MdOutlineOpenInNew } from "react-icons/md";

export const Header = () => {
  const currentPath = usePathname();

  return (
    <nav className="flex items-center gap-6 justify-start md:justify-center bg-primary py-2 sm:py-4 px-6">
      <button className="sm:hidden">
        <MdMenu size={24} />
      </button>
      <ul className="flex gap-4 py-4 my-2">
        <li className="">
          <Link href="/" className="border-2 rounded-md py-2 px-1 font-bold">
            CODARSE
          </Link>
        </li>
        <li className="hidden sm:block">
          <Link
            href="/"
            data-active={currentPath === "/"}
            className="data-[active=true]:underline"
          >
            Página inicial
          </Link>
        </li>
        <li className="hidden sm:block">
          <Link
            href="/cursos"
            data-active={currentPath === "/cursos"}
            className="data-[active=true]:underline"
          >
            Cursos
          </Link>
        </li>
        <li className="hidden sm:block">
          <Link
            href="https://blog.codarse.com"
            target="_blank"
            className="flex gap-1 items-center"
          >
            Blog
            <MdOutlineOpenInNew />
          </Link>
        </li>
      </ul>
      <h1 className="sm:hidden">Codar-se - Pagina Inicial</h1>
    </nav>
  );
};
