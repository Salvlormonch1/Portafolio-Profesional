export const gmailComposeUrl = ({ to = 'ramon.jorge2003@gmail.com', subject = '', body = '' } = {}) => {
  const params = new URLSearchParams({ view: 'cm', fs: '1', to });

  if (subject) {
    params.set('su', subject);
  }

  if (body) {
    params.set('body', body);
  }

  return `https://mail.google.com/mail/?${params.toString()}`;
};

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/ramon-jorge' },
  { label: 'GitHub', href: 'https://github.com/Salvlormonch1' },
  { label: 'Email', href: gmailComposeUrl() },
];

export const heroSocialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/ramon-jorge',
    icon: 'linkedin',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Salvlormonch1',
    icon: 'github',
  },
  {
    label: 'Gmail',
    href: gmailComposeUrl(),
    icon: 'gmail',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/51934577089',
    icon: 'whatsapp',
  },
];

export const copy = {
  es: {
    name: 'Ramón Alejandro Jorge Arévalo',
    title: 'Software Engineer / Full Stack Developer',
    nav: [
      { label: 'Inicio', path: '/' },
      { label: 'Sobre mí', path: '/sobre-mi' },
      { label: 'Proyectos', path: '/proyectos' },
      { label: 'Habilidades', path: '/habilidades' },
      { label: 'Contacto', path: '/contacto' },
    ],
    hero: {
      eyebrow: 'Portafolio profesional',
      headline: 'Hola, soy Ramón Jorge — Software Engineer',
      subtitle:
        'Estudiante de décimo ciclo de Ingeniería de Software (Quinto Superior en la UPC) y Practicante de Sistemas en Luz del Sur. Especializado en desarrollo Web y Móvil (Frontend & Backend) bajo arquitecturas limpias y metodologías ágiles.',
      primaryCta: 'Ver Proyectos',
      secondaryCta: 'Contactar',
      cvCta: 'Descargar CV',
    },
    home: {
      introTitle: 'Construyo productos digitales con foco en claridad visual, rendimiento y escalabilidad.',
      introBody:
        'Este portafolio está organizado por páginas para que puedas explorar mi perfil como si fueras usuario de un producto real. Siéntete libre de navegar y descubrir mi trabajo.',
      highlights: [
        ['Quinto Superior', 'UPC'],
        ['Web + Mobile', 'React, Angular, Flutter'],
        ['Clean Architecture', 'DDD, MVC, Scrum'],
      ],
    },
    about: {
      title: 'Sobre mí',
      summary:
        'Apasionado por la resolución de problemas y la creación de soluciones de software escalables. Cuento con sólida experiencia en desarrollo de aplicaciones web y móviles aplicando buenas prácticas (DDD, MVC, Clean Architecture) y metodologías ágiles (Scrum, Kanban).',
      highlight: 'Quinto Superior en la UPC',
      contactTitle: 'Contacto directo',
      contactItems: [
        { label: 'Ubicación', value: 'Lima, Perú', icon: 'pin' },
        { label: 'Email', value: 'ramon.jorge2003@gmail.com', icon: 'mail' },
        { label: 'Teléfono', value: '+51 934 577 089', icon: 'whatsapp' },
        { label: 'LinkedIn', value: 'linkedin.com/in/ramon-jorge', icon: 'linkedin' },
        { label: 'GitHub', value: 'github.com/Salvlormonch1', icon: 'github' },
      ],
      leadershipTitle: 'Experiencia internacional & liderazgo',
      leadershipItems: [
        'Programa USE Work and Travel 2023-2024 (Lifeguard en Wisconsin Dells, EE. UU.).',
        'Participante del GitHub Copilot Global Bootcamp (2025).',
        'Delegado académico de cursos clave en la carrera.',
      ],
    },
    experience: {
      title: 'Experiencia profesional',
      role: 'Practicante Pre-profesional de Sistemas',
      company: 'Luz del Sur',
      period: 'Junio 2025 – Presente | Jesús María, Lima, Perú',
      bullets: [
        'Desarrollo Frontend: Diseño e implementación de interfaces web dinámicas y escalables con JavaScript, React y Angular bajo arquitectura limpia.',
        'Desarrollo Backend & DB: Creación de microservicios con ASP.NET e integración eficiente con bases de datos relacionales (Informix, PostgreSQL), optimizando consultas SQL y asegurando integridad de datos.',
        'Calidad (QA): Pruebas unitarias e integración en entornos de desarrollo para asegurar estabilidad.',
        'CI/CD & Trabajo en equipo: Control de versiones con TFS y GitLab en entornos Scrum, participando en Sprints y Code Reviews.',
      ],
    },
    projects: {
      title: 'Proyectos destacados',
      demoLabel: 'Ver Demo / Sitio',
      codeLabel: 'Ver Código',
      previewLabel: 'Vista previa',
      modalClose: 'Cerrar',
      modalTitle: 'Demostración en preparación',
      modalBody: 'Este proyecto aún no tiene demo pública. Puedes revisar el repositorio o pedirme una vista guiada del trabajo.',
      items: [
        {
          name: 'SweetManager',
          description:
            'Plataforma web para administrar reservas, habitaciones, personal e inventario en un entorno hotelero, con integración IoT para controlar temperatura, iluminación y agua de forma centralizada.',
          tech: ['.NET', 'IoT', 'Vue.js', 'Flutter', 'PostgreSQL', 'C'],
          demo: 'https://los-angelitos.github.io/landing-page/',
          code: 'https://github.com/Salvlormonch1',
          accent: 'from-cyan-500/20 via-sky-500/10 to-emerald-500/10',
          imageLabel: 'SWEETMANAGER',
          image: '/sweetmanager.png',
          imageAlt: 'Captura de pantalla de SweetManager',
        },
        {
          name: 'SmartParking',
          description:
            'Sistema web para reservar espacios de estacionamiento en tiempo real y administrar la disponibilidad, incluyendo control operativo y registro automatizado de infracciones.',
          tech: ['Angular', 'Spring Boot', 'MySQL', 'Automation'],
          demo: 'https://smartparking-orcin.vercel.app/login',
          code: 'https://github.com/Salvlormonch1',
          accent: 'from-violet-500/20 via-fuchsia-500/10 to-cyan-500/10',
          imageLabel: 'SMARTPARKING',
          image: '/smartparking.png',
          imageAlt: 'Captura de pantalla de SmartParking',
        },
        {
          name: 'SafeVision',
          description:
            'Plataforma de seguimiento de flotas que ayuda a anticipar incidentes por fatiga en tiempo real, con panel web para alertas y reportes de riesgo alojados en la nube.',
          tech: ['Vue.js', 'Realtime Alerts', 'Cloud Dashboard', '.NET'],
          demo: 'https://safevision-frontend-five.vercel.app/login',
          code: 'https://github.com/Salvlormonch1',
          accent: 'from-red-500/20 via-orange-500/10 to-yellow-500/10',
          imageLabel: 'SAFEVISION',
          image: '/safevision.png',
          imageAlt: 'Captura de pantalla de SafeVision',
        },
        {
          name: 'Billetera Virtual para PYMEs',
          description:
            'Aplicación de gestión de facturas y generación de reportes financieros para pequeñas y medianas empresas.',
          tech: ['Vue.js', '.NET', 'DDD', 'C#'],
          demo: 'https://wallet-front-end-kappa.vercel.app/',
          code: 'https://github.com/Salvlormonch1',
          accent: 'from-sky-500/20 via-blue-500/10 to-indigo-500/10',
          imageLabel: 'PLACEHOLDER IMAGEN BILLETERA',
          image: '/billetera.png',
          imageAlt: 'Captura de pantalla de Billetera Virtual para PYMEs',
        },
        {
          name: 'EzGas',
          description:
            'Aplicación web para localizar grifos y estaciones de servicio. Implementa grafos para la optimización de rutas sobre datos de localización reales.',
          tech: ['Python', 'Flask', 'Graphs'],
          demo: 'https://ez-gas.vercel.app/',
          code: 'https://github.com/Salvlormonch1',
          accent: 'from-emerald-500/20 via-green-500/10 to-lime-500/10',
          imageLabel: 'EZGAS',
          image: '/ezgas.png',
          imageAlt: 'Captura de pantalla de EzGas',
        },
        {
          name: 'SafePoint',
          description:
            'Sistema de predicción de incidentes de seguridad ciudadana que usa Machine Learning para reconocer zonas con mayor probabilidad de riesgo y priorizar la prevención.',
          tech: ['.NET', 'FastAPI', 'Flutter', 'XGBoost', 'Machine Learning'],
          demo: 'https://safepoint-dashboard.vercel.app/',
          code: 'https://github.com/Salvlormonch1',
          accent: 'from-sky-500/20 via-blue-500/10 to-indigo-500/10',
          imageLabel: 'SAFEPOINT',
          image: '/safepoint.png',
          imageAlt: 'Captura de pantalla de SafePoint',
        },
        
      ],
    },
    skills: {
      title: 'Habilidades técnicas',
      groups: [
        {
          title: 'Lenguajes',
          items: ['C++', 'C#', 'Java', 'JavaScript', 'TypeScript', 'Python', 'PHP', 'Kotlin', 'Dart', 'SQL', 'HTML', 'CSS'],
        },
        {
          title: 'Frameworks',
          items: ['.NET', 'React', 'Angular', 'Vue.js', 'Spring Boot', 'Flutter'],
        },
        {
          title: 'Bases de datos',
          items: ['PostgreSQL', 'SQL Server', 'MySQL', 'MongoDB', 'Informix', 'SQLite', 'Room'],
        },
        {
          title: 'Herramientas',
          items: ['RESTful APIs', 'Swagger', 'Git', 'GitHub', 'GitLab', 'TFS', 'Firebase', 'Claude Code'],
        },
        {
          title: 'Metodologías & Enfoques',
          items: ['Scrum', 'Kanban', 'Domain Driven Design', 'MVC'],
        },
        {
          title: 'Idiomas',
          items: ['Español (Nativo)', 'Inglés (Fluido)'],
        },
      ],
    },
    education: {
      title: 'Educación y certificaciones',
      degree: 'Ingeniería de Software — Universidad Peruana de Ciencias Aplicadas (UPC)',
      duration: '2022 - Presente',
      certifications: [
        {
          title: 'Scrum Fundamentals Certified (SFC)',
          issuer: 'SCRUMstudy',
          id: '982350',
          link: 'https://www.scrumstudy.com/certification/verify?type=SFC&number=982350',
        },
        {
          title: 'Python For Everybody',
          issuer: 'University of Michigan',
          id: 'DPRCJYFT8KHE',
          link: 'https://coursera.org/share/b78052c568d4c7833b5d3f3e91cab564',
        },
        {
          title: 'Soporte de TI de Google',
          issuer: 'Google',
          id: '8KQCVA3VCSGW',
          link: 'https://coursera.org/share/fc117ce1f5274f4668c5d7cf8b22a691',
        },
        {
          title: 'Introduction to MongoDB',
          issuer: 'MongoDB',
          id: 'MDBmxnrmuhxs8',
          link: 'https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/33122b44-f3eb-4b74-ab31-4af9c0bd9f16-ramon-jorge-b504da21-884a-47c7-95cc-cc57928eff51-certificate.pdf',
        },
      ],
    },
    contact: {
      title: 'Contacto',
      subtitle: '¿Tienes una oportunidad, idea o proyecto en mente? Escríbeme y lo revisamos.',
      form: {
        name: 'Nombre',
        email: 'Correo',
        message: 'Mensaje',
        send: 'Enviar mensaje',
      },
      direct: 'Enlaces directos',
    },
    footer: 'Copyright © Ramón Jorge.',
    langLabel: 'EN',
  },
  en: {
    name: 'Ramón Alejandro Jorge Arévalo',
    title: 'Software Engineer / Full Stack Developer',
    nav: [
      { label: 'Home', path: '/' },
      { label: 'About', path: '/sobre-mi' },
      { label: 'Projects', path: '/proyectos' },
      { label: 'Skills', path: '/habilidades' },
      { label: 'Contact', path: '/contacto' },
    ],
    hero: {
      eyebrow: 'Professional portfolio',
      headline: 'Hi, I am Ramón Jorge — Software Engineer',
      subtitle:
        'Final-year Software Engineering student (top quintile at UPC) and Systems Intern at Luz del Sur. Specialized in Web and Mobile development (Frontend & Backend) using clean architectures and agile practices.',
      primaryCta: 'View Projects',
      secondaryCta: 'Contact Me',
      cvCta: 'Download CV',
    },
    home: {
      introTitle: 'I build digital products focused on visual clarity, performance and scalability.',
      introBody:
        'This portfolio is organized as pages so you can explore my profile like a real product: home, journey, projects, skills, and contact.',
      highlights: [
        ['Top quintile', 'UPC'],
        ['Web + Mobile', 'React, Angular, Flutter'],
        ['Clean Architecture', 'DDD, MVC, Scrum'],
      ],
    },
    about: {
      title: 'About me',
      summary:
        'Passionate about solving problems and building scalable software solutions. I have solid experience developing web and mobile applications with best practices (DDD, MVC, Clean Architecture) and agile methodologies (Scrum, Kanban).',
      highlight: 'Top quintile at UPC',
      contactTitle: 'Direct contact',
      contactItems: [
        { label: 'Location', value: 'Lima, Peru', icon: 'pin' },
        { label: 'Email', value: 'ramon.jorge2003@gmail.com', icon: 'mail' },
        { label: 'Phone', value: '+51 934 577 089', icon: 'whatsapp' },
        { label: 'LinkedIn', value: 'linkedin.com/in/ramon-jorge', icon: 'linkedin' },
        { label: 'GitHub', value: 'github.com/Salvlormonch1', icon: 'github' },
      ],
      leadershipTitle: 'International experience & leadership',
      leadershipItems: [
        'USE Work and Travel 2023-2024 program (Lifeguard in Wisconsin Dells, USA).',
        'Participant in GitHub Copilot Global Bootcamp (2025).',
        'Academic delegate for key university courses.',
      ],
    },
    experience: {
      title: 'Professional experience',
      role: 'Pre-professional Systems Intern',
      company: 'Luz del Sur',
      period: 'June 2025 – Present | Jesus Maria, Lima, Peru',
      bullets: [
        'Frontend development: designed and built dynamic, scalable web interfaces with JavaScript, React and Angular under clean architecture principles.',
        'Backend & DB: created microservices with ASP.NET and integrated relational databases (Informix, PostgreSQL), optimizing SQL queries and preserving data integrity.',
        'Quality (QA): wrote unit and integration tests in development environments to ensure stability.',
        'CI/CD & teamwork: version control with TFS and GitLab in Scrum environments, participating in sprints and code reviews.',
      ],
    },
    projects: {
      title: 'Featured Projects',
      demoLabel: 'View Demo / Site',
      codeLabel: 'View Code',
      previewLabel: 'Preview',
      modalClose: 'Close',
      modalTitle: 'Demo in Progress',
      modalBody: 'This project doesn\'t have a public demo yet. Feel free to check out the repository or ask me for a guided walkthrough of the work.',
      items: [
        {
          name: 'SweetManager',
          description:
            'Web platform for managing reservations, rooms, staff, and inventory in a hotel environment, with IoT integration to centrally control temperature, lighting, and water.',
          tech: ['.NET', 'IoT', 'Vue.js', 'Flutter', 'PostgreSQL', 'C'],
          demo: 'https://los-angelitos.github.io/landing-page/',
          code: 'https://github.com/Salvlormonch1',
          accent: 'from-cyan-500/20 via-sky-500/10 to-emerald-500/10',
          imageLabel: 'SWEETMANAGER',
          image: '/sweetmanager.png',
          imageAlt: 'Screenshot of SweetManager',
        },
        {
          name: 'SmartParking',
          description:
            'Web system for reserving parking spaces in real time and managing availability, including operational control and automated infraction logging.',
          tech: ['Angular', 'Spring Boot', 'MySQL', 'Automation'],
          demo: 'https://smartparking-orcin.vercel.app/login',
          code: 'https://github.com/Salvlormonch1',
          accent: 'from-violet-500/20 via-fuchsia-500/10 to-cyan-500/10',
          imageLabel: 'SMARTPARKING',
          image: '/smartparking.png',
          imageAlt: 'Screenshot of SmartParking',
        },
        {
          name: 'SafeVision',
          description:
            'Fleet tracking platform that helps anticipate fatigue-related incidents in real time, with a web dashboard for alerts and risk reports hosted in the cloud.',
          tech: ['Vue.js', 'Realtime Alerts', 'Cloud Dashboard', '.NET'],
          demo: 'https://safevision-frontend-five.vercel.app/login',
          code: 'https://github.com/Salvlormonch1',
          accent: 'from-red-500/20 via-orange-500/10 to-yellow-500/10',
          imageLabel: 'SAFEVISION',
          image: '/safevision.png',
          imageAlt: 'Screenshot of SafeVision',
        },
        {
          name: 'Virtual Wallet for SMEs',
          description:
            'Invoice management and financial reporting application for small and medium-sized businesses.',
          tech: ['Vue.js', '.NET', 'DDD', 'C#'],
          demo: 'https://wallet-front-end-kappa.vercel.app/',
          code: 'https://github.com/Salvlormonch1',
          accent: 'from-sky-500/20 via-blue-500/10 to-indigo-500/10',
          imageLabel: 'PLACEHOLDER IMAGE WALLET',
          image: '/billetera.png',
          imageAlt: 'Screenshot of Virtual Wallet for SMEs',
        },
        {
          name: 'EzGas',
          description:
            'Web application for locating gas stations and fuel pumps. Implements graphs to optimize routes based on real location data.',
          tech: ['Python', 'Flask', 'Graphs'],
          demo: 'https://ez-gas.vercel.app/',
          code: 'https://github.com/Salvlormonch1',
          accent: 'from-emerald-500/20 via-green-500/10 to-lime-500/10',
          imageLabel: 'EZGAS',
          image: '/ezgas.png',
          imageAlt: 'Screenshot of EzGas',
        },
        {
          name: 'SafePoint',
          description:
            'Public safety incident prediction system that uses Machine Learning to identify areas with higher risk probability and prioritize prevention.',
          tech: ['.NET', 'FastAPI', 'Flutter', 'XGBoost', 'Machine Learning'],
          demo: 'https://safepoint-dashboard.vercel.app/',
          code: 'https://github.com/Salvlormonch1',
          accent: 'from-sky-500/20 via-blue-500/10 to-indigo-500/10',
          imageLabel: 'SAFEPOINT',
          image: '/safepoint.png',
          imageAlt: 'Screenshot of SafePoint',
        },

      ],
    },
    skills: {
      title: 'Technical skills',
      groups: [
        {
          title: 'Languages',
          items: ['C++', 'C#', 'Java', 'JavaScript', 'TypeScript', 'Python', 'PHP', 'Kotlin', 'Dart', 'SQL', 'HTML', 'CSS'],
        },
        {
          title: 'Frameworks',
          items: ['.NET', 'React', 'Angular', 'Vue.js', 'Spring Boot', 'Flutter'],
        },
        {
          title: 'Databases',
          items: ['PostgreSQL', 'SQL Server', 'MySQL', 'MongoDB', 'Informix', 'SQLite', 'Room'],
        },
        {
          title: 'Tools',
          items: ['RESTful APIs', 'Swagger', 'Git', 'GitHub', 'GitLab', 'TFS', 'Firebase', 'Claude Code'],
        },
        {
          title: 'Methods & Approaches',
          items: ['Scrum', 'Kanban', 'Domain Driven Design', 'MVC', 'Clean Architecture'],
        },
        {
        title: 'Spoken Languages',
        items: ['Spanish (Native)', 'English (Fluent)'],
        },
      ],
    },
    education: {
      title: 'Education and certifications',
      degree: 'Software Engineering — Universidad Peruana de Ciencias Aplicadas (UPC)',
      duration: '2022 - Present',
      certifications: [
        {
          title: 'Scrum Fundamentals Certified (SFC)',
          issuer: 'SCRUMstudy',
          id: 'ID-PLACEHOLDER-001',
          link: 'https://example.com/certificado-placeholder-1',
        },
        {
          title: 'Python For Everybody',
          issuer: 'University of Michigan',
          id: 'ID-PLACEHOLDER-002',
          link: 'https://example.com/certificado-placeholder-2',
        },
        {
          title: 'Google IT Support',
          issuer: 'Google',
          id: 'ID-PLACEHOLDER-003',
          link: 'https://example.com/certificado-placeholder-3',
        },
        {
          title: 'Introduction to MongoDB',
          issuer: 'MongoDB',
          id: 'ID-PLACEHOLDER-004',
          link: 'https://example.com/certificado-placeholder-4',
        },
      ],
    },
    contact: {
      title: 'Contact',
      subtitle: 'Have an opportunity, idea, or project in mind? Send me a message and let us review it.',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send message',
      },
      direct: 'Direct links',
    },
    footer: 'Copyright © Ramón Jorge.',
    langLabel: 'ES',
  },
};
