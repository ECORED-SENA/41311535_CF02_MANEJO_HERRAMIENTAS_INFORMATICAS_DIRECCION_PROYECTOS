<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      .row.justify-content-center.align-items-center.mb-3
        .col-xl.mb-4.mb-lg-0
          .box___style_1(data-aos="fade-right")
            p.mb-0 La planificación de un proyecto transforma el alcance aprobado en entregables, actividades, fechas, recursos y costos que puedan ejecutarse y controlarse. Este proceso comienza con la #[b Estructura de Desglose del Trabajo (EDT)], que permite dividir el alcance en componentes manejables y, a partir de ellos, identificar actividades, hitos y dependencias. La estimación de duraciones y la asignación de recursos complementan esta organización al considerar calendarios, disponibilidad, restricciones y cargas de trabajo, con el propósito de establecer una programación viable.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/intro/img1.png', alt='' style="max-width: 350px").m-auto
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-3(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/intro/img2.png')})` }")
        .bloque-texto-g__texto.p-4
          p El cronograma integra actividades, dependencias, duraciones, calendarios y recursos para establecer fechas de inicio y finalización, reconocer holguras e identificar la #[b ruta crítica]. De manera paralela, la estimación de costos relaciona el trabajo planificado con tarifas de personal, materiales, equipos, servicios y reservas. Una vez aprobadas las fechas y los costos, se establecen las líneas base del #[b cronograma y del presupuesto], que sirven como referencia para comparar la planificación con la ejecución real y determinar posibles desviaciones.
      .box___style_2(data-aos="zoom-in").mb-0
        p.mb-0 El control del proyecto parte del registro del avance y de su comparación con las líneas base. El #[b análisis del valor ganado] permite integrar el trabajo planificado, el trabajo realizado y los costos ejecutados para identificar retrasos, sobrecostos y niveles de eficiencia. Cuando se requieren modificaciones en entregables, actividades, fechas, recursos o presupuesto, estas deben gestionarse mediante un procedimiento formal de #[b control de cambios]. Así, la planificación y el seguimiento se articulan con el uso del #[i software] para gestionar el cronograma y los costos de acuerdo con los requerimientos del proyecto.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
