<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bg-full-width-2.bg-fondo-1
      .px-4.p-md-5
        p.mb-5 La formación en gestión productiva de équidos requiere una comprensión integral de su biología, su comportamiento y las condiciones técnicas necesarias para garantizar un manejo responsable. En este proceso académico se articula la normativa vigente, los principios del bienestar animal y las Buenas Prácticas Ganaderas, elementos que permiten estructurar sistemas productivos sólidos, sostenibles y coherentes con las exigencias actuales del país.

        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/intro/1.png')})`}"
          )(data-aos="zoom-in")
          .bloque-texto-g__texto.p-4
            p.mb-0 Este componente formativo invita a profundizar en las particularidades de los équidos, su relevancia en distintos contextos productivos y las necesidades estructurales de las instalaciones que los albergan. A través del estudio de aspectos sanitarios, ambientales, operativos y ocupacionales, el estudiante desarrolla criterios para tomar decisiones fundamentadas que aporten a la calidad del manejo y a la consolidación de empresas equinas eficientes y responsables.
        
        .bg-full-width.bg-color-1.mb-5
          .px-4.px-md-5.py-4
            .row.align-items-center
              .col-lg-auto.mb-3.mb-lg-0
                img(src="@/assets/curso/intro/2.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Así, el aprendizaje se orienta hacia la aplicación práctica del conocimiento, integrando dimensiones técnicas, legales y de bienestar animal. De esta manera, el futuro profesional adquiere competencias para implementar sistemas de gestión alineados con los estándares del ICA y con las expectativas sociales respecto al trato digno de los animales, contribuyendo al fortalecimiento del sector equino y a la sostenibilidad de sus actividades.


</template>

<script>
export default {
  name: 'Introduccion',
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
