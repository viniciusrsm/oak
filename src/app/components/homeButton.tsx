"use client";
type HomeButtonProps = { text: string };
import Link from "next/link";

export default function HomeButton({ text }: HomeButtonProps) {
  return (
    <Link
      href={
        text == "CADASTRAR PRODUTO"
          ? {
              pathname: "/create",
            }
          : {
              pathname: "/list",
            }
      }
    >
      <button className="transition ease-in-out duration-150 bg-gradient-to-r from-[#47B368] to-[#1C8894] hover:from-[#1C8894] hover:to-[#47B368] w-60 p-5 text-white font-semibold text-center rounded-md">
        {text}
      </button>
    </Link>
  );
}
