<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 5
        h1 Seguimiento del cronograma y los costos
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_1.fit___box_3(data-aos="fade-right")
            p.mb-0 El #[b seguimiento] permite conocer el estado real del proyecto y compararlo con la planificación aprobada. Para ello se registran las fechas ejecutadas, el avance de las actividades, el trabajo realizado y los costos incurridos, información que facilita identificar oportunamente las desviaciones.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t5/img1.png', alt='' style="max-width: 350px").m-auto
      p.mb-5 El control no consiste únicamente en actualizar porcentajes, sino que también requiere analizar las causas de las diferencias, determinar sus efectos y proponer acciones que permitan mantener el proyecto dentro de los límites autorizados. La herramienta informática facilita los cálculos y la presentación de la información, pero su interpretación corresponde a los responsables del proyecto.
      #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.1 Fecha de estado y actualización del avance
      p La #[b fecha de estado] es el punto de referencia utilizado para analizar el avance del proyecto. Representa el momento hasta el cual se encuentra actualizada la información y permite diferenciar el trabajo ejecutado del pendiente. Se define según la periodicidad de seguimiento establecida (semanal, quincenal o mensual), de acuerdo con la duración, la complejidad y las necesidades de control. Por ejemplo, si la fecha de estado corresponde al 30 de septiembre, todas las actividades ejecutadas hasta ese día deben reflejar su avance real.
      p.mb-5 Para actualizar el avance se registran las fechas reales de inicio y finalización, el porcentaje completado, la duración real y restante, el trabajo realizado y pendiente, los costos reales y las observaciones o problemas identificados. El #[b porcentaje completado] debe corresponder a una condición verificable y no a una percepción. Cuando sea posible, se relaciona con productos terminados, cantidades ejecutadas o criterios de aceptación. Por ejemplo, si una actividad consiste en configurar diez módulos de carga de trabajo semejante y se han completado y validado seis, el avance puede registrarse como 60 %. La actualización sigue esta secuencia:
      .bg___color_2
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 1. Definir la fecha de estado
                    p.mb-0 Establecer el corte de la información.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img2.svg', alt='' style="width: 190px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img3.svg', alt='' style="width: 190px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso 2. Recopilar la información
                    p.mb-0 Solicitar los datos de avance a los responsables.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 3. Verificar los productos
                    p.mb-0 Comprobar los resultados efectivamente ejecutados.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img4.svg', alt='' style="width: 190px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img5.svg', alt='' style="width: 190px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso 4. Registrar el avance
                    p.mb-0 Ingresar las fechas y los porcentajes reales, y actualizar el trabajo y los costos.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 5. Revisar lo pendiente
                    p.mb-0 Analizar las actividades por ejecutar y guardar la nueva versión del proyecto.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img6.svg', alt='' style="width: 190px").m-auto
      p.mb-0 Cuando una actividad no ha comenzado en la fecha prevista, debe conservarse el registro del retraso. No se recomienda modificar su fecha planificada para ocultar la desviación, porque se perdería la referencia necesaria para el análisis.
      Separador
      #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.2 Comparación entre información planificada y real
      p.mb-5 La comparación se realiza entre la línea base aprobada, que conserva las fechas, duraciones y costos previstos, y los datos obtenidos durante la ejecución, que muestran lo que efectivamente ha ocurrido. Los principales datos que se comparan se presentan en la siguiente tabla:
      .row.justify-content-center.mb-5
        .col-xl-8
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 13.
            span Datos de comparación entre lo planificado y lo real
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Información planificada
                  th.texto-left Información real
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Inicio previsto
                  td.texto-left Inicio real
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Finalización prevista
                  td.texto-left Finalización real
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Duración estimada
                  td.texto-left Duración real
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Trabajo planificado
                  td.texto-left Trabajo ejecutado
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Costo presupuestado
                  td.texto-left Costo real
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Avance esperado
                  td.texto-left Avance alcanzado
      p.mb-5 Esta comparación permite responder preguntas como: ¿las actividades comenzaron y terminaron cuando estaba previsto?, ¿el avance corresponde al tiempo transcurrido?, ¿los costos se mantienen dentro del presupuesto?, ¿las actividades críticas presentan retrasos? y ¿existen recursos con mayor o menor utilización de la esperada?
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img7.png')})` }")
        .bloque-texto-g__texto.p-4
          p Una diferencia no siempre representa un problema, ya que una actividad puede terminar antes de lo previsto o utilizar menos recursos de los estimados. Por ello, el análisis considera la causa de la diferencia, su efecto sobre las actividades posteriores y sobre los costos, su relación con la ruta crítica, la existencia de cambios aprobados y la posibilidad de recuperar el retraso. La herramienta informática presenta esta información mediante tablas de variación, vistas de seguimiento, diagramas comparativos y reportes, que deben interpretarse en relación con las condiciones reales del proyecto.
          br
          br
          p La comparación entre las fechas aprobadas y las fechas reales permite identificar desviaciones del cronograma. En este ejemplo, «Elaborar diseño» finaliza un día laborable después de lo previsto, mientras las otras actividades conservan sus fechas de finalización.
      .row.justify-content-center.mb-0
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 8.
            span Comparación entre las fechas de línea base y las fechas reales en Microsoft Project
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/t5/img8.png', alt='Captura de Microsoft Project con la comparación entre fechas de línea base y fechas reales, incluida una actividad que finaliza un día laborable después de lo previsto. ').m-auto
      Separador
      #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.3 Variaciones del cronograma
      p.mb-5 A continuación, se presenta un pódcast sobre las variaciones del cronograma, sus principales causas, su impacto en la planificación y las acciones que pueden aplicarse para mantener el control del proyecto.
      .row.align-items-center.m-0.mb-0
        .col-xl
          .row.align-items-center.justify-content-center.box___podcast(data-aos="zoom-in")
            .col-auto.mb-4.mb-lg-0
              figure(data-aos="fade-right")
                img(src="@/assets/curso/temas/t5/img9.svg" style="max-width: 220px").m-auto
            .col
              h4.mb-4 Pódcast
              TarjetaAudio.color-acento-contenido.mb-4(
                  texto="&quot;Variaciones y control del cronograma&quot;"
                  :audio="audio1"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .col-xl-auto.d-none.d-xl-block
          figure(data-aos="fade-left")
            img(src="@/assets/curso/temas/t5/img10.png" style="max-width: 510px").m-auto
      Separador
      #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.4 Variaciones de los costos
      p.mb-5 Una #[b variación de costos] es la diferencia entre el valor presupuestado y el valor realmente ejecutado. Su análisis permite determinar si el proyecto está utilizando más o menos recursos financieros de los previstos. Los costos reales incluyen las horas de trabajo ejecutadas, los materiales consumidos, los equipos utilizados, los servicios contratados, las licencias adquiridas, los gastos autorizados y el uso de reservas. Por ejemplo, si una actividad tenía un costo planificado de $8.000.000 COP y su costo real fue de $9.200.000 COP, la variación es la siguiente:
      .row.justify-content-center.mb-5(data-aos="zoom-in")
        .col-xl-6
          .call-to-action__text  
            h5.mb-0 $9.200.000 COP − $8.000.000 COP = $1.200.000 COP
      p.mb-5 En este caso existe un sobrecosto de $1.200.000 COP. Las variaciones pueden originarse por el incremento de tarifas, una mayor duración, el uso adicional de recursos, la compra de materiales no previstos, los reprocesos, los cambios aprobados o los errores de estimación. El análisis no debe limitarse al valor total, sino que conviene identificar en qué actividad, paquete de trabajo o cuenta de control se produjo la diferencia. Para revisar las variaciones se recomienda el siguiente procedimiento:
      .bg___color_1
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 1. Comparar
                    p.mb-0 Contrastar el costo previsto con el costo real e identificar la actividad afectada.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img11.svg', alt='' style="width: 190px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img12.svg', alt='' style="width: 190px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso 2. Determinar la causa
                    p.mb-0 Establecer el origen de la diferencia y verificar si existió un cambio aprobado.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 3. Analizar el efecto
                    p.mb-0 Evaluar la consecuencia sobre el presupuesto restante y actualizar la proyección.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img13.svg', alt='' style="width: 190px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img14.svg', alt='' style="width: 190px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso 4. Definir una acción de control
                    p.mb-0 Ajustar la asignación de recursos, revisar tarifas, negociar con proveedores, utilizar de forma autorizada las reservas o modificar actividades futuras.
          p.mb-5 La comparación de los costos permite identificar diferencias respecto al presupuesto aprobado. En este ejemplo, la actividad completada registra un costo real de $9.200.000 COP frente a los $8.000.000 COP presupuestados, lo que representa un sobrecosto de $1.200.000 COP.
          .row.justify-content-center.mb-0
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Figura 9.
                span Comparación entre el costo de línea base y el costo real en Microsoft Project
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/t5/img15.png', alt='Captura de Microsoft Project con la comparación entre el costo de línea base y el costo real de una actividad, con un sobrecosto de $1.200.000 COP. ').m-auto
      Separador
      #t_5_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.5 Informes y reportes de desempeño
      p Los #[b informes de desempeño] comunican el estado del proyecto a los interesados y apoyan la toma de decisiones. Deben presentar información clara, actualizada y proporcional a las necesidades de quienes la reciben. Un reporte de seguimiento puede incluir la fecha de estado, el porcentaje general de avance, las actividades terminadas, en ejecución y retrasadas, los hitos cumplidos y pendientes, las variaciones de tiempo y costo, los riesgos y problemas, las acciones propuestas, las decisiones requeridas y la proyección de finalización.
      p.mb-5 No todos los interesados necesitan el mismo nivel de detalle. El equipo requiere información por actividad, mientras que la dirección necesita un resumen de hitos, variaciones y decisiones pendientes. Según su propósito, los reportes se clasifican en los siguientes tipos:
      .bg___carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t5/img16.png', alt='' style="max-width: 400px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t5/img17.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Operativos
                  p.mb-0.text-center Muestran las tareas, los responsables y el trabajo pendiente.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t5/img18.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Técnicos
                  p.mb-0.text-center Presentan resultados, incidencias y condiciones de ejecución.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t5/img19.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Financieros
                  p.mb-0.text-center Comparan el presupuesto, los costos reales y las proyecciones.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t5/img20.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Ejecutivos
                  p.mb-0.text-center Resumen el avance, los hitos, los riesgos y las decisiones.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t5/img21.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text De excepciones
                  p.mb-0.text-center Destacan las desviaciones que superan los límites establecidos.
      p.mb-0 Antes de emitir un informe se verifica que los datos estén actualizados, que la fecha de estado sea correcta, que la versión corresponda al archivo oficial, que las variaciones estén explicadas, que las cifras coincidan con los registros financieros y que las acciones tengan responsable y plazo. Un informe no debe limitarse a mostrar datos, sino interpretar la situación. No basta con indicar que una actividad presenta cinco días de retraso; se debe explicar la causa, el efecto sobre la ruta crítica y la acción propuesta. La periodicidad de los informes se define en el plan de gestión; en proyectos cortos puede requerirse un seguimiento semanal, y en proyectos de mayor duración, quincenal o mensual.

</template>

<script>
import audio1 from '@/assets/curso/temas/t5/audios/Podcast_Variaciones_control_cronograma.mp3'
export default {
  name: 'Tema5',
  data: () => ({
    audio1,
    mostrarIndicadorTarjetaAudio: true,
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
