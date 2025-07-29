// Centralized data constants for the DIMA application

export const CAROUSEL_IMAGES = [
  "https://placehold.co/800x300/4F46E5/FFF?text=Anuncio+1",
  "https://placehold.co/800x300/059669/FFF?text=Anuncio+2",
  "https://placehold.co/800x300/EA580C/FFF?text=Anuncio+3",
  "https://placehold.co/800x300/4F46E5/FFF?text=Anuncio+4"
];

export const EXAM_RESULTS = [
  { 
    carne: "C12345", 
    fecha: "17/02/2025", 
    hora: "9:00 am", 
    lugar: "Escuela de Matemática, Sede Rodrigo Facio" 
  },
];

export const IMPORTANT_DATES = [
  { 
    actividad: "Primera Inscripción (concurso ordinario)", 
    fecha: "16 al 22 de Enero del 2025" 
  },
  { 
    actividad: "Segunda Inscripción (admisión diferida)", 
    fecha: "23 al 29 de Enero del 2025" 
  },
  { 
    actividad: "Primera Aplicación del DiMa (inscripción 1)", 
    fecha: "31 de Enero al 1 de Febrero 2025" 
  },
  { 
    actividad: "Segunda Aplicación del DiMa", 
    fecha: "17 al 18 de Febrero del 2025" 
  },
  { 
    actividad: "Comunicación de Resultados a la Oficina de Registro e Información", 
    fecha: "21 de Febrero del 2025" 
  },
];

export const REGISTRATION_STEPS = [
  {
    id: 1,
    title: "Verificación del entorno",
    content: "Cerciórese que se encuentra en el entorno con nombre: I - A - 2025 - RRF - Información Diagnóstico en Matemática DiMa - 000 y que en la barra del buscador aparezca la dirección:",
    url: "https://mv1.mediacionvirtual.ucr.ac.cr/login/index.php"
  },
  {
    id: 2,
    title: "Inscripción en el entorno",
    content: "Inscríbase en el entorno virtual haciendo clic en \"Inscribirme en este entorno virtual\" que aparecerá en la parte derecha de su computadora o parte inferior de la pantalla de su dispositivo móvil."
  },
  {
    id: 3,
    title: "Completar formulario",
    content: "Localice la sección Inscripción DiMa 2025 y complete el formulario con nombre: Formulario de Inscripción DiMa 2025."
  }
];

export const VIDEO_URLS = {
  main: "https://www.youtube.com/embed/WNCl-69POro?si=rKmIxjewdAnlFJiA",
  support: "https://www.youtube.com/embed/2xLVcSMcmHI"
};

export const USER_CREDENTIALS_INFO = [
  {
    icon: "User",
    title: "Nombre de usuario",
    description: "Acá debe colocar el nombre de usuario institucional asignado por la Universidad de Costa Rica cuando le comunicó la admisión a carrera, por ejemplo:",
    example: "pedro.segura",
    note: "sin el @ucr.ac.cr"
  },
  {
    icon: "Lock", 
    title: "Contraseña",
    description: "Es la contraseña de la cuenta institucional, la que usted asoció al correo institucional."
  }
];

export const SECCIONES_DIMA = [
  {
    icon: undefined,
    title: "Sección 1",
    description: "Conocimientos preeliminares de cálculo: Conocimientos de álgebra y funciones, de precálculo, vistos en secundaria."
  },
  {
    icon: undefined,
    title: "Sección 2",
    description: "Conocimientos de profundización en precálculo: Conocimientos de álgebra y funciones, de precálculo, no abordados en secundaria."
  }
]

import { Users, Target, Award, BookOpen } from 'lucide-react';

export const features = [
  {
    icon: Target,
    title: "Nuestra Misión",
    description: "Evaluar y diagnosticar el nivel de conocimientos matemáticos de los estudiantes para brindar un mejor apoyo académico."
  },
  {
    icon: Users,
    title: "Nuestro Equipo",
    description: "Profesores especializados en matemáticas comprometidos con la excelencia académica y el desarrollo estudiantil."
  },
  {
    icon: Award,
    title: "Nuestra Visión",
    description: "Ser la herramienta de diagnóstico matemático más confiable y efectiva para instituciones educativas."
  },
  {
    icon: BookOpen,
    title: "Metodología",
    description: "Utilizamos métodos de evaluación modernos y científicamente validados para obtener resultados precisos."
  }
];

export const coordinacionGeneral = [
  { 
    name: "MSc. Karol Jiménez Alfaro", 
    role: "Coordinadora General",
    bio: "Karol Jiménez Alfaro. Obtuvo su licenciatura en Enseñanza de la Matemática y su maestría en Matemática con énfasis en Matemática Educativa en la Universidad de Costa Rica. Se desempeña como investigadora y desarrolladora de la prueba PAA del Programa de la Prueba de Aptitud Académica adscrito al Instituto de Investigaciones Psicológicas de la Universidad de Costa Rica. También, coordina, investiga y participa en el desarrollo de la prueba de Diagnóstico de conocimientos Matemáticos, DiMa y ejerce la docencia en cursos de la Escuela de Matemática de la Universidad de Costa Rica. Ha laborado como docente de matemática en secundaria en el Ministerio de Educación Pública y como editora adjunta en la Editorial Santillana elaborando materiales didácticos para la enseñanza de la matemática. Ha realizado investigaciones sobre la validez predictiva y el razonamiento en contextos matemáticos.",
    email: "karol.jimenez@ucr.ac.cr",
    education: "MSc. en Matemática Educativa, Universidad de Costa Rica",
    experience: "15+ años en educación matemática universitaria"
  }
];

export const investigadores = [
  { 
    name: "Dr. Luis Rojas Torres", 
    role: "Investigador",
    bio: "Luis Rojas-Torres es Doctor en Educación, Máster en Estadística y Licenciado en Enseñanza de la Matemática. Labora en la Escuela de Matemática y el Instituto de Investigaciones Psicológicas, de la Universidad de Costa Rica (UCR). Cuenta con diversos artículos e investigaciones en los temas de construcción y validación de instrumentos de medición; aplicaciones de los modelos de medición y; factores asociados al rendimiento académico, en especial: la ansiedad ante los exámenes, el razonamiento cuantitativo y el razonamiento en contexto matemático.",
    email: "luis.rojas@ucr.ac.cr",
    education: "PhD en Educación, Universidad de Costa Rica",
    experience: "20+ años en investigación matemática"
  },
  { 
    name: "Lic. Byron Solano Herrera", 
    role: "Investigador",
    bio: "Byron Andrey Solano Herrera. Obtuvo su licenciatura y bachillerato en Enseñanza de la Matemática en la Universidad de Costa. Ha laborado en el desarrollo de la prueba de Diagnóstico de conocimientos Matemáticos, tanto como investigador como asistente. Ejerce la docencia en cursos de servicio de la Escuela de Matemática y en la carrera de Licenciatura y Bachillerato en Enseñanza de la Matemática. También, ejerce la docencia en la Universidad Estatal a Distancia (UNED) en la cátedra de Matemáticas Superiores. Ha participado como expositor en el Seminario de Actualización Profesional que se realiza cada año y en las Escuelas de Verano de Matemática de la UNED.",
    email: "byron.solano@ucr.ac.cr",
    education: "Licenciatura en Enseñanza de la Matemática, Universidad de Costa Rica",
    experience: "8+ años en evaluación educativa"
  }
];

