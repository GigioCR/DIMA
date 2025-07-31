import React from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell
} from "@/components/ui/table";
import { SectionHeader } from "./index";

export function ReusableTable({ 
  title, 
  headers, 
  data, 
  renderRow,
  maxWidth = "max-w-6xl",
  className = ""
}) {
  return (
    <div className={`w-full ${maxWidth} flex flex-col items-center justify-center mt-20 px-4 ${className}`}>
      <SectionHeader title={title} />
      
      <div className="w-full relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl"></div>
        <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/50 overflow-hidden">
          <Table className="bg-transparent">
            <TableHeader>
              <TableRow className="border-b border-gray-200/50 bg-gradient-to-r from-[#3E49C4]/5 to-sky-500/5">
                {headers.map((header, idx) => (
                  <TableHead 
                    key={idx} 
                    className={`font-bold text-[#3E49C4] text-lg py-6 px-8 ${header.className || ''}`}
                  >
                    <div className="flex items-center gap-3">
                      {header.icon && header.icon}
                      {header.label}
                    </div>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item, idx) => (
                <TableRow 
                  key={idx} 
                  className="border-b border-gray-100/50 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-indigo-50/50 transition-all duration-300 ease-out group"
                >
                  {renderRow(item, idx)}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
