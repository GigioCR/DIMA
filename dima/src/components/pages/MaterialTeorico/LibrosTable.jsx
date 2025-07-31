import React from "react";
import { TableCell } from "@/components/ui/table";
import { BookOpen } from "lucide-react";
import { ReusableTable } from "../../shared/ReusableTable";
import { librosData } from "../../../data/data";

const headers = [
  {
    label: "Nombre del Libro",
    icon: <BookOpen className="w-5 h-5" />,
    className: "w-1/4"
  },
  {
    label: "Autor(es)",
    className: "w-1/4"
  },
  {
    label: "Signatura",
    className: "w-1/6"
  }, 
  {
    label: "Biblioteca",
    className: "w-1/3"
  }
];

const renderLibrosRow = (libro, idx) => (
  <>
    <TableCell className="whitespace-normal break-words py-6 px-8 text-gray-700 font-bold group-hover:text-gray-900 transition-colors duration-300 align-top">
      <div className="flex items-start gap-3">
        <div className="w-2 h-2 bg-[#3E49C4] rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
        {libro.title}
      </div>
    </TableCell>
    <TableCell className="whitespace-normal break-words py-6 px-8 text-gray-600 group-hover:text-gray-800 transition-colors duration-300 align-top">
      <span className="text-sm leading-relaxed">{libro.authors}</span>
    </TableCell>
    <TableCell className="whitespace-normal break-words py-6 px-8 text-gray-600 group-hover:text-gray-800 transition-colors duration-300 align-top">
      <span className="text-sm leading-relaxed font-mono">{libro.signature}</span>
    </TableCell>
    <TableCell className="whitespace-normal break-words py-6 px-8 text-gray-600 group-hover:text-gray-800 transition-colors duration-300 align-top">
      <ul className="space-y-2">
        {libro.libraries.map((library, itemIdx) => (
          <li key={itemIdx} className="flex items-start gap-2">
            <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
            <span className="text-sm leading-relaxed">{library}</span>
          </li>
        ))}
      </ul>
    </TableCell>
  </>
);

export function LibrosTable() {
  return (
    <ReusableTable
      title="Libros de Apoyo"
      headers={headers}
      data={librosData}
      renderRow={renderLibrosRow}
    />
  );
}
