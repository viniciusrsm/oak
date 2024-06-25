"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const router = useRouter();

  const [data, setData] = useState({
    name: "",
    value: 0,
    description: "",
    available: false,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/list");
    const { name, ...properties } = data;

    const newData = {
      ...JSON.parse(localStorage.getItem("produtos")!),
      [name]: properties,
    };

    localStorage.setItem("produtos", JSON.stringify(newData));
  };
  const isSubmitted = false;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-12">
      <h1 className="text-center self-center font-bold text-xl size">
        Cadastro de produtos
      </h1>
      <form
        id="form_lead"
        onSubmit={handleSubmit}
        className={`flex-col text-md font-semibold text-spaceblue ${
          isSubmitted ? "hidden" : "flex"
        }`}
      >
        <p>Nome do Produto</p>
        <div className="w-full h-fit bg-gradient-to-r from-[#47B368] to-[#1C8894] p-0.5 rounded-sm">
          <div className="h-full w-full bg-white">
            <input
              type="text"
              required
              autoFocus
              placeholder="Inserir nome..."
              className="w-full rounded-lg transition-all duration-300 outline-none p-2 font-medium"
              name="name"
              onChange={handleChange}
            />
          </div>
        </div>
        <p className="mt-6">Valor do produto (R$)</p>
        <div className="w-full h-fit bg-gradient-to-r from-[#47B368] to-[#1C8894] p-0.5 rounded-sm">
          <div className="h-full w-full bg-white">
            <input
              type="number"
              placeholder="Inserir valor..."
              required
              className="w-full rounded-lg transition-all duration-300 border-spaceblue outline-none p-2 font-medium"
              name="value"
              onChange={handleChange}
            />
          </div>
        </div>
        <p className="mt-6">
          Conte para nós sobre do que se trata o seu projeto
        </p>
        <div className="w-full h-fit bg-gradient-to-r from-[#47B368] to-[#1C8894] p-0.5 rounded-sm">
          <div className="h-full w-full bg-white">
            <textarea
              name="description"
              rows={2}
              style={{ resize: "vertical" }}
              placeholder="Descrever produto..."
              required
              className="w-full rounded-lg transition-all duration-300 border-spaceblue outline-none p-2 font-medium"
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <p className="mt-6">Disponível para venda</p>
        <div className="flex gap-1">
          <input
            type="radio"
            id="no"
            required
            name="available"
            value="true"
            onChange={handleChange}
          />
          <label htmlFor="yes">Sim</label>

          <input
            className="ml-10"
            type="radio"
            id="no"
            required
            name="available"
            value="false"
            onChange={handleChange}
          />
          <label htmlFor="no">Não</label>
        </div>
        <div className="flex w-full justify-center mt-6">
          <button className="transition ease-in-out duration-150 bg-gradient-to-r from-[#47B368] to-[#1C8894] hover:from-[#1C8894] hover:to-[#47B368] w-60 p-5 text-white font-semibold text-center rounded-md">
            Criar Produto
          </button>
        </div>
      </form>
    </main>
  );
}
