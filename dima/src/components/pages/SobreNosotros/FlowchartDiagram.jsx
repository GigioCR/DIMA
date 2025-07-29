import React from 'react';
import './FlowchartDiagram.css';

const cursos = [
    {
        nombre: "MA0001",
        descripcion: "Precálculo"
    },
    {
        nombre: "MA0002",
        descripcion: "Álgebra Elemental"
    },
    {
        nombre: "MA0101",
        descripcion: "Matemática de Ingreso"
    },
    {
        nombre: "MA0150",
        descripcion: "Principios de Matemática"
    },
    {
        nombre: "MA1001",
        descripcion: "Cálculo I"
    },
    {
        nombre: "MA1021",
        descripcion: "Cálculo para Ciencias Económicas"
    },
    {
        nombre: "MA0291",
        descripcion: "Introducción a la Matemática para Computación"
    },
    {
        nombre: "MA0320",
        descripcion: "Estructuras Matemáticas Discretas"
    },
    {
        nombre: "MA1101",
        descripcion: "Cálculo"
    },
    {
        nombre: "MA1210",
        descripcion: "Cálculo para Ciencias de la Salud"
    }
]

export function FlowchartDiagram() {
  return (
    <div className="w-full max-w-7xl mx-auto p-8">
      <div className="flowchart-container">
        {/* Title Box */}
        <div className="flex justify-center mb-12">
          <div className="flowchart-box-primary shadow-xl">
            <span className="text-white font-bold text-lg">¿Quiénes deben realizar el DiMa?</span>
          </div>
        </div>

        {/* Arrow down */}
        <div className="flex justify-center mb-10">
          <div className="arrow-down-modern"></div>
        </div>

        {/* Es recomendable cuando */}
        <div className="flex justify-center mb-12">
          <div className="flowchart-box-primary shadow-xl">
            <span className="text-white font-bold text-lg">Es recomendable cuando</span>
          </div>
        </div>

        {/* Arrow down */}
        <div className="flex justify-center mb-10">
          <div className="arrow-down-modern"></div>
        </div>

        {/* Large course list box */}
        <div className="flex justify-center mb-12">
          <div className="flowchart-box-info shadow-2xl max-w-3xl">
            <div className="text-center mb-6">
              <span className="font-bold text-gray-800 text-xl leading-relaxed">
                El plan de estudios de la persona estudiante incluye alguno de los siguientes cursos
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {cursos.map((curso, index) => (
                <div key={index} className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-lg p-3 border-l-4 border-sky-500 shadow-sm">
                  <span className="font-semibold text-sky-700">{curso.nombre}</span>
                  <span className="text-gray-700 ml-2">- {curso.descripcion}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Arrow down */}
        <div className="flex justify-center mb-10">
          <div className="arrow-down-modern"></div>
        </div>

        {/* La persona estudiante realiza el DiMa */}
        <div className="flex justify-center mb-12">
          <div className="flowchart-box-primary shadow-xl">
            <span className="text-white font-bold text-lg">La persona estudiante realiza el DiMa</span>
          </div>
        </div>

        {/* Split into two paths */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-12">
          {/* Diverging arrows container */}
          <div className="col-span-full flex justify-center mb-8">
            <div className="diverging-arrows-container">
              <div className="diverging-arrow-left"></div>
              <div className="diverging-arrow-right"></div>
            </div>
          </div>
          
          {/* Left path - Aprueba */}
          <div className="flex flex-col items-center space-y-8">
            <div className="flowchart-box-success shadow-xl">
              <span className="text-white font-bold text-lg">Aprueba</span>
            </div>
            <div className="arrow-down-success"></div>
            <div className="flowchart-box-neutral shadow-lg">
              <span className="font-semibold text-gray-800">Si obtiene una calificación igual o superior a 7</span>
            </div>
            <div className="arrow-down-success"></div>
            <div className="flowchart-box-success shadow-xl">
              <span className="text-white font-bold text-lg">Entonces</span>
            </div>
            <div className="arrow-down-success"></div>
            <div className="flowchart-box-result shadow-lg">
              <span className="font-semibold text-gray-800 leading-relaxed">Se le convalida por el curso MA0001 Precálculo</span>
            </div>
          </div>

          {/* Right path - Reprueba */}
          <div className="flex flex-col items-center space-y-8">
            <div className="flowchart-box-warning shadow-xl">
              <span className="text-white font-bold text-lg">Reprueba</span>
            </div>
            <div className="arrow-down-warning"></div>
            <div className="flowchart-box-neutral shadow-lg">
              <span className="font-semibold text-gray-800">Si obtiene una calificación menor a 7</span>
            </div>
            <div className="arrow-down-warning"></div>
            <div className="flowchart-box-warning shadow-xl">
              <span className="text-white font-bold">Entonces, si el plan de estudios</span>
            </div>
            
            {/* Split into two sub-paths */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 w-full">
              {/* Sub-diverging arrows container */}
              <div className="col-span-full flex justify-center mb-6">
                <div className="sub-diverging-arrows-container">
                <div className="diverging-arrow-left"></div>
                <div className="diverging-arrow-right"></div>
                </div>
              </div>
              
              {/* No incluye MA0001 */}
              <div className="flex flex-col items-center space-y-6">
                <div className="flowchart-box-secondary shadow-lg">
                  <div className="font-bold text-gray-700">No incluye</div>
                  <div className="font-bold text-sky-600">MA0001 Precálculo</div>
                </div>
                <div className="arrow-down-small-modern"></div>
                <div className="flowchart-box-result-small shadow-lg">
                  <span className="font-medium text-gray-800 leading-relaxed">Se recomienda, al estudiante, asistir a Talleres de Nivelación.</span>
                </div>
              </div>

              {/* Incluye MA0001 */}
              <div className="flex flex-col items-center space-y-6">
                <div className="flowchart-box-primary-small shadow-lg">
                  <div className="font-bold text-white">Incluye</div>
                  <div className="font-bold text-white">MA0001 Precálculo</div>
                </div>
                <div className="arrow-down-small-modern"></div>
                <div className="flowchart-box-result-small shadow-lg">
                  <span className="font-medium text-gray-800 leading-relaxed">El estudiante debe matricular MA0001 Precálculo excepto los que tengan el curso MA0002 Álgebra Elemental.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
