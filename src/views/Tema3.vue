<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Buenas Prácticas Ganaderas en Équidos
    
    p.mb-5 Las Buenas Prácticas Ganaderas (BPG) y, más específicamente, las Buenas Prácticas Equinas (BPE), comprenden un conjunto de acciones, normas y procedimientos orientados a garantizar que la producción de équidos (caballos, mulas, asnos, burdéganos, ponis, entre otros)  se realice de forma sanitaria, segura, ética, sostenible y legalmente responsable.

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En Colombia, el Instituto Colombiano Agropecuario (ICA) es la autoridad encargada de reglamentar y certificar las BPG para los sistemas productivos, incluyendo los sistemas de producción de équidos. Esta labor se realiza mediante resoluciones y listas de chequeo específicas.

    p.mb-5 Un hito fundamental en esta materia es la Resolución ICA 7953 de 2017, la cual estableció los requisitos sanitarios y de bienestar animal para obtener la certificación en BPG en la producción primaria de équidos destinados a recreación, trabajo y deporte. Esta resolución incorpora de manera explícita el bienestar animal y las cinco libertades como criterio central del proceso de certificación.

    separador
    
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Concepto y objetivos de las Buenas Prácticas Equinas (BPE)
    
    .row.mb-5.align-items-center
      .col-lg-3.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        p(data-aos="fade-left") Las BPE se entienden como un conjunto de medidas integradas que buscan mejorar el manejo de los équidos, protegiendo su salud y bienestar, al tiempo que se garantiza la calidad de los servicios y productos que generan. Estas prácticas abarcan los siguientes propósitos fundamentales:

        .bg-color-4(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema3/3.png', alt='')
            .col-lg
              .p-4
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.fas.fa-check-circle.bg-color-3
                    p.mb-0 Proteger la salud y el bienestar de los animales.
                  li.mb-0.d-flex
                    i.fas.fa-check-circle.bg-color-3
                    p.mb-0 Garantizar la inocuidad de los productos y servicios asociados (turismo, deporte, trabajo, recreación).
                  li.mb-0.d-flex
                    i.fas.fa-check-circle.bg-color-3
                    p.mb-0 Prevenir la diseminación de enfermedades de importancia económica y de salud pública.
                  li.mb-0.d-flex
                    i.fas.fa-check-circle.bg-color-3
                    p.mb-0 Reducir el impacto ambiental de la actividad equina.
                  li.mb-0.d-flex
                    i.fas.fa-check-circle.bg-color-3
                    p.mb-0 Cumplir la normatividad colombiana e internacional, como la de la <em>World Organisation for Animal Health</em> (WOAH/OIE) y la FAO.
    
    p En Colombia, estas prácticas se operacionalizan mediante:

    ul.lista-ul--color
      li.mb-0.d-flex
        i.fas.fa-check-circle.bg-color-3
        p.mb-0 <b>Listas de chequeo del ICA</b> (como el formato 3-1099), que evalúan aspectos de sanidad, bioseguridad, instalaciones, alimentación, manejo y registros.
      li.mb-0.d-flex
        i.fas.fa-check-circle.bg-color-3
        p.mb-0 <b>Requisitos establecidos en la Resolución 7953 de 2017</b>, los cuales aplican a équidos utilizados en actividades de recreación, trabajo y deporte.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Objetivos Principales de las BPE
    
    p.mb-5 Los objetivos de las Buenas Prácticas Equinas reflejan una visión integral del bienestar animal, la productividad, la salud pública y el cumplimiento legal:

    .row.align-items-start.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/4.png", alt="").mb-4.mb-lg-0
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-8")
          .div(titulo="Garantizar el bienestar animal")
            p Aplicación de las cinco libertades: sin hambre ni sed, sin dolor ni enfermedades evitables, sin miedo ni estrés, con posibilidad de expresar conductas naturales.
    
          .div(titulo="Mejorar productividad y eficiencia")
            p Se logran animales más longevos, con mejor desempeño deportivo, mayor capacidad de trabajo y mejores índices reproductivos.
    
          .div(titulo="Reducir riesgos sanitarios y de salud pública")
            p Prevención y control de enfermedades como Anemia Infecciosa Equina, encefalitis equina, influenza equina y rabia, mediante planes sanitarios y vigilancia epidemiológica.
          .div(titulo="Proteger el ambiente y fomentar sostenibilidad")
            p Manejo adecuado de estiércol, aguas residuales, pasturas y residuos veterinarios.
    
          .div(titulo="Cumplir la legislación y fomentar aceptación social")
            p Respuesta a las exigencias legales colombianas (Ley 84 de 1989, Ley 1774 de 2016) y sensibilidad social creciente sobre bienestar animal.
    
          .div(titulo="Fortalecer la competitividad del sector")
            p Con más de 300.000 caballos registrados en FEDEQUINOS, el cumplimiento de BPE es clave para mantener y ampliar la competitividad nacional e internacional del caballo criollo colombiano de paso.
    
    separador
    
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Beneficios productivos, sanitarios, ambientales y sociales

    p.mb-5 La implementación de las BPE conlleva múltiples beneficios no solo para los animales, sino también para los productores, el entorno y la comunidad en general. A continuación, se describen los principales beneficios en cuatro dimensiones clave:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema3/5.png")
            .col-lg-7.order-lg-1
              h5 Beneficios productivos
              p Las BPE contribuyen directamente a mejorar la eficiencia económica de los sistemas equinos, permitiendo animales más sanos, fuertes y duraderos.
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.fas.fa-check-circle.bg-color-3
                  p.mb-0 Mayor longevidad útil del caballo en actividades deportivas, laborales, turísticas y recreativas.
                li.mb-0.d-flex
                  i.fas.fa-check-circle.bg-color-3
                  p.mb-0 Reducción de lesiones musculoesqueléticas y cojeras, gracias a superficies adecuadas, herrado correcto, entrenamiento progresivo y manejo responsable.
                li.mb-0.d-flex
                  i.fas.fa-check-circle.bg-color-3
                  p.mb-0 Mejor condición corporal, mediante dietas balanceadas, acceso continuo a agua limpia y rutinas de ejercicio
                li.mb-0.d-flex
                  i.fas.fa-check-circle.bg-color-3
                  p.mb-0 Desempeño optimizado, con animales más dispuestos y menos fatigados.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema3/6.png")
            .col-lg-7.order-lg-1
              h5 Beneficios sanitarios
              p Aplicar las BPE permite establecer mecanismos preventivos y correctivos que fortalecen la sanidad del hato equino.

              ul.lista-ul--color
                li.mb-0.d-flex
                  i.fas.fa-check-circle.bg-color-3
                  p.mb-0 Disminución de enfermedades infecciosas y parasitarias mediante vacunación, desparasitación y protocolos de cuarentena.
                li.mb-0.d-flex
                  i.fas.fa-check-circle.bg-color-3
                  p.mb-0 Mejor trazabilidad, con registros detallados de identificación, tratamientos, movimientos y antecedentes sanitarios.
                li.mb-0.d-flex
                  i.fas.fa-check-circle.bg-color-3
                  p.mb-0 Respuesta rápida ante brotes, gracias a la existencia de registros y protocolos establecidos
              
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema3/7.png")
            .col-lg-7.order-lg-1
              h5 Beneficios ambientales
              h5 Las BPE promueven una relación equilibrada entre la actividad equina y el entorno natural, mitigando el impacto ecológico.
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.fas.fa-check-circle.bg-color-3
                  p.mb-0 Manejo adecuado del estiércol, a través de compostaje, uso como abono y sitios de acopio, evitando la contaminación de fuentes hídricas.
                li.mb-0.d-flex
                  i.fas.fa-check-circle.bg-color-3
                  p.mb-0 Uso racional de pasturas y potreros, aplicando rotación, descanso de praderas y densidades animales adecuadas.
                li.mb-0.d-flex
                  i.fas.fa-check-circle.bg-color-3
                  p.mb-0 Uso racional de pasturas y potreros, aplicando rotación, descanso de praderas y densidades animales adecuadas.
              
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema3/8.png")
            .col-lg-7.order-lg-1
              h5 Beneficios sociales
              h5 Además del bienestar animal, las BPE generan efectos positivos en las condiciones laborales, el tejido comunitario y la percepción social de la actividad equina.
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.fas.fa-check-circle.bg-color-3
                  p.mb-0 Mejores condiciones laborales para el personal: seguridad, capacitación y uso de elementos de protección personal.
                li.mb-0.d-flex
                  i.fas.fa-check-circle.bg-color-3
                  p.mb-0 Fortalecimiento del tejido social rural, profesionalizando la actividad equina en sectores como el turismo, el deporte, la cultura y la educación.
                li.mb-0.d-flex
                  i.fas.fa-check-circle.bg-color-3
                  p.mb-0  Mayor aceptación nacional e internacional de eventos equinos (como los mundiales de paso fino), gracias al compromiso demostrado con el bienestar animal.
    
    separador
    
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Marco legal colombiano vigente

    p.mb-5 La implementación de las Buenas Prácticas Equinas (BPE) en Colombia se sustenta en un marco legal robusto que articula leyes nacionales, resoluciones técnicas del ICA y estándares internacionales. Este marco establece los principios, obligaciones y lineamientos para garantizar la salud, el bienestar y la trazabilidad de los équidos.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Legislación marco de bienestar animal
    
    p.mb-5 En Colombia, existen leyes fundamentales que reconocen a los animales como seres sintientes y garantizan su protección frente al maltrato. Estas normas constituyen la base ética y jurídica para toda actividad productiva con équidos.

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.bg-color-12.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema3/9.svg', alt='Texto descriptivo 1')
        h2.text-center.text-white Ley 84 de 1989 – Estatuto Nacional de Protección de los Animales
        ul.lista-ul--color
          li.mb-0.d-flex
            i.fas.fa-check-circle.bg-color-3
            p.mb-0.text-white Define los actos de crueldad hacia los animales y establece sanciones.
          li.mb-0.d-flex
            i.fas.fa-check-circle.bg-color-3
            p.mb-0.text-white Su objetivo es prevenir el sufrimiento, promover la salud y el bienestar animal y sancionar el maltrato.
    
      .col-md.tarjeta.color-primario.bg-color-14.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema3/10.svg', alt='Texto descriptivo 3')
        h2.text-center Ley 1774 de 2016 – Animales como seres sintientes
        ul.lista-ul--color
          li.mb-0.d-flex
            i.fas.fa-check-circle.bg-color-3
            p.mb-0 Modifica el Código Civil y la Ley 84 de 1989 para reconocer a los animales como “seres sintientes”, no como cosas.
          li.mb-0.d-flex
            i.fas.fa-check-circle.bg-color-3
            p.mb-0 Su Refuerza el deber legal de brindar un trato digno y respetuoso.
          li.mb-0.d-flex
            i.fas.fa-check-circle.bg-color-3
            p.mb-0 Su Endurece las sanciones penales y administrativas por maltrato y negligencia, lo cual es especialmente relevante en la actividad equina.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Normas específicas para BPG y producción de équidos
    
    p.mb-5 Existen regulaciones técnicas expedidas por el ICA que desarrollan de forma detallada los requisitos sanitarios, de bienestar y administrativos aplicables a la producción primaria de équidos.

    .row.align-items-start.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/11.png", alt="").mb-4.mb-lg-0
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-8")
          .div(titulo="Resolución ICA 7953 de 2017 – BPG en producción primaria de équidos")
            p - Establece los requisitos sanitarios y de bienestar animal para obtener la certificación en BPG en predios dedicados a la recreación, trabajo y deporte.
            p - Define exigencias sobre:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-3
                p.mb-0 Sanidad animal: Plan sanitario, vacunas, pruebas diagnósticas.
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-3
                p.mb-0 Bienestar animal: Aplicación de las cinco libertades, confort, manejo sin maltrato, densidad adecuada y ejercicio.
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-3
                p.mb-0 Identificación y trazabilidad.
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-3
                p.mb-0 Uso responsable de alimentos y medicamentos veterinarios.
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-3
                p.mb-0 Registros obligatorios: Tratamientos, mortalidades, ingresos y salidas.
            p - Es la norma base para la certificación oficial en BPG/BPE.
        
          .div(titulo="Metodología y listas de chequeo del ICA")
            p El ICA ha diseñado instrumentos como la Forma 3-1099, utilizada para verificar el cumplimiento de los criterios de BPG/BPE en predios equinos (criaderos, escuelas, establos, etc.).
    
          .div(titulo="Normas sanitarias específicas del ICA")
            p Incluyen resoluciones y manuales técnicos para el control de:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-3
                p.mb-0 Anemia Infecciosa Equina (AIE), con inclusión de la prueba de <em>Coggins</em>.
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-3
                p.mb-0 Encefalitis equinas virales, influenza equina, rabia, entre otras.
            p Regulan también la movilización nacional de équidos y su participación en ferias y exposiciones.
          .div(titulo="Resolución 136 de 2020 (MinAgricultura) – Bienestar en exposiciones equinas")
            p - Establece lineamientos de bienestar animal en eventos públicos.
            p - Ha sido adoptada por FEDEQUINOS en sus reglamentos para ferias y exhibiciones.
            p - Obliga a la designación de veedores de bienestar animal en estos eventos.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Normas ambientales y de manejo de residuos
    
    p.mb-5 La actividad equina también debe cumplir con las regulaciones ambientales nacionales, que buscan mitigar los impactos negativos al entorno.

    .row.justify-content-center
      .col-lg-8
        .bg-color-4.mb-5
          .px-4.px-md-5.py-4
            .row.align-items-center
              .col-lg-auto.mb-3.mb-lg-0
                img(src="@/assets/curso/tema3/12.svg", style="max-width: 160px").mx-auto
              .col-lg
                p Ley 99 de 1993 – Sistema Nacional Ambiental (SINA): Marco general de la política ambiental colombiana.
                p •	Normas sobre manejo de residuos peligrosos, que aplican al uso de:
                ul.lista-ul--color.ms-3
                  li.mb-0.d-flex
                    i.fas.fa-check-circle.bg-color-3
                    p.mb-0 Medicamentos vencidos.
                  li.mb-0.d-flex
                    i.fas.fa-check-circle.bg-color-3
                    p.mb-0 Jeringas y frascos vacíos.
                  li.mb-0.d-flex
                    i.fas.fa-check-circle.bg-color-3
                    p.mb-0 Envases contaminados y desechos veterinarios.
    
    p.mb-5 Estas disposiciones son obligatorias para todos los predios y establecimientos que desarrollen actividades con équidos.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Estándares internacionales como base técnica
    
    p.mb-5 Las exigencias colombianas en materia de bienestar y sanidad equina se alinean con directrices internacionales ampliamente reconocidas. A continuación, se presentan los principales organismos de referencia:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema3/13.png")
            .col-lg-7.order-lg-1
              h5 WOAH  – <em>World Organisation for Animal Health</em>
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.fas.fa-check-circle.bg-color-3
                  p.mb-0 El Código Sanitario para los Animales Terrestres, Capítulo 7, establece los principios generales del bienestar animal.
                li.mb-0.d-flex
                  i.fas.fa-check-circle.bg-color-3
                  p.mb-0 Contiene un capítulo específico sobre équidos de trabajo (working equids), abordando agua, alimentación, salud, carga, descanso y manejo.
                li.mb-0.d-flex
                  i.fas.fa-check-circle.bg-color-3
                  p.mb-0 Es citado como base técnica en la Resolución 7953 de 2017.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema3/14.png")
            .col-lg-7.order-lg-1
              h5 FAO – <em>Food and Agriculture Organization</em>

              ul.lista-ul--color
                li.mb-0.d-flex
                  i.fas.fa-check-circle.bg-color-3
                  p.mb-0 FAO – Food and Agriculture Organization
                li.mb-0.d-flex
                  i.fas.fa-check-circle.bg-color-3
                  p.mb-0 Administra bases de datos de razas, como el Caballo criollo colombiano.
                li.mb-0.d-flex
                  i.fas.fa-check-circle.bg-color-3
                  p.mb-0 Respalda el cumplimiento de estándares de sostenibilidad, bioseguridad y bienestar animal.

    separador
    
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Organismos involucrados en la implementación de BPE

    p.mb-5 La aplicación efectiva de las Buenas Prácticas Equinas (BPE) en Colombia requiere una acción conjunta entre múltiples actores. Esta red incluye instituciones estatales, gremios, organizaciones internacionales, la academia y los propios productores. Cada uno cumple funciones específicas que, en conjunto, garantizan el cumplimiento normativo y técnico de las BPE en el país.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Instituciones nacionales
    
    p.mb-5 En el ámbito nacional, las entidades públicas y gremiales lideran el desarrollo normativo, la certificación, la formulación de políticas y la promoción del bienestar animal. A continuación, se presentan los principales actores nacionales y su papel en la implementación de las BPE:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema3/15.png")
            .col-lg-7.order-lg-1
              h5 ICA – Instituto Colombiano Agropecuario
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.fas.fa-check-circle.bg-color-3
                  p.mb-0 Autoridad sanitaria oficial del país.
                li.mb-0.d-flex
                  i.fas.fa-check-circle.bg-color-3
                  p.mb-0 Expide normas técnicas, como la Resolución 7953 de 2017
                li.mb-0.d-flex
                  i.fas.fa-check-circle.bg-color-3
                  p.mb-0 Diseña metodologías e instrumentos de evaluación.
                li.mb-0.d-flex
                  i.fas.fa-check-circle.bg-color-3
                  p.mb-0 Certifica predios en BPG/BPE que cumplan los requisitos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema3/16.png")
            .col-lg-7.order-lg-1
              h5 Ministerio de Agricultura y Desarrollo Rural
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.fas.fa-check-circle.bg-color-3
                  p.mb-0 Formula políticas agropecuarias que integran el bienestar animal y la sostenibilidad.
                li.mb-0.d-flex
                  i.fas.fa-check-circle.bg-color-3
                  p.mb-0 Expide resoluciones como la 136 de 2020, aplicable a eventos equinos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema3/17.png")
            .col-lg-7.order-lg-1
              h5 FEDEQUINOS – Federación Colombiana de Asociaciones Equinas
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.fas.fa-check-circle.bg-color-3
                  p.mb-0 Máxima entidad gremial del sector equino.
                li.mb-0.d-flex
                  i.fas.fa-check-circle.bg-color-3
                  p.mb-0 Agrupa más de 20 asociaciones y 300.000 caballos registrados.
                li.mb-0.d-flex
                  i.fas.fa-check-circle.bg-color-3
                  p.mb-0 Su reglamento incluye el bienestar animal como principio rector.
                li.mb-0.d-flex
                  i.fas.fa-check-circle.bg-color-3
                  p.mb-0 Establece veedores de bienestar en ferias y exposiciones.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema3/18.png")
            .col-lg-7.order-lg-1
              h5 Otras asociaciones gremiales (FECABALLO, ANCA, ASDEPASO, regionales)
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.fas.fa-check-circle.bg-color-3
                  p.mb-0 Promueven la cría, exhibición y mejora del Caballo Criollo Colombiano y otras razas.
                li.mb-0.d-flex
                  i.fas.fa-check-circle.bg-color-3
                  p.mb-0 Implementan normas internas de bienestar animal alineadas con el ICA y FEDEQUINOS.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Organismos internacionales
    
    p.mb-5 Colombia adopta estándares internacionales de bienestar y sanidad animal como base técnica para su normativa interna. Estos organismos aportan lineamientos, recursos y reconocimiento global a la producción equina nacional.

    .row.align-items-start.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/19.png", alt="").mb-4.mb-lg-0
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-8")
          .div(titulo="WOAH")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-3
                p.mb-0 Define estándares internacionales de bienestar para équidos.
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-3
                p.mb-0 Sus recomendaciones abordan temas como salud, alimentación, carga de trabajo, transporte y reproducción.
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-3
                p.mb-0 Sus principios están integrados en la Resolución ICA 7953 de 2017.
        
          .div(titulo="FAO")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-3
                p.mb-0 Promueve buenas prácticas ganaderas, sostenibilidad y bienestar animal..
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-3
                p.mb-0 Reconoce al Caballo Criollo Colombiano en sus bases de datos de razas.
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-3
                p.mb-0 Apoya proyectos de desarrollo sostenible en el sector equino. 
    
          .div(titulo="ICWE y WESLI")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-3
                p.mb-0 Brindan estándares técnicos, recursos y materiales educativos.
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-3
                p.mb-0 Sirven como soporte técnico para proyectos de bienestar en équidos de trabajo.
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-3
                p.mb-0 Apoyan la mejora del manejo en contextos rurales.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Academia y sector productivo
    
    p.mb-5 La academia y los productores cumplen un rol crucial en la aplicación práctica, la investigación aplicada y la mejora continua de las BPE. Son quienes llevan las normas al campo y transforman la teoría en acciones concretas.

    TabsC.color-acento-botones(data-aos="zoom-in").mb-5
      .p-3.py-md-4(titulo="Universidades y centros de investigación")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-md-0.order-2
            h4 Universidades y centros de investigación
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-3
                p.mb-0 Realizan tesis, proyectos y estudios aplicados sobre BPG/BPE.
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-3
                p.mb-0 Evalúan la implementación en fincas, escuelas de equitación y unidades montadas.
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-3
                p.mb-0 Proponen mejoras técnicas y detectan brechas en la aplicación práctica.

          .col-lg-5.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema3/20.png', alt='Texto que describa la imagen')
      .p-3.py-md-4(titulo="Productores y actores del sector equino")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-md-0.order-2
            h4 Productores y actores del sector equino
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-3
                p.mb-0 Aplican las BPE en el manejo diario de los équidos.
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-3
                p.mb-0 Aseguran condiciones adecuadas de alimentación, salud y bienestar.
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-3
                p.mb-0 Cumplen con la normativa y promueven la sostenibilidad.
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema3/21.png', alt='Texto que describa la imagen')

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
