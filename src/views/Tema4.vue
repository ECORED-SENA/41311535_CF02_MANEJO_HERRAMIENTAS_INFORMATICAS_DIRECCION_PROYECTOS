<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 4
        h1 Cronograma y presupuesto del proyecto
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_1.fit___box_3(data-aos="fade-right")
            p.mb-0 Una vez definidas las actividades, sus dependencias, las duraciones y los recursos, se cuenta con la información necesaria para desarrollar el cronograma y estimar el presupuesto. Ambos deben construirse de manera integrada, debido a que cualquier modificación en las fechas o en los recursos afecta los costos, y viceversa.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t4/img1.png', alt='' style="max-width: 350px").m-auto
      p.mb-5 El #[b cronograma] establece cuándo se realizará el trabajo y permite visualizar la secuencia de actividades, los hitos y las fechas previstas. El #[b presupuesto] reúne los costos estimados necesarios para ejecutar ese trabajo. Su elaboración conjunta permite comprobar la viabilidad de las fechas, identificar las actividades que afectan la terminación, determinar las necesidades financieras, distribuir los costos en el tiempo y establecer las referencias para el seguimiento.
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.1 Desarrollo y optimización del cronograma
      .box___color-text-imgleft(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t4/img2.png', alt='' style="width: 500px").m-auto
          .col-xl.fit___box_container
            p El #[b desarrollo del cronograma] consiste en integrar la lista de actividades, sus relaciones, las duraciones, los calendarios y los recursos para obtener las fechas de inicio y finalización del proyecto. La herramienta informática utiliza esta información para calcular las fechas, pero el resultado debe representar una secuencia viable y no únicamente un conjunto de fechas deseadas. Un cronograma completo contiene actividades y actividades resumen, duraciones, dependencias, hitos, fechas de inicio y finalización, recursos asignados, calendarios aplicables y restricciones justificadas.
            p.mb-0 La fecha de inicio de cada actividad depende de la finalización de sus predecesoras, del calendario asignado y de la disponibilidad de los recursos; cuando cualquiera de estos elementos cambia, la herramienta recalcula las fechas posteriores. Por ello, las fechas calculadas deben revisarse mediante preguntas como: ¿la actividad comienza después de recibir la información necesaria?, ¿los recursos están disponibles?, ¿los hitos coinciden con los compromisos aprobados? y ¿las fechas contractuales pueden cumplirse?
      p.mb-5 #[b Optimizar el cronograma] significa ajustar la programación para mejorar su viabilidad sin alterar de manera injustificada el alcance ni la calidad. Es necesario cuando la fecha calculada supera el plazo aprobado o cuando existen conflictos de recursos. Las estrategias principales se presentan a continuación:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img3.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Ejecución en paralelo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Consiste en realizar simultáneamente actividades que inicialmente se habían planificado en secuencia, cuando sea técnicamente posible, revisando las dependencias discrecionales. Puede disminuir la duración total, pero aumenta el riesgo y la necesidad de coordinación. Por ejemplo, iniciar los materiales de capacitación antes de terminar todas las pruebas ahorra tiempo, aunque existe la posibilidad de tener que ajustarlos según los resultados.
            .row(titulo="Incremento de recursos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Consiste en aumentar temporalmente la capacidad asignada a las actividades críticas. Puede reducir la duración cuando el trabajo puede distribuirse, pero incrementa el costo y no siempre produce una mejora proporcional.
            .row(titulo="Otros ajustes").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Incluyen redistribuir recursos, ajustar calendarios autorizados, reducir tiempos de espera o dividir actividades cuando el trabajo lo permita.
      p.mb-0 La optimización finaliza con una nueva revisión de la fecha de terminación, las sobreasignaciones, los costos, los hitos, las dependencias y los riesgos generados por el ajuste. El cronograma optimizado debe conservar la trazabilidad de las decisiones tomadas y contar con la aprobación de los responsables correspondientes.
      Separador
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.2 Ruta crítica, holguras y fechas del proyecto
      p La #[b ruta crítica] es la secuencia de actividades que determina la duración mínima del proyecto. Si una actividad crítica se retrasa y no se adopta una acción correctiva, la fecha final también se desplaza. La ruta crítica no corresponde necesariamente a las actividades más costosas o complejas, sino que se identifica mediante el análisis de las relaciones, las duraciones y la disponibilidad de tiempo entre actividades.
      p.mb-5 En una red pueden existir varios caminos desde el inicio hasta el final, y el de mayor duración establece la ruta crítica. Por ejemplo:
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 10.
            span Ejemplo de identificación de la ruta crítica
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Camino
                  th.ajuste-border-tabla.texto-left Actividades
                  th.texto-left Duración
              tbody
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold A
                  td.ajuste-border-tabla.texto-left Análisis, diseño, configuración y pruebas
                  td.texto-left 30 días
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold B
                  td.ajuste-border-tabla.texto-left Compra, entrega e instalación de equipos
                  td.texto-left 25 días
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold C
                  td.ajuste-border-tabla.texto-left Elaboración de materiales y capacitación
                  td.texto-left 20 días
      p En este caso, el camino A determina la fecha de finalización. Sin embargo, la ruta debe recalcularse cuando cambian las duraciones o las dependencias, porque otro camino puede volverse crítico. Las #[b actividades críticas] requieren un seguimiento más frecuente, especialmente cuando dependen de un proveedor externo, utilizan un recurso escaso, presentan alta incertidumbre, condicionan varios trabajos posteriores o se relacionan con un hito contractual. La herramienta informática permite identificarlas mediante campos, filtros, formatos o reportes, aunque la interpretación debe considerar las condiciones reales del proyecto.
      p.mb-5 La #[b holgura] es el tiempo que una actividad puede desplazarse sin afectar una fecha determinada, y se clasifica en dos tipos:
      .tarjeta--container.row.justify-content-center.mb-5.m-0(data-aos="zoom-in")
        .col-xl-6.col-md-10.tarjeta.color-acento-contenido.p-5.mb-4.mb-lg-0.text-white
          .row.d-flex.align-items-end.mb-4
            .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t4/img4.png', alt='' style="max-width: 100px")
            .col-xl
              h2.mb-0 Holgura total
          p.mb-0 Tiempo que una actividad puede retrasarse sin afectar la fecha final del proyecto. Por ejemplo, si una actividad puede retrasarse tres días sin afectar la terminación, dispone de tres días de holgura total; cuando los consume, se convierte en crítica.
        .col-xl-6.col-md-10.tarjeta.color-primario.p-5
          .row.d-flex.align-items-end.mb-4
            .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t4/img5.png', alt='' style="max-width: 100px")
            .col-xl
              h2.mb-0 Holgura libre
          p.mb-0 Tiempo que una actividad puede retrasarse sin afectar el inicio de su actividad sucesora.
      p.mb-5 Una actividad con holgura no debe considerarse poco importante, ya que la holgura puede utilizarse para redistribuir recursos, resolver sobreasignaciones o absorber retrasos menores.
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img6.png')})` }")
        .bloque-texto-g__texto.p-4
          p El cronograma también debe diferenciar los distintos tipos de #[b fechas]: planificadas, calculadas, límite, reales y proyectadas. Una fecha límite permite comparar la programación con un compromiso sin obligar a la herramienta a fijar la actividad, a diferencia de las restricciones rígidas, que deben reservarse para condiciones reales, como una entrega contractual o una aprobación externa. Durante la revisión de la ruta crítica se confirma que las duraciones sean razonables, que las dependencias estén completas, que los calendarios sean correctos, que los recursos críticos estén disponibles y que los hitos puedan cumplirse. Como la ruta crítica puede cambiar durante la ejecución, debe revisarse periódicamente y no solo al aprobar el cronograma inicial.
          br
          br
          p Las actividades críticas determinan la fecha de finalización del proyecto y, en este ejemplo, tienen holgura total de cero días. La actividad «Elaborar diseño» dispone de un día de holgura, por lo que puede retrasarse hasta ese límite sin modificar la fecha final.
      .row.justify-content-center.mb-0
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 6.
            span Ruta crítica y holgura total en Microsoft Project
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/t4/img7.png', alt='Captura de Microsoft Project con actividades críticas de holgura cero y una actividad con un día de holgura total. ').m-auto
      Separador
      #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.3 Estimación de costos de actividades y recursos
      p La #[b estimación de costos] determina los recursos financieros necesarios para ejecutar las actividades. Se construye a partir del trabajo planificado, las cantidades requeridas, las tarifas, los contratos y las condiciones de adquisición, y puede incluir costos de personal, materiales, equipos, servicios, licencias, transporte, instalaciones y actividades de control de calidad. Cada costo debe relacionarse con una actividad, un paquete de trabajo o una cuenta de control, evitando valores generales que no permitan identificar su origen.
      p.mb-5 Para estimar los costos se aplican las mismas técnicas utilizadas para las duraciones. La estimación análoga parte de proyectos similares, y la estimación paramétrica, de cantidades y tarifas. Ambas pueden complementarse con cotizaciones, contratos, listas de precios y la valoración de especialistas. Por ejemplo, si se requieren 120 horas de un profesional con una tarifa de $65.000 COP por hora, o 50 unidades de un material de $85.000 COP cada una, los cálculos son los siguientes:
      .row.justify-content-center.mb-5(data-aos="zoom-in")
        .col-xl-6
          .call-to-action__text  
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | 120 horas × $65.000 COP = $7.800.000 COP
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | 50 unidades × $85.000 COP = $4.250.000 COP
      p.mb-5 Los tipos básicos de costos se presentan a continuación:
      .bg___carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t4/img8.png', alt='' style="max-width: 400px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img9.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Trabajo
                  p.mb-0.text-center Se calcula según el tiempo y la tarifa del recurso. Ejemplo: horas de un analista.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img10.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Material
                  p.mb-0.text-center Se calcula según la cantidad y el precio unitario. Ejemplo: componentes o insumos.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img11.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Equipo
                  p.mb-0.text-center Se relaciona con la compra, el alquiler o el uso. Ejemplo: alquiler de un servidor.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img12.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Fijo
                  p.mb-0.text-center Se asigna directamente a una actividad. Ejemplo: una licencia específica.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img13.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Servicio
                  p.mb-0.text-center Corresponde a una prestación contratada. Ejemplo: soporte especializado.
      p.mb-5 Para cada estimación se registran la cantidad, la unidad de medida, la tarifa o valor unitario, la fuente del precio, la fecha de referencia, los supuestos y el responsable. En la herramienta informática, los costos se calculan automáticamente al registrar las tarifas de los recursos y asignarlos a las actividades; también pueden incorporarse costos fijos o recursos de costo. Por ejemplo, para una actividad que requiere un analista durante cuarenta horas a $60.000 COP por hora, un técnico durante veinte horas a $40.000 COP por hora y una licencia temporal de $900.000 COP, el costo estimado es el siguiente:
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 11.
            span Ejemplo de estimación del costo de una actividad
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Recurso
                  th.ajuste-border-tabla.texto-left Cálculo
                  th.texto-left Costo
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Analista
                  td.ajuste-border-tabla.texto-left 40 horas × $60.000 COP
                  td.texto-left $2.400.000 COP
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Técnico
                  td.ajuste-border-tabla.texto-left 20 horas × $40.000 COP
                  td.texto-left $800.000 COP
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Licencia temporal
                  td.ajuste-border-tabla.texto-left Costo fijo
                  td.texto-left $900.000 COP
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Total estimado
                  td.ajuste-border-tabla.texto-left -
                  td.texto-left.text-weight-bold $4.100.000 COP
      p.mb-0 Después de ingresar los valores se comprueba que la moneda sea correcta, que las tarifas correspondan al periodo, que no existan recursos duplicados, que las cantidades sean coherentes, que los costos estén asociados a las actividades y que se hayan considerado los impuestos o cargos aplicables. La estimación debe actualizarse cuando cambian las cantidades, las tarifas, las duraciones o los recursos.
      Separador
      #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.4 Reservas de contingencia y de gestión
      p.mb-5 Las estimaciones de costos se construyen con la información disponible, pero los proyectos se desarrollan bajo condiciones de incertidumbre. Para atender posibles eventos se establecen #[b reservas] financieras, que pueden ser de dos tipos:
      .row.justify-content-center.mb-5
        .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .box___card_sinbordes.h-100.color___3.text-white
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t4/img14.png', alt="" ).m-auto
              h4 Reserva de contingencia
              .box___card_sinbordes_p
                p.mb-0 Se asigna para responder a riesgos identificados y analizados durante la planificación, y se relaciona con actividades o cuentas de control. Forma parte de la línea base de costos. Por ejemplo, si existe el riesgo de aumento en el valor de determinados insumos, puede establecerse una reserva asociada a esa posible variación.
        .col-xl-6.col-md-9(data-aos="fade-left")
          .box___card_sinbordes.h-100.color___4
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t4/img15.png', alt="" ).m-auto
              h4 Reserva de gestión
              .box___card_sinbordes_p
                p.mb-0 Se establece para eventos imprevistos que no fueron identificados de manera específica y se administra en un nivel de autoridad superior. Normalmente no forma parte de la línea base de costos, aunque sí del presupuesto total autorizado.
      p.mb-5 La reserva de contingencia puede calcularse mediante un porcentaje asociado al nivel de riesgo, el análisis del costo esperado de los riesgos, datos históricos, el juicio de especialistas, las condiciones contractuales o las políticas organizacionales. Por ejemplo, si una actividad tiene un costo estimado de $20.000.000 COP y se establece una contingencia del 8 % por los riesgos identificados:
      .row.justify-content-center.mb-5(data-aos="zoom-in")
        .col-xl-6
          .call-to-action__text  
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | $20.000.000 COP × 8 % = $1.600.000 COP
      p.mb-5 El valor de la actividad con contingencia será de $21.600.000 COP. El porcentaje no debe aplicarse automáticamente a todas las actividades, sino reflejar la incertidumbre real y la exposición al riesgo. Además, las reservas no deben utilizarse para corregir estimaciones deficientes ni para financiar trabajo adicional no aprobado. Su uso sigue el siguiente procedimiento:
      .bg___color_2
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 1. Identificar el evento
                    p.mb-0 Determinar el evento ocurrido y comprobar su relación con un riesgo identificado. Si el evento no estaba previsto, puede requerirse la reserva de gestión o una modificación del presupuesto.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img16.svg', alt='' style="width: 190px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img17.svg', alt='' style="width: 190px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso 2. Estimar el valor
                    p.mb-0 Calcular el monto requerido para atenderlo.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 3. Solicitar la autorización
                    p.mb-0 Presentar la solicitud a la instancia que administra la reserva.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img18.svg', alt='' style="width: 190px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img19.svg', alt='' style="width: 190px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso 4. Registrar y actualizar
                    p.mb-0 Registrar la utilización y actualizar la información financiera.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 5. Comunicar
                    p.mb-0 Informar el efecto a los interesados.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img20.svg', alt='' style="width: 190px").m-auto
      p.mb-0 Las reservas se revisan a medida que avanza el proyecto. Cuando un riesgo desaparece, la contingencia asociada puede liberarse o reasignarse según el procedimiento autorizado.
      Separador
      #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.5 Línea base del cronograma y de los costos
      p.mb-5 Una #[b línea base] es la versión aprobada de la planificación que se utiliza como referencia para comparar el desempeño real del proyecto. No corresponde simplemente a guardar el archivo, sino que representa un compromiso formal sobre las fechas y los costos previstos. Sus dos componentes se presentan a continuación:
      .tarjeta--container.row.justify-content-center.mb-5.m-0(data-aos="zoom-in")
        .col-xl-6.col-md-10.tarjeta.color-acento-contenido.p-5.mb-4.mb-lg-0.text-white
          .row.d-flex.align-items-end.mb-4
            .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t4/img21.svg', alt='' style="max-width: 100px")
            .col-xl
              h2.mb-0 Línea base del cronograma
          p.mb-0 Conserva las fechas de inicio y finalización, las duraciones, los hitos, la secuencia de actividades y la ruta crítica aprobadas.
        .col-xl-6.col-md-10.tarjeta.color-primario.p-5
          .row.d-flex.align-items-end.mb-4
            .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t4/img22.svg', alt='' style="max-width: 100px")
            .col-xl
              h2.mb-0 Línea base de costos
          p.mb-0 Conserva los costos por actividad, por paquete de trabajo y por periodo, las reservas de contingencia y el presupuesto distribuido en el tiempo.
      p.mb-5 La relación entre las estimaciones, las reservas y el presupuesto se resume en la siguiente tabla:
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 12.
            span Relación entre presupuesto y línea base
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Elemento
                  th.texto-left Contenido
              tbody
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Estimación de costos
                  td.texto-left Valor calculado para ejecutar las actividades
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Reserva de contingencia
                  td.texto-left Valor para riesgos identificados
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Línea base de costos
                  td.texto-left Estimaciones más reservas de contingencia
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Reserva de gestión
                  td.texto-left Valor para eventos no identificados
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Presupuesto total
                  td.texto-left Línea base de costos más reserva de gestión
      p.mb-5 La línea base se establece después de verificar que el alcance esté representado, que las actividades estén secuenciadas, que los recursos sean viables, que las fechas cumplan los acuerdos, que los costos tengan respaldo, que las reservas estén justificadas y que los interesados responsables hayan revisado la información. Su establecimiento en la herramienta sigue estos pasos:
      .bg___color_1
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 1. Revisar y aprobar
                    p.mb-0 Revisar el cronograma y el presupuesto, y confirmar su aprobación.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img23.svg', alt='' style="width: 190px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img24.svg', alt='' style="width: 190px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso 2. Guardar la línea base
                    p.mb-0 Utilizar la función de la herramienta para guardarla y registrar su fecha y versión.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 3. Generar los reportes iniciales
                    p.mb-0 Obtener los reportes que servirán de referencia para el seguimiento.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img25.svg', alt='' style="width: 190px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img26.svg', alt='' style="width: 190px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso 4. Proteger la información
                    p.mb-0 Crear una copia de respaldo y restringir las modificaciones no autorizadas.
          .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
            .bloque-texto-g__img(
              :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img27.png')})` }")
            .bloque-texto-g__texto.p-4
              p A partir de ese momento, los datos reales pueden compararse con los valores aprobados para identificar variaciones de fechas, trabajo y costos. La línea base solo se actualiza mediante un cambio formalmente aprobado.
              br
              br
              p Una vez aprobada la planificación, la línea base conserva las fechas, duraciones, trabajo y costos que servirán como referencia durante el seguimiento. La opción «Proyecto completo» permite guardar estos datos para todas las tareas del archivo.
      .row.justify-content-center.mb-0
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 7.
            span Establecimiento de la línea base en Microsoft Project
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/t4/img28.png', alt='Captura de Microsoft Project con la opción para guardar la línea base del proyecto completo y conservar los datos aprobados de planificación. ').m-auto

</template>

<script>
export default {
  name: 'Tema4',
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
