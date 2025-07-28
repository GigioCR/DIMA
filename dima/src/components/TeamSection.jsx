import React from 'react';
import { PersonCard } from './PersonCard';
import { SectionHeader } from './shared';
import { coordinacionGeneral, investigadores } from '../data/teamData';

export function TeamSection({ onPersonClick }) {
  return (
    <div className="mb-20">
      <div className="text-center mb-16">
        <SectionHeader title="Encargados Del Proyecto"/>
      </div>

      {/* Coordinación General */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold text-[#3E49C4] mb-8 text-center">
          Coordinación General
        </h3>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 gap-8 max-w-md">
            {coordinacionGeneral.map((person, index) => (
              <PersonCard 
                key={index} 
                person={person} 
                onClick={onPersonClick} 
              />
            ))}
          </div>
        </div>
      </div>

      {/* Investigadores Participantes */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold text-[#3E49C4] mb-8 text-center">
          Investigadores Participantes
        </h3>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
            {investigadores.map((person, index) => (
              <PersonCard 
                key={index} 
                person={person} 
                onClick={onPersonClick} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
