import React from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell
} from "@/components/ui/table";
import { BookOpen, Calculator } from "lucide-react";
import { SectionHeader } from "../../shared";
import { curriculumData } from "../../../data/data";

export function CurriculumTable() {
  return (
    <div className="w-full max-w-6xl flex flex-col items-center justify-center mt-20 px-4">
      <SectionHeader title="Contenidos del Exámen DIMA" />
      
      <div className="w-full relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl"></div>
        <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/50 overflow-hidden">
          <Table className="bg-transparent">
            <TableHeader>
              <TableRow className="border-b border-gray-200/50 bg-gradient-to-r from-[#3E49C4]/5 to-sky-500/5">
                <TableHead className="font-bold text-[#3E49C4] text-lg py-6 px-8 w-1/4">
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5" />
                    Materia
                  </div>
                </TableHead>
                <TableHead className="font-bold text-[#3E49C4] text-lg py-6 px-8 w-3/8">
                  <div className="flex items-center gap-3">
                    Sección 1
                  </div>
                </TableHead>
                <TableHead className="font-bold text-[#3E49C4] text-lg py-6 px-8 w-3/8">
                  <div className="flex items-center gap-3">
                    Sección 2
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {curriculumData.map((subject, idx) => (
                <TableRow 
                  key={idx} 
                  className="border-b border-gray-100/50 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-indigo-50/50 transition-all duration-300 ease-out group"
                >
                  <TableCell className="whitespace-normal break-words py-6 px-8 text-gray-700 font-bold group-hover:text-gray-900 transition-colors duration-300 align-top">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#3E49C4] rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                      {subject.subject}
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-normal break-words py-6 px-8 text-gray-600 group-hover:text-gray-800 transition-colors duration-300 align-top">
                    <ul className="space-y-2">
                      {subject.section1.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2">
                          <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </TableCell>
                  <TableCell className="whitespace-normal break-words py-6 px-8 text-gray-600 group-hover:text-gray-800 transition-colors duration-300 align-top">
                    <ul className="space-y-2">
                      {subject.section2.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2">
                          <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
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
