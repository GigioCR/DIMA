// Centralized data constants for the application

export const CAROUSEL_IMAGES = [
    {
      image: "/images/Noticias_Eximidos.png",
      destination: ""
    },
    {
      image: "/images/Noticias_Vicerrectoria_2025.png",
      destination: "https://drive.google.com/file/d/14nsFEavagi2Xl94__DYZ6t1sYiP53C3F/view"
    },
  ];

export const EXAM_APPOINTMENTS = [
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
    content: "Cerciórese que se encuentra en el entorno con nombre: I - A - 2025 - RRF - Información Diagnóstico en Matemática DiMa - 000 y que en la barra del buscador aparezca la dirección: ",
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
  main: "https://www.facebook.com/100064303501991/videos/1105518844402530/",
  support: "https://www.youtube.com/embed/2xLVcSMcmHI"
};

export const USER_CREDENTIALS_INFO = [
  {
    icon: "User",
    title: "Nombre de usuario",
    description: "Acá debe colocar el nombre de usuario institucional asignado por la Universidad de Costa Rica cuando le comunicó la admisión a carrera, por ejemplo:",
    example: "pedro.segura",
    note: "sin el @ucr.ac.cr."
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

export const preguntasFrecuentas = [
  {
    id: 1,
    question: "¿Qué es el DIMA?",
    answer: "DiMa son las siglas del proyecto Diagnóstico en Matemática. Es una prueba cuyo principal objetivo es determinar el nivel de conocimiento en temas de Matemática que son requisito para el primer curso de Cálculo."
  },
  {
    id: 2,
    question: "¿Cuáles son las carrerar que tienen que realizar el DiMa?",
    answer: "El DiMa se aplica exclusivamente a personas estudiantes de primer ingreso y a las personas estudiantes universitarias que ingresan o se trasladan a carreras que en su plan de estudios contemplan un curso de cálculo. Consulte la lista específica de los cursos en la sección 'Sobre el DIMA'."
  },
  {
    id: 3,
    question: "¿Puedo inscribirme en el DiMa aún si no quedo matriculado en alguna de las carreras que imparte la UCR?",
    answer: "Para realizar la inscripción al DiMa debe estar admitido o admitida en la Universidad de Costa Rica, pues para matricularse debe conocer su número de carné y la carrera en la que fue empadronado."
  },
  {
    id: 4,
    question: "Si repruebo el Diagnóstico en Matemática, ¿me afecta la matrícula de la U?",
    answer: "No existen repercusiones en la matrícula por la reprobación del DiMa. Debe tomar en cuenta que algunas unidades académicas han tomado disposiciones adicionales según el resultado del DiMa. Por ejemplo, algunas carreras tienen como requisito el curso MA-0001 Precálculo para poder matricular el curso MA-1001 Cálculo I. La aprobación del Diagnóstico en Matemática implica la aprobación de MA-0001 Precálculo y por consiguiente, la posibilidad de matricular MA-1001 Cálculo I. También tenga presente que desde el 2018 algunas carreras (como las de la Facultad de Ciencias Económicas) tienen nuevos programas, los cuales tienen como requisito la aprobación de MA-0001 Precálculo para poder cursar MA-1021 Cálculo para Ciencias Económicas I."
  },
  {
    id: 5,
    question: "¿Es obligatorio hacer el DiMa?",
    answer: "No. Es recomendable realizar el DiMa, para toda la población de primer ingreso a la Universidad de Costa Rica que haya sido admitida a carreras en cuyos planes de estudio contengan cursos de cálculo (MA-1001 y MA-1021) o el curso MA-0150 o para personas estudiantes activas de la Universidad (carné C4 o anteriores) que estén realizando traslado de carrera y cumplan con las condiciones mencionadas anteriormente. La persona que no realice el DiMa y que tenga dentro de su plan de estudios los cursos de cálculo MA-1001, MA-1021 y MA-0150 no contará con la posibilidad de convalidar el curso Precálculo, por lo que deberá llevarlo como lo estipula su plan de estudios."
  },
  {
    id: 6,
    question: "¿Qué pasa si no realizo el DiMa?",
    answer: "La persona que no realice el DiMa y que tenga dentro de su plan de estudios los cursos de cálculo (MA-1001, MA-1021 y MA-0150) no contará con la posibilidad de convalidar el curso Precálculo, por lo que deberá llevarlo como lo estipula su plan de estudios. Debe tomar en cuenta que el DiMa solamente se aplica una vez al año, en una aplicación ordinaria y una aplicación extraordinaria (ver Inscripción en la página de inicio)."
  },
  {
    id: 7,
    question: "¿Se puede realizar el DiMa en una fecha diferente a la fijada?",
    answer: "No. Cuando por una razón de fuerza mayor la persona estudiante se vea imposibilitada a realizar el DiMa en su aplicación ordinaria, puede optar por realizar la aplicación extraordinaria del DiMa. Debe informar a la coordinación que desea realizar el cambio de convocatoria. En caso de que no realice la prueba en su aplicación extraordinaria debe considerar que no existen más convocatorias por lo que resta del año."
  },
  {
    id: 8,
    question: "¿Qué tengo que haber hecho para poder realizr el DiMa?",
    answer: "Ser una persona admitida en una carrera de la UCR que contenga unoo de los siguientes cursos: MA-0001, MA-0002, MA-0101, MA-0150, MA-1001, MA-1021, MA-0291, MA-0320, MA-1101 y MA-1210. Además, debe realizar la inscripción en el formulario de inscripción para la convocatoria respectiva (ordinaria o extraordinaria)."
  },
  {
    id: 9,
    question: "¿Se puede usar calculadora en el DiMa?",
    answer: "No, como es un diagnóstico lo que interesa saber es el nivel académico de los estudiantes en el área de Matemática, por lo que no se recomienda el uso de la calculadora de ningún tipo."
  },
  {
    id: 10,
    question: "¿Cómo influye la calificación del DiMa en mi condición como persona estudiante universitaria?",
    answer: "La aprobación del DiMa con una nota de 7.0 o superior implica el reconocimiento de la aprobación del curso MA 0001 Precálculo, el cual es requisito de los cursos MA-1001 Cálculo I, MA-0150 Principios de Matemática, MA-1021 Cálculo para Ciencias Económicas I, de ciertas carreras (ingenierías, ciencias básicas y ciencias económicas) y posibilitaría que la persona estudiante omita MA-0001 en su plan de estudios. Debe considerar que la información que brinda el DiMa constituye una evidencia del estado de la persona estudiante en cuanto a contenidos del un curso de Precálculo. Por esto, su reprobación en sus diversos grados debe dar pie a la reflexión y la consideración de las recomendaciones dadas en el informe."
  },
  {
    id: 11,
    question: "¿Se puede matricular el DiMa sin importar el año de ingreso a la Universidad?",
    answer: "Sí, el DiMa lo pueden aplicar la población estudiantil de nuevo ingreso y también las personas estudiantes regulares (carné C4 o anteriores ) de la UCR que ingresan o se transladan a carreras de la UCR durante el año 2025. Tanto para la población estudiantil de primer ingreso y regulares, el DiMa se constituye en un instrumento válido y confiable sobre el grado de conocimiento en Precálculo, especialmente si no han adquirido este requisito para su curso decálculo."
  },
  {
    id: 12,
    question: "¿Alguien de mi familia me puede inscribir en el DiMa?",
    answer: "Sí, siempre y cuando conozca todos los datos de la persona estudiante que se solicitarán en el formulario de inscripción."
  },
  {
    id: 13,
    question: "¿Puedo realizar el DiMa en otra sede diferente a la que me encuentro empadronado?",
    answer: "Este año 2025 la prueba será en forma virtual, se puede realizar sin distinción de la sede de empadronamiento. Para quienes indiquen no contar con los medios tecnológicos, se les convocará a sedes de la Universidad de Costa Rica donde podrán realizar la prueba en algún laboratorio de la UCR."
  },
  {
    id: 14,
    question: "¿Cuáles materiales de apoyo puedo utilizar en el DiMa?",
    answer: "Lápiz de grafito número 2, bolígrafo de tinta azul o negra, hojas para realizar anotaciones, borrador y tajador. NO SE RECOMIENDA EL USO DE LA CALCULADORA."
  },
  {
    id: 15,
    question: "Si ya me inscribí en una convocatoria para realizar el dima, ¿puedo cambiarla?",
    answer: "Solo se permiten cambios de la aplicación 1 a la aplicación 2 con la justificación pertinente."
  },
  {
    id: 16,
    question: "¿El DiMa se realiza de forma presencial?",
    answer: "Según la Resolución de la Vicerrectoría de Docencia VD-13163-2024, el DiMa se llevará a cabo con un 80% en modalidad virtual y un 20% en modalidad presencial. La Escuela de Matemática informará oportunamente a las personas aspirantes sobre el procedimiento a seguir."
  },
  {
    id: 17,
    question: "¿Cuáles son los beneficios de realizar el DiMa?",
    answer: "Le permite a la persona estudiante conocer el nivel de conocimientos matemáticos que posee de precálculo que se consideran previos para un curso de cálculo. Además, en caso de obtener la nota mínima de 7.0 o mayor, se convalida el curso MA 0001 Precálculo, requisito de MA-1001, MA-1021 y MA-0150."
  },
  {
    id: 18,
    question: "¿Qué pasa si tengo que cursar MA-1210 o MA-1101 y no apruebo el DiMa?",
    answer: "La persona estudiante debe realizar una reflexión a conciencia sobre su estado en cuanto a los conocimientos mínimos de precálculo que les serán requeridos en MA-1210 o MA-1101, así como cualquier otro curso donde MA-0001 no es requisito. Es importante aclarar que el curso MA-0001 Precálculo solo puede ser matriculado por las personas que lo tengan en su plan de estudios aunque eso no impide que se pueda valorar la asistencia libre (como oyente) durante el ciclo."
  },
  {
    id: 19,
    question: "¿Qué pasa si participé en el programa MATEM?",
    answer: "Las personas que participaron en el programa MATEM y lo aprobaron o que aprobaron un curso equíparable con el curso MA-0001 Precálculo en otra universidad (ya fuera en UCR, UNA o TEC) no deben realizar la prueba DiMa. El programa MATEM, comunica los aprobados a la oficina de Registro e Información y automáticamente les convalidan o reconocen por el curso MA-0001 precálculo. Para más información puedes contactar a los encargados de MATEM-UCR via telefónica al 25115743 o vía electrónica al correo: matem.em@ucr.ac.cr"
  },
  {
    id: 20,
    question: "Si ya aprobé cálculo, ¿cómo se convalida?",
    answer: "Si aprobó cálculo en una universidad pública o por el programa MATEM se convalida con la Oficina de Registro e Información, pues existen convenios para esto. Es importante aclarar que bajo el convenio de CONARE la persona estudiante solicita la convalidación y con el programa MATEM se realiza automáticamente el reporte. Si aprobó cálculo en una universidad privada no se garantiza la convalidación."
  },
  {
    id: 21,
    question: "¿A qué hora se publican los resultados?",
    answer: "Los resultados se publican el 17 y 18 de febrero de 2025."
  },
  {
    id: 22,
    question: "Si paso el DiMa con un 7, ¿me afecta el ponderado si no llevo precálculo?",
    answer: "No afecta el ponderado puesto que aprobar el DiMa daría por aprobado el curso de MA-0001 Precalculo, y al ser un curso que no posee créditos no aporta modificación en el ponderado."
  },
  {
    id: 23,
    question: "¿Qué pasa si me ausento en la fecha de aplicación 1 por motivos mayores tampoco puedo presentar la aplicación 2?",
    answer: "Se pierde el derecho al examen. No existen más fechas de aplicación salvo la aplicación 1 y la aplicación 2 durante el año."
  },
  {
    id: 24,
    question: "¿Qué pasa si inicio tarde la resolución del exámen?",
    answer: "Contará con menor tiempo del espitulado para la resolución de la prueba, a menos que compruebe que dicho problema fue ajeno a su control."
  },
  {
    id: 25,
    question: "¿Tengo que hacer algún otro trámite una vez que sé que aprobé el exámen?",
    answer: "No, el proceso de aprobación es automático en la Oficina de Registro e Información."
  },
  {
    id: 26,
    question: "¿Por cuánto tiempo es vigente el exámen?",
    answer: "Es vigente indefinidamente, especialmente porque en el expediente académico se consigna MA-0001 Precálculo aprobado."
  },
];

export const temasMaterialPráctico = [
  {
    id: 1,
    title: "Álgebra",
    contents: [
      [
        "Simplificar expresiones algebraicas con base en las leyes de potencias con exponentes enteros.", 
        "Determinar el valor numérico de expresiones algebraicas.",
        "Resolver operaciones con monomios: suma, resta, multiplicación, división y potenciación con exponente entero.",
        "Calcular sumas, restas, multiplicaciones y divisiones de polinomios.",
        "Resolver operaciones con expresiones fraccionarias algebraicas.",
        "Determinar cuadrados de binomios.",
        "Realizar racionalizaciones utilizando el tercer producto notable (a-b)(a+b).",
        "Factorizar polinomios con distintos métodos (factor común, 1, 2 y 3 fórmulas notables, inspección, agrupación o combinaciones de las anteriores).",
        "Realizar completamiento de cuadrados (representar un polinomio cuadrático como a(x-h)²+k)."
      ],
      [
        "Aplicar leyes de potencias con exponentes fraccionarios.",
        "Realizar potencias de exponente natural de polinomios (distintas al cuadrado de un binomio).",
        "Simplificar expresiones algebraicas con valor absoluto.",
        "Simplificar raíces cuadradas de expresiones algebraicas.",
        "Racionalizar utilizando productos notables de suma o resta de cubos.",
        "Factorizar con el método de la división sintética y con la suma o resta de cubos.",
        "Factorizar utilizando una combinación de métodos de factorización.",
        "Expresar un polinomio P(x) en la forma P(x)= C(x) + R(x)Q(x), con C(x), R(x), Q(x) polinomios y Q(x) ≠ 0, haciendo uso de la división de polinomios.",
        "Efectuar la descomposición de una expresión algebraica en fracciones parciales."
      ]

    ],
    practiceUrl: "https://drive.google.com/file/d/1MnasihOSihoM3ILpj1JozwqfXVujPART/view",
    diagnosticUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfVgV_aUzReAOWAkyqNyGHrYLRu9oSaF9RjkljSQN5sR0NAkQ/viewform"
  },
  {
    id: 2,
    title: "Ecuaciones e Inecuaciones",
    contents: [
      [
        "Resolver ecuaciones lineales.",
        "Resolver ecuaciones cuadráticas.",
        "Resolver ecuaciones fraccionarias.",
        "Resolver sistemas de ecuaciones lineales."
      ],
      [
        "Resolver inecuaciones lineales.",
        "Resolver ecuaciones con valor absoluto de la forma |ax + b| = c.",
        "Resolver inecuaciones cuadráticas.",
        "Resolver ecuaciones polinomiales con grado mayor o igual que 3.",
        "Resolver ecuaciones radicales de la forma √(q(x)) = p(x), con q de segundo grado y p de primer grado."
      ]
    ],
    practiceUrl: "https://drive.google.com/file/d/1KKYd8VBjbSnXypatlh9ZVoO6jbaUkQow/view",
    diagnosticUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfj_67u2VK8cP5jtcRanY07B1EI92dCr6ZveFgPNik6SzChIg/viewform"
  },
  {
    id: 3,
    title: "Funciones",
    contents: [
      [
        "Identificar preimagen, imagen, dominio, ámbito, intersecciones con los ejes e intervalos de monotonía en una gráfica.",
        "Realizar composiciones de funciones.",
        "Calcular de imágenes utilizando el criterio de una función algebraica.",
        "Reconocer inyectividad a partir de la gráfica de la función.",
        "Representar una función lineal como una recta.",
        "Calcular ámbito y dominio de una función lineal definida en un intervalo.",
        "Calcular el criterio de una función lineal a partir de dos puntos.",
        "Modelar situaciones con una función lineal.",
        "Determinar preimágenes, intersecciones con los ejes y monotonía de una función lineal.",
        "Determinar preimágenes de una función cuadrática y de la función raíz cuadrada.",
        "Determinar intersecciones con los ejes, intervalos de monotonía y vértice de una función cuadrática.",
        "Determinar el criterio o la gráfica de la transformación de la función cuadrática estándar o la función raíz cuadrada a partir del estudio de su gráfica o su criterio.",
        "Determinar la relación entre los pares ordenados, codominio y dominio de dos funciones inversas.",
        "Identificar funciones inversas a partir de sus gráficas.",
        "Reconocer conceptualmente las condiciones que debe cumplir una función para poseer una inversa.",
        "Calcular el criterio de la función inversa de una función lineal y de funciones específicas: cuadrática estándar definida en números positivos (x2 en [0,∞[), raíz cuadrada."
      ],
      [
        "Determinar el puntos máximos y mínimos (locales y absolutos), puntos de inflexión, ecuaciones de asíntotas, intervalos de concavidad y convexidad y signo a partir de la gráfica de una función.",
        "Calcular el dominio de una función con base en su criterio.",
        "Determinar el signo de una función, dado el criterio.",
        "Determinar el criterio o la gráfica de una transformación de la función cúbica, valor absoluto o inversa a partir del estudio de su gráfica o criterio.",
        "Determinar preimágenes, intersecciones con los ejes y monotonía de la función cúbica, valor absoluto o la recíproca.",
        "Determinar los puntos de intersección de las gráficas de funciones polinomiales.",
        "Identificar los criterios de funciones involucradas en el criterio de una función compuesta."
      ]
    ],
    practiceUrl: "https://drive.google.com/file/d/1sG-zKoAZKQCJA0G9w2aw_HGhckyeUp1p/view",
    diagnosticUrl: "https://docs.google.com/forms/d/e/1FAIpQLdBkIA6Fxu9w7dHfmBjkMuxCBCNWX5KpI6SuaL-T4y8gjZLcA/viewform"
  },
  {
    id: 4,
    title: "Rectas y Parábolas",
    contents: [
      [
        "Determinar la ecuación general de una recta: ax + by = c.",
        "Determinar en una recta: pendiente, monotonía y puntos de intersección con los ejes coordenados dada la ecuación de la recta o su gráfica.",
        "Determinar las ecuaciones de rectas paralelas y perpendiculares.",
        "Determinar en una parábola: vértice, concavidad, eje de simetría y puntos de intersección con los ejes coordenados dada la ecuación de la parábola o su gráfica."
      ]
    ],
    section_2: [""],
    practiceUrl: "https://drive.google.com/file/d/1nKisp7NllXc4pEDZI2k4aFW7g2BJKL6a/view",
    diagnosticUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc7ce6rrXIwY2DvwxIA9OjPYGO3W2bCTmxucYbY8Ps8DscccA/viewform"
  },
  {
    id: 5,
    title: "Exponenciales y Logarítmicas",
    contents: [
      [
        "Determinar imágenes, intersección con los ejes y monotonía de una función logarítmica o exponencial.",
        "Determinar el criterio o la gráfica de la transformación de la función logarítmica o exponencial estándar, a partir del estudio de su gráfica o criterio.",
        "Aplicar las propiedades del logaritmo para expandir productos.",
        "Determinar la relación entre los pares ordenados, codominio y dominio de dos funciones inversas.",
        "Identificar funciones inversas a partir de sus gráficas.",
        "Reconocer conceptualmente las condiciones que debe cumplir una función para poseer una inversa.",
        "Calcular el criterio de la función inversa de una función logarítmica y exponencial."
      ]
    ],
    practiceUrl: "https://drive.google.com/file/d/1PKfI4R-1c9mi-gU8Qk0cFI-gN8QLV8XD/view",
    diagnosticUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc7ce6rrXIwY2DvwxIA9OjPYGO3W2bCTmxucYbY8Ps8DscccA/viewform"
  },
  {
    id: 6,
    title: "Trigonometría",
    contents: [
      [
        "Determinar el dominio, ámbito, gráfica, intersecciones con los ejes, intervalos de monotonía de sen(x), cos(x) y tan(x).",
        "Aplicar identidades trigonométricas básicas en la simplificación de expresiones (definición de tan(x), cot(x), sec(x) y csc(x) en términos de sen(x) y cos(x); variantes de sen²(x) + cos²(x) = 1.",
        "Aplicar identidades trigonométricas de suma y resta de ángulos en la simplificación de expresiones.",
        "Identificar dominio, ámbito, gráfica, intersecciones con los ejes e intervalos de monotonía de arctan(x), arcsen(x) y arccos(x).",
        "Resolver ecuaciones trigonométricas f(x) = a, con f(x) igual a sen(x), cos(x) o tan(x)."
      ]
    ],
    practiceUrl: "https://drive.google.com/file/d/1dajrb4SWnmgArPosKsmWjco7-wgXchbL/view",
    diagnosticUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc1ITQYQC58xKRVWLEsyZcOiGj0Sq8ASV7TL47dCjiLREG8pg/viewform"
  },
];

export const curriculumData = [
  {
    subject: "Álgebra",
    section1: [
      "Simplificar expresiones algebraicas con base en las leyes de potencias con exponentes enteros.",
      "Determinar el valor numérico de expresiones algebraicas.",
      "Resolver operaciones con monomios: suma, resta, multiplicación, división y potenciación con exponente entero.",
      "Calcular sumas, restas, multiplicaciones y divisiones de polinomios.",
      "Resolver operaciones con expresiones fraccionarias algebraicas.",
      "Determinar cuadrados de binomios.",
      "Realizar racionalizaciones utilizando el tercer producto notable (a-b)(a+b).",
      "Factorizar polinomios con distintos métodos (factor común, 1, 2 y 3, fórmulas notables, inspección, agrupación o combinaciones de las anteriores).",
      "Realizar completamiento de cuadrados (representar un polinomio cuadrático como a(x-h)2+k)."
    ],
    section2: [
      "Aplicar leyes de potencias con exponentes fraccionarios.",
      "Realizar potencias de exponente natural de polinomios (distintas al cuadrado de un binomio).",
      "Simplificar expresiones algebraicas con valor absoluto.",
      "Simplificar raíces cuadradas de expresiones algebraicas.",
      "Racionalizar utilizando productos notables de suma o resta de cubos.",
      "Factorizar con el método de la división sintética y con la suma o resta de cubos.",
      "Factorizar utilizando una combinación de métodos de factorización.",
      "Expresar un polinomio P(x) en la forma  P(x)=C(x)+R(x)Q(x), con C(x),R(x),Q(x) polinomios y Q(x)≠0, haciendo uso de la división de polinomios.",
      "Efectuar la descomposición de una expresión algebraica en fracciones parciales."
    ]
  },
  {
    subject: "Ecuaciones",
    section1: [
      "Resolver ecuaciones lineales.",
      "Resolver ecuaciones cuadráticas.",
      "Resolver ecuaciones bicuadráticas.",
      "Resolver sistemas de ecuaciones lineales."
    ],
    section2: [
      "Resolver inecuaciones lineales.",
      "Resolver ecuaciones con valor absoluto de la forma |ax+b|=c.",
      "Resolver inecuaciones cuadráticas.",
      "Resolver ecuaciones polinomiales con grado mayor o igual que 3.",
      "Resolver ecuaciones radicales."
    ]
  },
  {
    subject: "Funciones Primera Parte",
    section1: [
      "Identificar preimagen, imagen, dominio, ámbito, intersecciones con los ejes e intervalos de monotonía en una gráfica.",
      "Realizar composiciones de funciones.",
      "Calcular de imágenes utilizando el criterio de una función algebraica.",
      "Reconocer inyectividad a partir de la gráfica de la función.",
      "Representar una función lineal como una recta.",
      "Calcular ámbito y dominio de una función lineal definida en un intervalo.",
      "Calcular el criterio de una función lineal a partir de dos puntos.",
      "Modelar situaciones con una función lineal.",
      "Determinar preimágenes, intersecciones con los ejes y monotonía de una función lineal.",
      "Determinar preimágenes de una función cuadrática y de la función raíz cuadrada.",
      "Determinar intersecciones con los ejes, intervalos de monotonía y vértice de una función cuadrática.",
      "Determinar el criterio o la gráfica de la transformación de la función cuadrática estándar o la función raíz cuadrada a partir del estudio de su gráfica o su criterio."
    ],
    section2: [
      "Determinar el puntos máximos y mínimos (locales y absolutos), puntos de inflexión, ecuaciones de asíntotas, intervalos de concavidad y convexidad y signo a partir de la gráfica de una función.",
      "Calcular el dominio de una función con base en su criterio.",
      "Determinar el signo de una función, dado el criterio. ",
      "Determinar el criterio o la gráfica de una transformación de la función cúbica, valor absoluto o inversa a partir del estudio de su gráfica o criterio.",
      "Determinar preimágenes, intersecciones con los ejes y monotonía de la función cúbica, valor absoluto o la recíproca.",
      "Determinar los puntos de intersección de las gráficas de funciones polinomiales.",
      "Identificar los criterios de funciones involucradas en el criterio de una función compuesta"
    ]
  }, {
    subject: "Funciones Segunda Parte",
    section1: [
      "Determinar imágenes, intersección con los ejes y monotonía de una función logarítmica o exponencial.",
      "Determinar el criterio o la gráfica de la transformación de la función logarítmica o exponencial estándar, a partir del estudio de su gráfica o criterio.",
      "Aplicar las propiedades del logaritmo para expandir productos. ",
      "Determinar la relación entre los pares ordenados, codominio y dominio de dos funciones inversas.",
      "Identificar funciones inversas a partir de sus gráficas.",
      "Reconocer conceptualmente las condiciones que debe cumplir una función para poseer una inversa.",
      "Calcular el criterio de la función inversa de una función lineal y de funciones específicas: cuadrática estándar definida en números positivos (x2 en [0,∞[), raíz cuadrada, logarítmica y exponencial."
    ],
    section2: [
      "Determinar el dominio, ámbito, gráfica, intersecciones con los ejes, intervalos de monotonía de sen(x),cos(x) y tan(x).",
      "Aplicar identidades trigonométricas básicas en la simplificación de expresiones (definición de tan(x), cot(x), sec(x) y csc(x) en términos de sen(x) y cos(x); variantes de sen²(x) + cos²(x) = 1.",
      "Aplicar identidades trigonométricas de suma y resta de ángulos en la simplificación de expresiones.",
      "Identificar dominio, ámbito, gráfica, intersecciones con los ejes e intervalos de monotonía de arctan(x), arcsen(x) y arccos(x).",
      "Resolver ecuaciones trigonométricas f(x)=a, con f(x) igual a sen(x), cos(x) o tan(x)."
    ]
  }
];

export const moocsData = [
  {
    title: "Conjuntos y Álgebra",
    url: "https://global.ucr.ac.cr/enrol/index.php?id=1130"
  },
  {
    title: "Principios de Funciones 1",
    url: "https://global.ucr.ac.cr/enrol/index.php?id=1131"
  },
  {
    title: "Principios de Funciones 2",
    url: "https://global.ucr.ac.cr/enrol/index.php?id=1132"
  },
  {
    title: "Principios de Funciones 3",
    url: "https://global.ucr.ac.cr/enrol/index.php?id=1133"
  },
  {
    title: "Trigonometría",
    url: "https://global.ucr.ac.cr/enrol/index.php?id=1134"
  }

];

export const librosData = [
  {
    title: "Precálculo: Álgebra y Trigonometría con Geometría Analítica",
    authors: "Earl Swokowski(2018)",
    signature: "511.326 S979p",
    libraries: [
      "Arturo Agüero Chaves (Sede occidente)"
    ]
  },
  {
    title: "Precálculo: Matemáticas para el Cálculo",
    authors: "James Stewart, Lothar Edilin y Saleem Waston(2017)",
    signature: "510 S849p7",
    libraries: [
      "Luis Demetrio Tinoco (Sede Rodrigo Facio)",
      "Luis Ferrero Acosta (Sede Pacífico)",
      "Sede de Guanacaste."
    ]
  },
  {
    title: "Precálculo 1: Álgebra",
    authors: "Reinaldo Jiménez Santamaría(2014)",
    signature: "512.15 J61p",
    libraries: [
      "Luis Demetrio Tinoco (Sede Rodrigo Facio)",
      "Sede de Guanacaste."
    ]
  },
  {
    title: "Precálculo con Avances de Cálculo",
    authors: "Dennis G. Zill(2012)",
    signature: "512.1 Z69p2",
    libraries: [
      "Luis Demetrio Tinoco (Sede Rodrigo Facio) Recinto de Grecia.",
      "Recinto de Guápiles.",
      "Sede de Guanacaste.",
      "Sede del Sur."
      ]
  },
  {
    title: "Precálculo",
    authors: "Luis Alejandro Acuña Prado y María José Artavia Azofeifa(2009)",
    signature: "510.246.58 A184e",
    libraries: [
      "Luis Demetrio Tinoco (Sede Rodrigo Facio)",
      "Arturo Agüero Chaves (Sede de occidente).",
      "Sede del Atlántico.",
      "Carlos Monge (Sede Rodrigo Facio).",
      "Recinto de Santa Cruz.",
      "Recinto de Guápiles.",
      "Recinto de Paraíso.",
      "Sede del Sur.",
      "Recinto de Paraíso.",
      "Sede del Sur."
    ]
  },
  {
    title: "Matemática Elemental",
    authors: "Floria Arias Tencio y William Poveda Fernández(2016)",
    signature: "510.711 A696m",
    libraries: [
      "Luis Demetrio Tinoco (Sede Rodrigo Facio)",
      "Arturo Agüero Chaves (Sede de occidente).",
      "Sede del Atlántico.",
      "Recinto de Grecia.",
      "Recinto de Guápiles.",
      "Recinto de Paraíso.",
      "Sede de Guanacaste.",
      "Sede del Caribe.",
      "Sede del Sur.",
      "Sede de Guanacaste.",
      "Sede del Caribe.",
      "Sede del Sur.",
    ]
  },
  {
    title: "Tópicos de matemática elemental.",
    authors: "Hubert Méndez(1992)",
    signature: "510.7 M538t	",
    libraries: [
      "Arturo Agüero Chaves (Sede de occidente).",
      "Luis Demetrio Tinoco (Sede Rodrigo Facio).",
      "Recinto de Grecia.",
      "Sede de Guanacaste.",
      "Biblioteca de Educación (Sede Rodrigo Facio)."
    ]
  },
];
