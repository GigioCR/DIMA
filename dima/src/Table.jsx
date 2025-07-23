import React from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell
} from "@/components/ui/table";
import { Calendar, Clock } from "lucide-react";

// Data for the table
const data = [
  { actividad: "Primera Inscripción (concurso ordinario)", fecha: "16 al 22 de Enero del 2025" },
  { actividad: "Segunda Inscripción (admisión diferida)", fecha: "23 al 29 de Enero del 2025" },
  { actividad: "Primera Aplicación del DiMa (inscripción 1)", fecha: "31 de Enero al 1 de Febrero 2025" },
  { actividad: "Segunda Aplicación del DiMa", fecha: "17 al 18 de Febrero del 2025" },
  { actividad: "Comunicación de Resultados a la Oficina de Registro e Información", fecha: "21 de Febrero del 2025" },
];

export function ActivitiesTable() {
  return (
    <div className="w-full max-w-6xl flex flex-col items-center justify-center mt-20 px-4">
      <div className="text-center mb-12">
        <h1 className="text-[#3E49C4] text-3xl md:text-4xl font-bold mb-4 tracking-tight">Fechas Importantes</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-[#3E49C4] to-sky-500 mx-auto rounded-full"></div>
      </div>
      
      <div className="w-full relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl"></div>
        <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/50 overflow-hidden">
          <Table className="bg-transparent">
            <TableHeader>
              <TableRow className="border-b border-gray-200/50 bg-gradient-to-r from-[#3E49C4]/5 to-sky-500/5">
                <TableHead className="font-bold text-[#3E49C4] text-lg py-6 px-8">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5" />
                    Actividad
                  </div>
                </TableHead>
                <TableHead className="font-bold text-[#3E49C4] text-lg py-6 px-8">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5" />
                    Fecha
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((row, idx) => (
                <TableRow 
                  key={idx} 
                  className="border-b border-gray-100/50 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-indigo-50/50 transition-all duration-300 ease-out group"
                >
                  <TableCell className="whitespace-normal break-words py-6 px-8 text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#3E49C4] rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                      {row.actividad}
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-normal break-words py-6 px-8 text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{row.fecha}</span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
