import React from "react";
import { Carousel } from "./Carousel";
import { ActivitiesTable } from "./Table";
import { Footer } from "./Footer";
import { ExamAppointmentCard } from "./ExamAppointmentCard";
import { PasosParaInscribirse } from "./PasosParaInscribirse";

export function Home() {
  return (
    <main className="flex bg-gray-100 flex-col items-center justify-center min-h-screen bg-background overflow-x-hidden">
      <Carousel />
      <ActivitiesTable />
      <ExamAppointmentCard />
      <PasosParaInscribirse />
      <Footer />
    </main>
  );
}
