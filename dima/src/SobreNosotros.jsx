import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SectionHeader } from './components/shared';
import { Footer } from './Footer';
import { FeatureCard } from './components/FeatureCard';
import { TeamSection } from './components/TeamSection';
import { PersonModal } from './components/PersonModal';
import { features } from './data/featuresData';

export function SobreNosotros() {
  const navigate = useNavigate();
  const [selectedPerson, setSelectedPerson] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-sky-50">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-sky-600 to-blue-700">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Sobre el DIMA
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction Section */}
        <div className="mb-20">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 md:p-12 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
            <SectionHeader title="¿Qué es el DIMA?"/>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-xl mb-6">
                La prueba de Diagnóstico de los Aprendizajes en Matemática (DiMa) es la principal herramienta con que cuenta la Universidad de Costa Rica para determinar las condiciones académicas de la persona estudiante al ingresar a las distintas carreras que requieren cursos de matemática. Esto permite a la Escuela de Matemática realizar los ajustes necesarios que buscan coadyuvar en el avance académico de toda persona estudiante que debe participar en alguno de esos cursos.
              </p>
              <p className="text-lg mb-6">
                El DiMa, es un diagnóstico de conocimientos y destrezas matemáticas que aplica la Escuela de Matemática, cada año, a personas estudiantes de primer ingreso. Se aplica con el objetivo de conocer el grado de dominio de Precálculo. Con esta información se pretende orientar a la persona estudiante y ofrecerle algunas opciones para mejorar las posibilidades de éxito, en el primer curso de Matemática que matricule a nivel universitario. 
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>

        {/* Team Section */}
        <TeamSection onPersonClick={setSelectedPerson} />

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-sky-500/10 to-blue-500/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-sky-200/50 shadow-lg">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              ¿Tienes Preguntas?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Nuestro equipo está aquí para ayudarte. Contáctanos para obtener más 
              información sobre el DIMA y cómo puede beneficiar tu proceso de aprendizaje.
            </p>
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:from-sky-600 hover:to-blue-700"
            >
              Volver al Inicio
              <ArrowLeft className="w-5 h-5 rotate-180" />
            </button>
          </div>
        </div>
      </div>

      {/* Person Modal */}
      <PersonModal 
        person={selectedPerson} 
        onClose={() => setSelectedPerson(null)} 
      />

      <Footer/>
      
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}
