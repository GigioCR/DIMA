import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuTrigger,
  NavigationMenuContent
} from "@/components/ui/navigation-menu";
import { Menu, X, ChevronRight } from "lucide-react";

const sections = [
  { label: "Inicio", href: "#" },
  { label: "Temáticas", href: null },
  { label: "Sobre el DIMA", href: "#sobre" },
  { label: "Resultados 2025", href: "#resultados" },
  { label: "Escuela de Matemáticas", href: "#escuela" },
  { label: "Preguntas Frecuentes", href: "#faq" }
];

const tematicasSubSections = [
  { label: "¿Qué Evalúa el DIMA?", href: "#que-evalua" },
  { label: "Material Teórico", href: "#material-teorico" },
  { label: "Material Práctico", href: "#material-practico" }
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [tematicasOpen, setTematicasOpen] = useState(false);

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow flex items-center justify-between px-6 py-4 sticky top-0 z-50">
      <div className="text-xl font-bold text-sky-500">Prueba de Diagnóstico</div>
      {/* Desktop Nav */}
      <div className="hidden md:flex">
        <NavigationMenu>
          <NavigationMenuList>
            {sections.map((section, idx) => (
              section.label === "Temáticas" ? (
                <NavigationMenuItem key={idx}>
                  <NavigationMenuTrigger className="font-normal !text-sky-500 hover:!text-sky-600 focus:!text-sky-600 transition-colors duration-300 relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-sky-500 after:transition-all after:duration-300 hover:after:w-full px-4 py-2">
                    Temáticas
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white dark:bg-gray-900 rounded-md shadow-lg p-2 min-w-[200px]">
                    <ul className="flex flex-col gap-1">
                      {tematicasSubSections.map((sub, subIdx) => (
                        <li key={subIdx}>
                          <NavigationMenuLink
                            href={sub.href}
                            className="block px-4 py-2 text-sky-500 hover:bg-sky-50 hover:text-sky-600 rounded transition-colors"
                          >
                            {sub.label}
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={idx}>
                  <NavigationMenuLink
                    href={section.href}
                    className="text-sky-500 transition-colors duration-300 relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-sky-500 after:transition-all after:duration-300 hover:after:w-full hover:text-sky-600 px-4 py-2"
                  >
                    {section.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            ))}
            <NavigationMenuIndicator />
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      {/* Hamburger Icon Mobile */}
      <button
        className="md:hidden text-sky-500 focus:outline-none z-50"
        onClick={() => setMobileOpen((prev) => !prev)}
        aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
      >
        {mobileOpen ? <X size={32} /> : <Menu size={32} />}
      </button>
      {/* Mobile Side Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex">
          {/* Drawer */}
          <aside className="relative ml-auto w-72 max-w-full h-full bg-white dark:bg-gray-900 shadow-lg flex flex-col p-6 animate-drawerSlide">
            <button
              className="absolute top-4 right-4 text-sky-500 focus:outline-none"
              onClick={() => setMobileOpen(false)}
              aria-label="Cerrar menú"
            >
              <X size={28} />
            </button>
            <ul className="mt-12 space-y-4">
              {sections.map((section, idx) => (
                section.label === "Temáticas" ? (
                  <li key={idx}>
                    <button
                      className="flex items-center w-full text-sky-500 text-lg font-semibold py-2 px-2 rounded hover:bg-sky-50 transition-colors focus:outline-none"
                      onClick={() => setTematicasOpen((prev) => !prev)}
                      aria-expanded={tematicasOpen}
                    >
                      Temáticas
                      <ChevronRight className={`ml-2 transition-transform ${tematicasOpen ? 'rotate-90' : ''}`} size={18} />
                    </button>
                    {tematicasOpen && (
                      <ul className="pl-4 mt-2 space-y-2">
                        {tematicasSubSections.map((sub, subIdx) => (
                          <li key={subIdx}>
                            <a
                              href={sub.href}
                              className="block text-sky-500 hover:text-sky-600 px-4 py-2 rounded transition-colors"
                              onClick={() => setMobileOpen(false)}
                            >
                              {sub.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={idx}>
                    <a
                      href={section.href}
                      className="block text-sky-500 text-lg font-semibold py-2 px-2 rounded hover:bg-sky-50 transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {section.label}
                    </a>
                  </li>
                )
              ))}
            </ul>
          </aside>
          <style>{`
            @keyframes drawerSlide {
              from { transform: translateX(100%); opacity: 0; }
              to { transform: translateX(0); opacity: 1; }
            }
            .animate-drawerSlide {
              animation: drawerSlide 0.35s cubic-bezier(0.4,0,0.2,1);
            }
          `}</style>
        </div>
      )}
    </nav>
  );
}
