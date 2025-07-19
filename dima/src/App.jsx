import React from "react";
import { Navbar } from "./Navbar";
import { Carousel } from "./Carousel";
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main className="flex bg-gray-100 flex-col items-center justify-center min-h-screen bg-background">
        <Carousel />
        <h1 className="text-3xl font-bold mt-8 mb-4 text-primary">Bienvenido a la página del DIMA</h1>
      </main>
    </>
  );
}

export default App;
