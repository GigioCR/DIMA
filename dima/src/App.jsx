import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { SobreNosotros } from "./SobreNosotros";
import { Carousel } from "./Carousel";
import { ActivitiesTable } from "./Table";
import { Footer } from "./Footer";
import { ExamAppointmentCard } from "./ExamAppointmentCard";
import { PasosParaInscribirse } from "./PasosParaInscribirse";
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main className="flex bg-gray-100 flex-col items-center justify-center min-h-screen bg-background overflow-x-hidden">
              <Carousel />
              <ActivitiesTable />
              <ExamAppointmentCard />
              <PasosParaInscribirse />
              <Footer />
            </main>
          } />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
