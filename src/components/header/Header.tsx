"use client"; //utilizar sempre que for utilizar algum hook do react para carrecgar do lado do cliente e nao no servidor

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MdMenu, MdOutlineOpenInNew } from "react-icons/md";

export const Header = () => {
  const [title, setTitle] = useState('CodarSe');
  const [drawer, setDrawer] = useState(false); //definindo se o drawer está aberto ou fechado. Inicializará fechado.
  const currentPath = usePathname();

  useEffect(() => {
    setTitle(document.title);
    setDrawer(false); //quando for alterado a rota, drawer será fechado automaticamente
  }, [currentPath]) //analisa sempre que o caminho alterar baseado no currentpath para alterar o titulo sempre que alternar entre páginas

  useEffect(() =>{

  },[])

  return (
    <nav className="flex items-center gap-6 justify-start md:justify-center bg-primary py-4 sm:py-4 px-6">
      <button className="sm:hidden" onClick={() => setDrawer(true)}>  {/* abre o drawer no onclick */}
        <MdMenu size={24} />
      </button>
      <ul className="flex gap-4 items-center" tabIndex={drawer ? -1 : undefined}>  {/* se drawer está aberto, tabindex será -1 e não irá constar ao clicar tab, se não será undefined */}
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
      
      {/* Drawer */}
      <div 
        data-open={drawer}
        tabIndex={drawer ? undefined : -1}
        onClick={() => setDrawer(false)} // fecha o drawer quando clicado na div/gradiente da aplicação
        className="bg-gradient-to-r from-background fixed top-0 left-0 bottom-0 right-0 transition-transform data-[open=false]:-translate-x-full">
        <ul className="flex flex-col p-4 w-60 h-full gap-4 bg-background" onClick={event => event.stopPropagation()}>  {/* para a propagação do onclick dentro desta UL */}
          <li className="">
            <Link
              href="/"
              data-active={currentPath === "/"}
              className="data-[active=true]:underline"
            >
              Página inicial
            </Link>
          </li>
          <li className="">
            <Link
              href="/cursos"
              data-active={currentPath === "/cursos"}
              className="data-[active=true]:underline"
            >
              Cursos
            </Link>
          </li>
          <li className="">
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
      </div>
      <h1 className="">
        {title}
      </h1>
    </nav>
  );
};
