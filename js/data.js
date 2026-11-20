/* ═══════════════════════════════════════════
   Project Data
   ═══════════════════════════════════════════
   Para agregar un proyecto, simplemente añade
   un objeto a este array.
   ═══════════════════════════════════════════ */

var PROYECTOS = [
  {
    title: "Sistema de reservas DoubleTree by Hilton Trujillo",
    desc: "Reservas de hotel en línea para 147 habitaciones en 14 pisos, con pagos por MercadoPago, autenticación propia y documentación UML completa bajo RUP.",
    tags: ["Laravel 12", "PHP 8.2", "MySQL", "Tailwind CSS", "MercadoPago"],
    category: "Proyecto en equipo",
    icon: "fa-solid fa-hotel",
    featured: true
  },
  {
    title: "API REST segura de reservas de salas",
    desc: "API para gestionar reservas de salas empresariales con roles ADMIN y OPERADOR, auditoría con AOP y pruebas unitarias y de integración.",
    tags: ["Spring Boot", "Spring Security", "BCrypt", "JUnit", "Mockito"],
    category: "Backend",
    icon: "fa-solid fa-shield-halved",
    featured: false
  },
  {
    title: "SaludPlus: citas médicas con microservicios",
    desc: "Dos microservicios, médicos y citas, con JWT, perfiles por entorno, timeout y Circuit Breaker con fallback.",
    tags: ["Spring Boot", "JWT", "Circuit Breaker"],
    category: "Microservicios",
    icon: "fa-solid fa-heart-pulse",
    featured: false
  },
  {
    title: "CarnetDigital",
    desc: "Captura y validación con IA de la foto del carné, panel administrativo web y envío a Minedu, gestionado con Scrum en Jira.",
    tags: ["Scrum", "Jira", "IA"],
    category: "Proyecto en equipo",
    icon: "fa-solid fa-id-card",
    featured: false
  },
  {
    title: "Estacionamiento a escala con Arduino",
    desc: "Sistema de estacionamiento en maqueta controlado con Arduino, con informe técnico del proyecto.",
    tags: ["Arduino", "Electrónica"],
    category: "Proyecto en equipo",
    icon: "fa-solid fa-microchip",
    featured: false
  },
  {
    title: "MEDI-COOL",
    desc: "Proyecto de Investigación e Innovación Tecnológica con piezas diseñadas e impresas en 3D, entre ellas el logo del proyecto.",
    tags: ["Impresión 3D", "Prototipado"],
    category: "Innovación",
    icon: "fa-solid fa-cubes",
    featured: false
  }
];
