export default {
  global: {
    Name: 'Planificación y control de cronograma y costos',
    Description:
      'Este componente desarrolla la planificación y el control del cronograma y los costos a partir de la información y la herramienta configuradas previamente. Comprende la construcción de la EDT, la definición y secuenciación de actividades, la asignación de recursos, la estimación de costos, el establecimiento de líneas base y el análisis de variaciones y cambios.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Estructura de desglose del trabajo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Entregables y descomposición del alcance',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Planificación gradual del trabajo',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Niveles, cuentas de control y paquetes de trabajo',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Codificación y diccionario de la EDT',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Construcción y validación de la EDT en el <i>software</i>',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Actividades y red del cronograma',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Lista de actividades y atributos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Hitos y actividades resumen',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Relaciones y dependencias entre actividades',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Diagramación y red del cronograma',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Ingreso y validación de actividades en el <i>software</i>',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Duraciones y recursos del proyecto',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Estimación análoga y paramétrica de duraciones',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Calendarios de tareas y cálculo de duración',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Definición de recursos humanos, materiales y equipos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Asignación y disponibilidad de recursos',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Identificación y ajuste de sobreasignaciones',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Cronograma y presupuesto del proyecto',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Desarrollo y optimización del cronograma',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Ruta crítica, holguras y fechas del proyecto',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Estimación de costos de actividades y recursos',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Reservas de contingencia y de gestión',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Línea base del cronograma y de los costos',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Seguimiento del cronograma y los costos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Fecha de estado y actualización del avance',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Comparación entre información planificada y real',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Variaciones del cronograma',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Variaciones de los costos',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Informes y reportes de desempeño',
            hash: 't_5_5',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Valor ganado y control de cambios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Valor planificado, valor ganado y costo real',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Variaciones e índices de desempeño',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Proyecciones del cronograma y presupuesto',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Solicitudes y análisis de impacto de los cambios',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Aprobación y actualización de las líneas base',
            hash: 't_6_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Actividad crítica',
      significado:
        'actividad que forma parte de la ruta crítica y no dispone de holgura, de modo que cualquier retraso en su inicio o en su finalización desplaza la fecha de terminación del proyecto.',
    },
    {
      termino: 'Costo real',
      significado:
        'suma de los costos efectivamente incurridos para ejecutar el trabajo completado hasta una fecha de estado, incluidos el personal, los materiales, los equipos y los servicios. Se compara con el valor ganado para analizar la eficiencia del gasto.',
    },
    {
      termino: 'Valor ganado',
      significado:
        'valor presupuestado del trabajo que realmente se ha completado hasta una fecha de estado. Se obtiene aplicando el presupuesto aprobado de cada actividad a su avance real y permite medir el desempeño del proyecto frente al cronograma y los costos.',
    },
    {
      termino: 'Valor planificado',
      significado:
        'presupuesto autorizado para el trabajo que, según la línea base, debía haberse ejecutado hasta una fecha de estado. Representa el avance esperado y sirve de referencia para comparar el valor ganado.',
    },
  ],
  referencias: [
    {
      referencia:
        'AGUTIER. (2013, 31 de mayo). ¿Qué es una actividad crítica? ¿Una no crítica? ClubEnsayos. ',
      link: 'https://www.clubensayos.com/Ciencia/Qu%C3%A9-es-una-actividad-critica-Una-no-cr%C3%ADtica/817127.html',
    },
    {
      referencia:
        'Bakić, L. (2024, 13 de septiembre). ¿Qué es el costo real en la gestión de proyectos? Productive. ',
      link: 'https://productive.io/blog/actual-cost-in-project-management/',
    },
    {
      referencia:
        'Gestión de Proyectos, P. 7. (2023, 14 de agosto). Valor planificado (PV): La columna vertebral del presupuesto en la gestión de proyectos. Dharma Consulting. ',
      link: 'https://dharmacon.net/2023/08/14/valor-planificado-pv-la-columna-vertebral-del-presupuesto-en-la-gestion-de-proyectos/',
    },
    {
      referencia:
        'PMP, M. E. (2024, 26 de septiembre). ¿Qué es el valor ganado (EV) de un proyecto? ProjectManagement.com. ',
      link: 'https://www.projectmanagement.com/wikis/711501/what-is-the-earned-value--ev--of-a-project',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable del ecosistema virtual de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Joinner Enrique Osorio Martinez',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez Benitez',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
