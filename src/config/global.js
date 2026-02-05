export default {
  global: {
    Name:
      'Gestión productiva de équidos según normatividad BPG y bienestar animal',
    Description:
      'El componente formativo aborda la gestión productiva de équidos mediante el estudio de su biología, comportamiento, instalaciones y requisitos sanitarios. Integra bienestar animal, normatividad vigente y Buenas Prácticas Ganaderas para fortalecer la toma de decisiones técnicas. Su propósito es formar profesionales capaces de implementar sistemas responsables y sostenibles que respondan a las exigencias productivas, legales y sociales del sector equino colombiano.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
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
        titulo: 'Conocimiento general de los équidos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Especies y variedades de équidos domésticos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Fisiología digestiva y especies domésticas relevantes',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Características morfológicas y fisiológicas de los équidos',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Especies y razas de équidos utilizadas en Colombia',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Importancia de los équidos en Colombia',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: '¿Qué es una empresa de producción équida?',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Principales enfoques productivos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Características constructivas de las pesebreras',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Equipos y herramientas utilizadas en una empresa de producción équida',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo:
              'Distribución funcional y bioseguridad de las instalaciones équidas',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Buenas Prácticas Ganaderas en équidos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.2',
            titulo:
              'Beneficios productivos, sanitarios, ambientales y sociales',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Marco legal colombiano vigente',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Organismos involucrados en la implementación de las BPE',
            hash: 't_3_4',
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/72312199_CF01_DU.pdf',
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
  complementario: [
    {
      tema: 'Buenas Prácticas Ganaderas en Équidos',
      referencia:
        'Instituto Colombiano Agropecuario – ICA. (2017). <em>Resolución 7953 de 2017: Requisitos sanitarios y de bienestar animal para BPG en producción primaria de équidos</em>. ICA.',
      tipo: 'Resolución oficial / Marco normativo',
      link:
        'https://www.ica.gov.co/normatividad/normas-ica/resoluciones-oficinas-nacionales/2017/2017r7953',
    },
    {
      tema: 'Buenas Prácticas Ganaderas en Équidos',
      referencia:
        'World Organisation for Animal Health – WOAH. (2022). <em>Código Sanitario para los Animales Terrestres: Bienestar de los équidos</em>. WOAH.',
      tipo: 'Manual internacional',
      link:
        'https://www.woah.org/fileadmin/Home/esp/Health_standards/tahc/current/es_chapitre_aw_working_equids.htm',
    },
    {
      tema: 'Buenas Prácticas Ganaderas en Équidos',
      referencia:
        'Alcaldía Mayor de Bogotá, D.C. (1989). <em>Ley 84 de 1989: Por la cual se adopta el Estatuto Nacional de Protección de los Animales</em>.',
      tipo: 'Normativa',
      link: 'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=8242',
    },
    {
      tema: 'Buenas Prácticas Ganaderas en Équidos',
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural. (2020, 3 junio). <em>Resolución 000136 de 2020: Manual de Condiciones de Bienestar Animal para especies de producción</em>.',
      tipo: 'Normativa',
      link:
        'https://www.minagricultura.gov.co/Normatividad/Resoluciones/Resoluci%C3%B3n%20No.%20000136%20de%202020.pdf',
    },
    {
      tema: 'Buenas Prácticas Ganaderas en Équidos',
      referencia:
        'ICA. (2023). <em>Animal welfare in Colombia / Bienestar animal en Colombia</em>.',
      tipo: 'Video educativo',
      link: 'https://www.youtube.com/watch?v=t0YlgDtL_wc',
    },
    {
      tema:
        'Distribución funcional y bioseguridad de las instalaciones équidas',
      referencia:
        'Fedequinas. (2022). <em>Reglamento Nacional para Exposiciones: Bienestar y Manejo Equino</em>. Federación Colombiana de Asociaciones Equinas.',
      tipo: 'Manual gremial',
      link:
        'https://fedequinas.org/wp-content/uploads/2025/01/REGLAMENTO-ACTUALIZADO-A-11-DE-DICIEMBRE-DE-2024.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Bioseguridad',
      significado:
        'Conjunto de medidas orientadas a prevenir la entrada, permanencia y propagación de enfermedades en una unidad productiva.',
    },
    {
      termino: 'Bienestar animal',
      significado:
        'Estado físico y emocional adecuado del animal, garantizando salud, confort, ausencia de dolor y posibilidad de expresar comportamientos naturales.',
    },
    {
      termino: 'Buenas Prácticas Ganaderas (BPG)',
      significado:
        'Lineamientos técnicos y sanitarios que aseguran una producción responsable, el bienestar animal, la inocuidad y la sostenibilidad.',
    },
    {
      termino: 'Caballeriza',
      significado:
        'Infraestructura destinada al alojamiento individual de équidos, incluyendo pesebreras, patios y zonas de manejo.',
    },
    {
      termino: 'Encefalomielitis equina',
      significado:
        'Enfermedad viral de control oficial que afecta el sistema nervioso de los équidos y puede tener impacto zoonótico.',
    },
    {
      termino: 'Equino',
      significado:
        'Mamífero perteneciente a la familia Equidae, como el caballo, asno, mula o pony.',
    },
    {
      termino: 'Estabulación',
      significado:
        'Proceso de alojar a los équidos en pesebreras o espacios cerrados para descanso, alimentación o manejo.',
    },
    {
      termino: 'Hato equino',
      significado:
        'Conjunto de caballos u otros équidos pertenecientes a una misma unidad de producción.',
    },
    {
      termino: 'Inocuidad',
      significado:
        'Condición que garantiza que un producto o sistema no represente riesgo para la salud humana, animal o ambiental.',
    },
    {
      termino: 'Manejo sanitario',
      significado:
        'Acciones preventivas y de control para mantener la salud de los équidos, como vacunación, desparasitación y registros sanitarios.',
    },
    {
      termino: 'Normatividad ICA',
      significado:
        'Conjunto de regulaciones emitidas por el Instituto Colombiano Agropecuario que rigen la sanidad y la producción equina en Colombia.',
    },
    {
      termino: 'Plan sanitario',
      significado:
        'Programa organizado de actividades de salud animal que incluye vacunaciones, desparasitaciones y monitoreo clínico.',
    },
    {
      termino: 'Sanidad animal',
      significado:
        'Estado de salud óptimo de los animales, libre de enfermedades y bajo vigilancia epidemiológica.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Sistema de registro que permite identificar, seguir y documentar el historial sanitario y productivo de cada equino.',
    },
    {
      termino: 'Zoonosis',
      significado:
        'Enfermedad que puede transmitirse entre animales y seres humanos, representando un riesgo para la salud pública.',
    },
  ],
  referencias: [
    {
      referencia:
        'Agrosavia. (2022). <em>Prácticas de conservación de suelos y agua en fincas pecuarias</em>. Corporación Colombiana de Investigación Agropecuaria.',
      link: '',
    },
    {
      referencia:
        'Congreso de Colombia. (2012). <em>Ley 1562 de 2012: Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST)</em>. Diario Oficial.',
      link: '',
    },
    {
      referencia:
        'Congreso de Colombia. (2016). <em>Ley 1774 de 2016: Por la cual se modifica el Código Civil y se establecen sanciones por maltrato animal</em>. Diario Oficial.',
      link: '',
    },
    {
      referencia:
        'FAO. (2019). <em>Manejo sostenible del estiércol en sistemas productivos</em>. Organización de las Naciones Unidas para la Alimentación y la Agricultura.',
      link: '',
    },
    {
      referencia:
        'FAO. (2020). <em>Buenas prácticas para el bienestar animal en sistemas pecuarios</em>. Organización de las Naciones Unidas para la Alimentación y la Agricultura.',
      link: '',
    },
    {
      referencia:
        'Fedequinas. (2022). <em>Reglamento Nacional para Exposiciones y Bienestar del Caballo Criollo Colombiano</em>. Federación Colombiana de Asociaciones Equinas.',
      link: '',
    },
    {
      referencia:
        'ICA – Instituto Colombiano Agropecuario. (2015). <em>Resolución 676 de 2015: Medidas sanitarias para la prevención y control de la Anemia Infecciosa e Influenza Equina</em>. ICA.',
      link: '',
    },
    {
      referencia:
        'ICA – Instituto Colombiano Agropecuario. (2017). <em>Resolución 7953 de 2017: Requisitos sanitarios y de bienestar animal para la certificación en Buenas Prácticas Ganaderas (BPG) en producción primaria de équidos</em>. ICA.',
      link: '',
    },
    {
      referencia:
        'ICA – Instituto Colombiano Agropecuario. (2020). <em>Guía de bioseguridad para predios pecuarios</em>. Ministerio de Agricultura y Desarrollo Rural.',
      link: '',
    },
    {
      referencia:
        'Instituto Nacional de Salud. (2023). <em>Protocolo de vigilancia en salud pública: Encefalitis equinas</em>. INS.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural. (2020). <em>Manual de condiciones de bienestar animal para especies de producción</em>. MinAgricultura.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2017). <em>Guía técnica para la gestión integral de residuos peligrosos (RESPEL) en actividades agropecuarias</em>. MinAmbiente.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Trabajo. (2019). <em>Resolución 0312 de 2019: Estándares mínimos del Sistema de Gestión de Seguridad y Salud en el Trabajo</em>. MinTrabajo.',
      link: '',
    },
    {
      referencia:
        'Organización Mundial de Sanidad Animal – WOAH. (2022). <em>Código sanitario para los animales terrestres: Bienestar de los équidos</em>. WOAH.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Eliana Audrey Manchola Pérez',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya',
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
          nombre: 'Diana Milena Picón Rincón',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete de lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete de lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'José Eduardo Solano Rivero',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
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
