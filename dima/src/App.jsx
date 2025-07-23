import React from "react";
import { Navbar } from "./Navbar";
import { Carousel } from "./Carousel";
import { ActivitiesTable } from "./Table";
import { Footer } from "./Footer";
import { ExamAppointmentCard } from "./ExamAppointmentCard";
import { PasosParaInscribirse } from "./PasosParaInscribirse";
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main className="flex bg-gray-100 flex-col items-center justify-center min-h-screen bg-background overflow-x-hidden">
        {/* <div className="w-full max-w-5xl flex flex-col items-center justify-center mt-4"> */}
          <Carousel />
        {/* </div> */}
        <ActivitiesTable />
        <ExamAppointmentCard />
        <PasosParaInscribirse />
        <Footer />
      </main>
    </>
  );
}

export default App;
