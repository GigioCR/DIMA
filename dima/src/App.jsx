import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Home } from "./components/pages/Home/Home";
import { SobreNosotros } from "./components/pages/SobreNosotros/SobreNosotros";
import { Footer } from "./Footer";
import {MaterialPractico} from "./components/pages/MaterialPractico/MaterialPractico";
import { Resultados } from "./components/pages/Resultados/Resultados";
import { PreguntasFrecuentes } from "./components/pages/PreguntasFrecuentes/PreguntasFrecuentes";
import './App.css'
import { QueEvaluaElDima } from "./components/pages/QueEvaluaElDima/QueEvaluaElDima";
import { MaterialTeorico } from "./components/pages/MaterialTeorico/MaterialTeorico";
import { ScrollToTop } from "./components/shared/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main>
              <Home/>
            </main>
          } />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/resultados" element={<Resultados />} />
          <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
          <Route path="/material-practico" element ={<MaterialPractico/>}/>
          <Route path="/que-evalua" element={<QueEvaluaElDima />} />
          <Route path="/material-teorico" element={<MaterialTeorico/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
