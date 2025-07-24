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
