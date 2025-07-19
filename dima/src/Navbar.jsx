import React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuTrigger,
  NavigationMenuContent
} from "@/components/ui/navigation-menu";

const sections = [
  { label: "Inicio", href: "#" },
  { label: "Temáticas", href: null }, // Will be handled as dropdown
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
  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow flex items-center justify-between px-6 py-4 sticky top-0 z-50">
      <div className="text-xl font-bold text-sky-500">Prueba de Diagnóstico</div>
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
    </nav>
  );
}
