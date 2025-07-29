import React, { useState } from 'react';
import { SectionHeader } from '../../shared';
import { Footer } from '../../../Footer';
import { FeatureCard } from './FeatureCard';
import { TeamSection } from './TeamSection';
import { PersonModal } from './PersonModal';
import { features } from '../../../data/data';
import { SECCIONES_DIMA } from '../../../data/data';
import { FlowchartDiagram } from './FlowchartDiagram';
import {Header} from '../../shared/Header';

export function SobreNosotros() {
  const [selectedPerson, setSelectedPerson] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-sky-50">
    <Header title="Sobre el DIMA"/>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction Section */}
        <div className="mb-20">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 md:p-12 transition-all duration-500">
            <SectionHeader title="¿Qué es el DIMA?"/>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-lg mb-6">
                La prueba de Diagnóstico de los Aprendizajes en Matemática (DiMa) es la principal herramienta con que cuenta la Universidad de Costa Rica para determinar las condiciones académicas de la persona estudiante al ingresar a las distintas carreras que requieren cursos de matemática. Esto permite a la Escuela de Matemática realizar los ajustes necesarios que buscan coadyuvar en el avance académico de toda persona estudiante que debe participar en alguno de esos cursos.
              </p>
              <p className="text-lg mb-6">
                El DiMa, es un diagnóstico de conocimientos y destrezas matemáticas que aplica la Escuela de Matemática, cada año, a personas estudiantes de primer ingreso. Se aplica con el objetivo de conocer el grado de dominio de Precálculo. Con esta información se pretende orientar a la persona estudiante y ofrecerle algunas opciones para mejorar las posibilidades de éxito, en el primer curso de Matemática que matricule a nivel universitario. 
              </p>
            </div>
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              {features.map((feature, index) => (
                <FeatureCard key={index} feature={feature} />
              ))}
            </div>
          </div>
        </div>


        <div className="mb-20">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 md:p-12 transition-all duration-500">
            <SectionHeader title="Estructura del DiMa y Contenidos Que Evalúa"/>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                {SECCIONES_DIMA.map((feature, index) => (
                  <FeatureCard key={index} feature={feature} />
                ))}
            </div>
            <p className='mb-20 text-lg'>
                El reporte de resultado del Diagnóstico se envía a la persona estudiante a través de su correo institucional donde se detallan sus notas por secciones y Temas, además, de recomendaciones generales a considerar previo a la matrícula del curso de matemática correspondiente.

                Entre las recomendaciones se consideran el curso MA0001 Precálculo: un curso obligatorio en ciertas carreras que representa una nivelación. Lo anterior no excluye que otras unidades académicas ofrezcan más recomendaciones tomando como base el resultado del diagnóstico.
            </p>
            <SectionHeader title="Aspectos Generales del DiMa"/>
            <FlowchartDiagram/>
          </div>
        </div>
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 md:p-12 transition-all duration-500">
        {/* Team Section */}
        <TeamSection onPersonClick={setSelectedPerson} />
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
