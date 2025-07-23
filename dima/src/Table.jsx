import React from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell
} from "@/components/ui/table";

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
    <div className="w-full max-w-5xl flex flex-col items-center justify-center mt-12">
      <div>
        <h1 className="text-[#3E49C4] text-3xl font-bold mb-4 text-center">Fechas Importantes</h1>
      </div>
      <div className="border">
        <Table className="bg-white border-gray-300">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Actividad</TableHead>
              <TableHead className="font-bold">Fecha</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, idx) => (
              <TableRow key={idx}>
                <TableCell className="whitespace-normal break-words">{row.actividad}</TableCell>
                <TableCell className="whitespace-normal break-words">{row.fecha}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>

  );
}
