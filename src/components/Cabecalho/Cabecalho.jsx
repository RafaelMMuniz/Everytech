"use client";
import Link from "next/link";
import Image from "next/image";

export default function Cabecalho() {

  if (sessionStorage.getItem("token-user")) {
    return (
      
      <header className="bg-009ff7 text-white text-center">

        <div className="mx-auto max-w-2xl">   
        <Image src="/portoLogo.png" alt="Logo da Porto Seguro" width={320} height={100}/>
        <hr className="bg-blue-500 border border-red-700" />
        <nav className="menu">
          <ul>
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="/login">LOGIN</Link>
            </li>
            <li>
              <Link href="">Atendimento</Link>
            </li>
            <li>
              <Link href="/user-pages">Perfil</Link>
            </li>
          </ul>
        </nav>
        </div>
      </header>
    );
  } else {
    return (
      <header className="bg-white text-azulPorto text-center">
        <div className="mx-auto max-w-2xl flex items-center justify-center flex-col">
        <Image src="/portoLogo.png" alt="Logo da Porto Seguro" width={320} height={100}/>
        <nav className="menu">
          <ul>
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="/login">LOGIN</Link>
            </li>
          </ul>
        </nav>
        </div>
      </header>
    );
  }
}
