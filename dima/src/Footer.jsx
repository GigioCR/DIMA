import React from "react";

const links = [
  { label: "Mediación Virtual", href: "#mediacion" },
  { label: "Escuela de matemática", href: "#escuela" },
  { label: "Matem", href: "#matem" },
];

export function Footer() {
  return (
    <footer className="w-full bg-[#181A20] text-white py-8 px-4 border-t border-[#3E49C4] mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Contact Info */}
        <div className="flex-1 mb-6 md:mb-0">
          <h2 className="text-lg font-bold text-sky-400 mb-2">Información de Contacto</h2>
          <p className="mb-2">Teléfono: <span className="font-semibold">(+506) 2511-8034</span></p>
          <p className="mb-2">Correo: <span className="font-semibold">diagnosticodima.em@ucr.ac.cr</span></p>
          <p>Ciudad Universitaria Rodrigo Facio, San Pedro de Montes de Oca, San José, Costa Rica</p>
        </div>
        {/* Links of Interest */}
        <div className="flex-1 flex flex-col items-end text-right">
          <h2 className="text-lg font-bold text-sky-400 mb-2">Enlaces de Interés</h2>
          <ul className="space-y-2">
            {links.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className="font-semibold transition-colors duration-300 hover:text-sky-400 hover:underline underline-offset-4 focus:text-sky-400 focus:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-white font-semibold">
        Copyright 2025 Escuela de Matemática, Universidad de Costa Rica
      </div>
    </footer>
  );
}
