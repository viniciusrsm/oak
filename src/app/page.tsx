"use client";
import Image from "next/image";
import HomeButton from "./components/homeButton";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Image
        src="/logo_oak.jpeg"
        alt="Vercel Logo"
        className=""
        width={200}
        height={0}
        priority
      />
      <h1 className="mt-2 font-bold text-xl size">Sistema de estoque</h1>
      <div className="mt-32 flex gap-20">
        <HomeButton text="CADASTRAR PRODUTO" />
        <HomeButton text="LISTAR PRODUTOS" />
      </div>
    </main>
  );
}
