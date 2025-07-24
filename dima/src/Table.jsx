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
import { SectionHeader } from "./components/shared";
import { IMPORTANT_DATES } from "./constants/data";

export function ActivitiesTable() {
  return (
    <div className="w-full max-w-6xl flex flex-col items-center justify-center mt-20 px-4">
      <SectionHeader title="Fechas Importantes" />
      
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
              {IMPORTANT_DATES.map((row, idx) => (
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
