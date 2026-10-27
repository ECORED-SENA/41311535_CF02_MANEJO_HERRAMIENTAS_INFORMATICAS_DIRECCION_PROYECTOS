<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 6
        h1 Valor ganado y control de cambios
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_1.fit___box_3(data-aos="fade-right")
            p.mb-0 El control integrado del proyecto requiere analizar de manera conjunta el avance del cronograma y el comportamiento de los costos. Para ello se utiliza el #[b análisis del valor ganado], técnica que compara el trabajo planificado, el trabajo realmente completado y el costo incurrido, con el fin de determinar si el proyecto avanza según lo previsto y cuál podría ser su resultado final si mantiene el mismo desempeño.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t6/img1.png', alt='' style="max-width: 350px").m-auto
      p.mb-5 El #[b control de cambios] complementa este análisis al establecer un procedimiento para registrar, revisar, aprobar o rechazar las modificaciones que pueden afectar el alcance, el cronograma, los recursos, los costos o las líneas base.
      #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.1 Valor planificado, valor ganado y costo real
      p.mb-5 El análisis del valor ganado utiliza tres datos básicos, que deben calcularse para la misma fecha de estado y expresarse en la misma unidad monetaria. Estos datos se presentan a continuación:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Valor planificado (VP)
                  p.mb-0 Presupuesto autorizado para el trabajo que debía haberse ejecutado hasta la fecha de estado. Representa cuánto trabajo se esperaba haber realizado, no el dinero gastado.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img2.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Valor ganado (VG)
                  p.mb-0 Valor presupuestado del trabajo que realmente se ha completado. Se obtiene aplicando el presupuesto aprobado de cada actividad a su avance real y verificable.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img3.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Costo real (CR)
                  p.mb-0 Valor efectivamente utilizado para ejecutar el trabajo completado, que incluye horas de personal, materiales, equipos, servicios y demás costos registrados.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img4.png', alt='' style="max-width: 500px").m-auto
      .row.justify-content-center.align-items-center.mb-0
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t6/img5.png', alt='').m-auto
        .col-xl
          .row.mb-3
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img15.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 Por ejemplo, en una fecha de estado se dispone de la siguiente información: VP = $50.000.000 COP, VG = $45.000.000 COP y CR = $48.000.000 COP. Esto indica que el proyecto debía haber completado trabajo por $50.000.000 COP, pero solo ha producido resultados equivalentes a $45.000.000 COP, y que para alcanzar ese avance ha utilizado $48.000.000 COP. En consecuencia, el avance es inferior al previsto y el costo utilizado supera el valor del trabajo completado.
          .box___style_1.color___1(data-aos="fade-left")
            p.mb-0  Para que el análisis sea confiable, los tres datos deben corresponder a la misma fecha de estado, utilizar la línea base aprobada, reflejar el avance real, incluir los costos efectivamente registrados y encontrarse asociados con actividades y paquetes de trabajo.
      Separador
      #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.2 Variaciones e índices de desempeño
      p.mb-5 A partir del valor planificado, el valor ganado y el costo real se calculan las #[b variaciones] y los #[b índices de desempeño], que permiten interpretar si el proyecto se encuentra adelantado, retrasado, por debajo del presupuesto o con sobrecostos. Los cuatro indicadores y su aplicación al ejemplo anterior se presentan a continuación:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t6/img6.png", alt="" style="width: 400px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Variación del cronograma").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se calcula como VG − VP y compara el valor ganado con el valor planificado. En el ejemplo: $45.000.000 − $50.000.000 = −$5.000.000 COP. El resultado negativo indica que se ha completado menos trabajo del previsto para la fecha de estado.
            .row(titulo="Variación del costo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se calcula como VG − CR y compara el valor ganado con el costo real. En el ejemplo: $45.000.000 − $48.000.000 = −$3.000.000 COP. El resultado negativo indica que el costo utilizado supera el valor presupuestado del trabajo realizado.
            .row(titulo="Índice de desempeño del cronograma").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se calcula como VG ÷ VP y mide la eficiencia del avance. En el ejemplo: $45.000.000 ÷ $50.000.000 = 0,90; es decir, por cada peso de trabajo programado se ha completado el equivalente a 0,90 pesos.
            .row(titulo="Índice de desempeño del costo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se calcula como VG ÷ CR y mide la eficiencia del gasto. En el ejemplo: $45.000.000 ÷ $48.000.000 ≈ 0,94; es decir, por cada peso gastado se han generado aproximadamente 0,94 pesos de valor presupuestado.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          .box___style_3.fit___box_5(data-aos="fade-right")
            p.mb-0 Los índices se interpretan de la misma manera. Un valor mayor que 1 indica un desempeño superior al previsto (avance adelantado o uso eficiente del presupuesto); un valor igual a 1, un desempeño conforme a lo planificado, y un valor menor que 1, un desempeño inferior (retraso o sobrecosto).
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t6/img7.png', alt='').m-auto
        .col-xl-5.fit___bottom
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img17.svg', alt='' style="width: 70px")
          p.mb-0 Los indicadores no deben analizarse de manera aislada. También se revisan las actividades críticas afectadas, las causas de las variaciones, los recursos utilizados, los riesgos materializados, los cambios aprobados, el presupuesto restante y la posibilidad de recuperar el desempeño. Un indicador desfavorable no exige por sí solo modificar la línea base, sino que primero se determina si corresponde a una desviación que puede corregirse o a un cambio formal que requiere aprobación.
      Separador
      #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.3 Proyecciones del cronograma y presupuesto
      p.mb-5 Las #[b proyecciones] permiten estimar cómo podría finalizar el proyecto si continúa con el desempeño observado. Su finalidad es anticipar posibles retrasos o sobrecostos y facilitar la adopción de medidas antes de que la situación sea irreversible. Los valores utilizados se presentan a continuación:
      .row.justify-content-center.mb-5
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .card___icon.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t6/img8.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Presupuesto hasta la conclusión
              p.mb-0.text-center Costo total aprobado en la línea base.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .card___icon.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t6/img9.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Estimación a la conclusión
              p.mb-0.text-center Costo total proyectado al finalizar el proyecto.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .card___icon.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t6/img10.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Estimación para terminar
              p.mb-0.text-center Valor adicional necesario para completar el trabajo pendiente.
        .col-xl-3.col-md-9(data-aos="zoom-in")
          .card___icon.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t6/img11.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Variación a la conclusión
              p.mb-0.text-center Diferencia entre el presupuesto aprobado y el costo total proyectado.
      p.mb-5 Una proyección básica supone que la eficiencia actual del costo continuará durante el resto del proyecto. Si el presupuesto total es de $100.000.000 COP, con los datos del ejemplo (índice de desempeño del costo = 45.000.000 ÷ 48.000.000 = 0,9375, sin redondear), los cálculos son los siguientes:
      .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
        h5 Tabla 14.
        span Ejemplo de proyección del presupuesto
      .tabla-a(data-aos="zoom-in").mb-5
        table
          thead
            tr
              th.ajuste-border-tabla.texto-left Indicador
              th.ajuste-border-tabla.texto-left Fórmula
              th.texto-left Resultado
          tbody
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Estimación a la conclusión
              td.ajuste-border-tabla.texto-left Presupuesto total ÷ índice de desempeño del costo: $100.000.000 ÷ 0,9375
              td.texto-left $106.666.667 COP
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Estimación para terminar
              td.ajuste-border-tabla.texto-left Estimación a la conclusión − costo real: $106.666.667 − $48.000.000
              td.texto-left $58.666.667 COP
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Variación a la conclusión
              td.ajuste-border-tabla.texto-left Presupuesto total − estimación a la conclusión: $100.000.000 − $106.666.667
              td.texto-left −$6.666.667 COP
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          .box___color-text-imgleft(data-aos="zoom-in").mb-3
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t6/img12.png', alt='' style="width: 350px").m-auto
              .col-xl.fit___box_container
                p.mb-0 Si se mantiene la misma eficiencia, el proyecto podría finalizar con un costo cercano a $106.666.667 COP, y la variación a la conclusión negativa indica un sobrecosto proyectado de aproximadamente $6.666.667 COP. Para el cronograma, además del índice de desempeño, se revisan la duración restante, la ruta crítica actual y las fechas proyectadas por la herramienta, en especial cuando se consumen las holguras o aparecen nuevas actividades.
          p.mb-0 Una proyección no constituye una certeza, sino una estimación basada en la información disponible. Por ello, debe revisarse junto con el trabajo pendiente, la ruta crítica, la disponibilidad futura de recursos, los contratos vigentes, los riesgos restantes, las reservas disponibles y las acciones correctivas propuestas, y actualizarse cuando cambian las condiciones del proyecto.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t6/img13.png', alt='' style="max-width: 260px").m-auto
      Separador
      #t_6_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.4 Solicitudes y análisis de impacto de los cambios
      p Un #[b cambio] es una modificación propuesta sobre algún elemento aprobado del proyecto. Puede afectar el alcance, los entregables, las actividades, las fechas, los recursos, los costos, los requisitos o las condiciones de ejecución, y puede originarse por nuevas necesidades de los interesados, modificaciones contractuales, requisitos técnicos adicionales, riesgos materializados, cambios normativos, problemas de disponibilidad u oportunidades de mejora.
      p.mb-5 Toda solicitud debe registrarse antes de modificar el archivo oficial. El registro incluye la identificación del cambio, la fecha, el solicitante, la descripción, la justificación, la prioridad, los elementos afectados, los documentos relacionados, el responsable del análisis y el estado de la solicitud. Posteriormente se analiza su impacto sobre el alcance, el cronograma y la ruta crítica, los recursos, los costos y las reservas, los riesgos, la calidad, los contratos y los interesados. Por ejemplo, solicitar un nuevo módulo puede requerir actividades adicionales, ampliar la duración, incorporar especialistas y aumentar el presupuesto; por ello, la decisión no debe basarse únicamente en el beneficio del cambio. El procedimiento general comprende los siguientes pasos:
      .bg___color_1
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 1. Registrar la solicitud
                    p.mb-0 Documentarla y verificar que la información esté completa.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t6/img14.svg', alt='' style="width: 190px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t6/img15.svg', alt='' style="width: 190px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso 2. Analizar el impacto
                    p.mb-0 Evaluar los efectos técnicos, en tiempo y en costo, así como los riesgos y recursos involucrados.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 3. Formular una recomendación
                    p.mb-0 Proponer la decisión más conveniente con base en el análisis.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t6/img16.svg', alt='' style="width: 190px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t6/img17.svg', alt='' style="width: 190px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso 4. Presentar la solicitud
                    p.mb-0 Someterla a la autoridad correspondiente.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 5. Registrar y comunicar
                    p.mb-0 Documentar la decisión y comunicar el resultado.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t6/img18.svg', alt='' style="width: 190px").m-auto
          p.mb-0 Mientras el cambio no haya sido aprobado, no debe incorporarse a las líneas base. El equipo puede elaborar escenarios o simulaciones, pero debe conservar intacta la versión oficial.
          Separador
          #t_6_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 6.5 Aprobación y actualización de las líneas base
          p La #[b aprobación de un cambio] corresponde a la persona o instancia que tiene autoridad sobre los elementos afectados, como el patrocinador, el director del proyecto o un comité de cambios, según la organización. Una solicitud puede quedar aprobada, rechazada, aplazada, devuelta para ajustes o cancelada, y la decisión debe documentarse junto con sus condiciones, responsables y fecha de aplicación.
      p.mb-5 No toda desviación genera una actualización de la línea base. Si esta se modificara cada vez que aparece un retraso, se perdería la referencia necesaria para evaluar el desempeño. Por ello, es importante diferenciar las siguientes situaciones:
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 15.
            span Tratamiento de desviaciones y cambios
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Situación
                  th.texto-left Tratamiento
              tbody
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Retraso sin cambio aprobado
                  td.texto-left Se registra como variación
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Sobrecosto por desempeño deficiente
                  td.texto-left Se analiza y controla
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Acción correctiva dentro del alcance
                  td.texto-left Se incorpora al trabajo sin alterar necesariamente la línea base
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Nuevo entregable aprobado
                  td.texto-left Puede requerir la actualización de las líneas base
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Modificación contractual autorizada
                  td.texto-left Requiere ajustar los elementos afectados
      .bg___color_1
        .px-5
          p.mb-5 Cuando el cambio es aprobado, la línea base se actualiza mediante el siguiente procedimiento:
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 1. Identificar los elementos afectados
                    p.mb-0 Determinar las actividades y los costos que modifica el cambio.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t6/img20.svg', alt='' style="width: 190px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t6/img21.svg', alt='' style="width: 190px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso 2. Actualizar la planificación
                    p.mb-0 Modificar la documentación, el cronograma, el presupuesto, los recursos y los riesgos.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 3. Actualizar la línea base
                    p.mb-0 Registrar la nueva línea base autorizada, con su fecha y responsable, conservando la versión anterior.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t6/img22.svg', alt='' style="width: 190px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t6/img23.svg', alt='' style="width: 190px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso 4. Comunicar
                    p.mb-0 Informar los nuevos compromisos a los interesados.
          p.mb-0 La versión anterior no debe eliminarse, porque constituye la evidencia del plan aprobado antes del cambio y permite conocer cómo evolucionó el proyecto. Después de la actualización se verifica que las fechas sean coherentes, que el presupuesto coincida con la autorización, que los recursos sean viables, que las reservas estén actualizadas, que los reportes utilicen la nueva versión y que los interesados conozcan el cambio. La actualización debe realizarse únicamente sobre los elementos afectados, porque no resulta conveniente reemplazar toda la planificación cuando el cambio se limita a una parte específica del proyecto.

</template>

<script>
export default {
  name: 'Tema6',
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
