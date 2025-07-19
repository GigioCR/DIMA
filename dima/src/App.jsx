import React from "react";
import { Navbar } from "./Navbar";
import { Carousel } from "./Carousel";
import { ActivitiesTable } from "./Table";
import { Footer } from "./Footer";
import { ExamAppointmentCard } from "./ExamAppointmentCard";
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main className="flex bg-gray-100 flex-col items-center justify-center min-h-screen bg-background">
        <div className="w-full max-w-5xl flex flex-col items-center justify-center mt-4">
          <Carousel />
        </div>
        <div className="w-full max-w-5xl flex flex-col items-center justify-center mt-12">
          <div>
            <h1 className="text-[#3E49C4] text-3xl font-bold mb-4 text-center">Fechas Importantes</h1>
          </div>
          <div className="border">
            <ActivitiesTable />
          </div>
        </div>
        <ExamAppointmentCard />
        <Footer />
      </main>
    </>
  );
}

export default App;
