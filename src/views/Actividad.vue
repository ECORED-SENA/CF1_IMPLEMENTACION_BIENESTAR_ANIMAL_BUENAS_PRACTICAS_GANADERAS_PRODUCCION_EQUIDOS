<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Gestión productiva de équidos y Buenas Prácticas Ganaderas (BPG)',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar el conocimiento sobre biología, manejo, infraestructura, legislación y principios del bienestar animal aplicados a la producción responsable de équidos en Colombia.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es el tipo de digestión característico de los équidos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Digestión rumiante con cuatro estómagos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Digestión enzimática gástrica exclusiva.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Digestión en dos cámaras como los camélidos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Digestión de fermentación en ciego.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué característica es propia del Caballo Criollo Colombiano?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Capacidad para vivir en climas desérticos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Talla inferior a 1.47 m y crin abundante.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Marchas como paso fino, trocha y trocha–paso.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Alta producción láctea.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es la principal debilidad del asno en comparación con otros équidos?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Baja tolerancia a climas secos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Alta sensibilidad a la humedad.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Menor velocidad.', esCorrecta: true },
            {
              id: 'd',
              texto: 'Poco resistente a enfermedades.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué ley en Colombia reconoce a los animales como seres sintientes?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Ley 99 de 1993.', esCorrecta: false },
            { id: 'b', texto: 'Ley 1774 de 2016.', esCorrecta: true },
            { id: 'c', texto: 'Ley 84 de 1989.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Resolución ICA 7953 de 2017.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es la principal ventaja del piso filtrante en pesebreras?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'No requiere mantenimiento.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Reduce la temperatura interna.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Es más barato que el concreto.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Absorbe orina y gases.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué tipo de empresa équida se enfoca en actividades como cabalgatas y rutas naturales?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'De reproducción.', esCorrecta: false },
            { id: 'b', texto: 'Terapéutica.', esCorrecta: false },
            { id: 'c', texto: 'De recreación y turismo.', esCorrecta: true },
            { id: 'd', texto: 'De trabajo rural.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es el órgano encargado de certificar las Buenas Prácticas Ganaderas en Colombia?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Ministerio de Salud.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Ministerio de Medio Ambiente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Instituto Colombiano Agropecuario (ICA).',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Organización Mundial de Sanidad Animal (WOAH).',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué estructura se recomienda construir con guadua o madera inmunizada?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Comederos.', esCorrecta: false },
            { id: 'b', texto: 'Paredes de pesebreras.', esCorrecta: true },
            { id: 'c', texto: 'Bebederos.', esCorrecta: false },
            { id: 'd', texto: 'Duchaderos.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es una de las libertades del bienestar animal incluidas en la Resolución ICA 7953?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Libertad para reproducirse sin control.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Libertad para competir en eventos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Libertad de expresar comportamientos naturales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Libertad para trabajar sin supervisión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué tipo de équido se caracteriza por ser estéril y resistente en terrenos difíciles?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Mula.', esCorrecta: true },
            { id: 'b', texto: 'Caballo árabe.', esCorrecta: false },
            { id: 'c', texto: 'Asno.', esCorrecta: false },
            { id: 'd', texto: 'Poni.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'El Caballo Criollo Colombiano se utiliza principalmente en labores de carga pesada.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso.', esCorrecta: true },
            { id: 'b', texto: 'Verdadero.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: 'Los ponis constituyen una especie distinta de équidos.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso.', esCorrecta: true },
            { id: 'b', texto: 'Verdadero.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'Las Buenas Prácticas Equinas buscan proteger la salud, el ambiente y el bienestar animal.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso.', esCorrecta: false },
            { id: 'b', texto: 'Verdadero.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'La Resolución ICA 7953 de 2017 incluye requisitos para recreación, deporte y trabajo con équidos.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso.', esCorrecta: false },
            { id: 'b', texto: 'Verdadero.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'Las pesebreras deben tener techos con pendiente y altura suficiente para ventilación.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso.', esCorrecta: false },
            { id: 'b', texto: 'Verdadero.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
