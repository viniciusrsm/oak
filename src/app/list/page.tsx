"use client";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [list, setList] = useState<{
    [key: string]: { [key: string]: string };
  }>({});

  useEffect(() => {
    const productObject: { [key: string]: { [key: string]: string } } =
      JSON.parse(localStorage.getItem("produtos")!);

    let objectSorted: { [key: string]: { [key: string]: string } } = {};

    let sortable: [string, string][] = [];
    for (var product in productObject) {
      sortable.push([product, productObject[product]["value"]]);
    }

    sortable.sort(function (a, b) {
      return +a[1] - +b[1];
    });

    sortable.forEach(function (item) {
      objectSorted[item[0]] = productObject[item[0]];
    });

    setList(objectSorted);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-12">
      <div className="flex justify-center items-center gap-2 md:gap-0 w-full flex-col md:justify-evenly md:flex-row">
        <span className="w-0 md:w-[33%]"></span>
        <h1 className="w-full md:w-[34%] text-center self-center font-bold text-xl size">
          Lista de Produtos
        </h1>
        <span className="w-full md:w-[33%] flex justify-center md:justify-end">
          <Link href={{ pathname: "/create" }}>
            <button className="mr-0 self-end transition ease-in-out duration-150 bg-gradient-to-r from-[#47B368] to-[#1C8894] hover:from-[#1C8894] hover:to-[#47B368] w-44 p-5 text-white font-semibold text-center rounded-md">
              Criar Produto
            </button>
          </Link>
        </span>
      </div>
      <TableContainer component={Paper} className="shadow-lg">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow className="bg-gradient-to-r from-[#47B368] to-[#1C8894]">
              <TableCell sx={{ color: "white", fontWeight: 700 }}>
                Nome do produto
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: 700 }} align="right">
                Valor do produto (R$)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(list).map((row) => (
              <TableRow
                key={row}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row}
                </TableCell>
                <TableCell align="right">{list[row]["value"]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </main>
  );
}
