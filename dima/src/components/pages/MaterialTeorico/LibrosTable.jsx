import React from "react";
import { TableCell } from "@/components/ui/table";
import { BookOpen } from "lucide-react";
import { ReusableTable } from "../../shared/ReusableTable";
import { librosData } from "../../../data/data";

const headers = [
  {
    label: "Nombre del Libro",
    icon: <BookOpen className="w-5 h-5" />,
    className: "w-2/5 md:w-1/4"
  },
  {
    label: "Autor(es)",
    className: "hidden md:table-cell md:w-1/4"
  },
  {
    label: "Signatura",
    className: "hidden lg:table-cell lg:w-1/6"
  }, 
  {
    label: "Biblioteca",
    className: "w-3/5 md:w-1/3 lg:w-1/3"
  }
];

const renderLibrosRow = (libro, idx) => (
  <>
    <TableCell className="whitespace-normal break-words py-4 px-3 md:py-6 md:px-8 text-gray-700 font-bold group-hover:text-gray-900 transition-colors duration-300 align-top">
      <div className="flex items-start gap-2 md:gap-3">
        <div className="w-2 h-2 bg-[#3E49C4] rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
        <div>
          <div className="text-sm md:text-base">{libro.title}</div>
          {/* Show author on mobile */}
          <div className="md:hidden mt-2 text-xs text-gray-600 font-normal">
            <strong>Autor:</strong> {libro.authors}
          </div>
          {/* Show signature on mobile and tablet */}
          <div className="lg:hidden mt-1 text-xs text-gray-500 font-mono font-normal">
            <strong>Signatura:</strong> {libro.signature}
          </div>
        </div>
      </div>
    </TableCell>
    
    {/* Author column - hidden on mobile */}
    <TableCell className="hidden md:table-cell whitespace-normal break-words py-4 px-3 md:py-6 md:px-8 text-gray-600 group-hover:text-gray-800 transition-colors duration-300 align-top">
      <span className="text-sm leading-relaxed">{libro.authors}</span>
    </TableCell>
    
    {/* Signature column - hidden on mobile and tablet */}
    <TableCell className="hidden lg:table-cell whitespace-normal break-words py-4 px-3 lg:py-6 lg:px-8 text-gray-600 group-hover:text-gray-800 transition-colors duration-300 align-top">
      <span className="text-sm leading-relaxed font-mono">{libro.signature}</span>
    </TableCell>
    
    <TableCell className="whitespace-normal break-words py-4 px-3 md:py-6 md:px-8 text-gray-600 group-hover:text-gray-800 transition-colors duration-300 align-top">
      <ul className="space-y-1 md:space-y-2">
        {libro.libraries.map((library, itemIdx) => (
          <li key={itemIdx} className="flex items-start gap-1 md:gap-2">
            <span className="w-1 h-1 bg-gray-400 rounded-full mt-1.5 md:mt-2 flex-shrink-0"></span>
            <span className="text-xs md:text-sm leading-relaxed">{library}</span>
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
