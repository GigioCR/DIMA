import React from "react";
import { TableCell } from "@/components/ui/table";
import { Calendar, Clock } from "lucide-react";
import { ReusableTable } from "../../shared/ReusableTable";
import { IMPORTANT_DATES } from "../../../data/data";

const headers = [
  {
    label: "Actividad",
    icon: <Calendar className="w-5 h-5" />
  },
  {
    label: "Fecha",
    icon: <Clock className="w-5 h-5" />
  }
];

const renderActivitiesRow = (row, idx) => (
  <>
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
  </>
);

export function ActivitiesTable() {
  return (
    <div className="w-full max-w-6xl flex flex-col items-center justify-center mt-20 px-4">
      <ReusableTable
        title="Fechas Importantes"
        headers={headers}
        data={IMPORTANT_DATES}
        renderRow={renderActivitiesRow}
      />
    </div>
  );
}
