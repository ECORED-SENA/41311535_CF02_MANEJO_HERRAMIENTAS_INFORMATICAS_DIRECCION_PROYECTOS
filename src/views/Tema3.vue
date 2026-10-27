<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 3
        h1 Duraciones y recursos del proyecto
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_1.fit___box_3(data-aos="fade-right")
            p.mb-0 Después de definir y secuenciar las actividades, se debe determinar cuánto tiempo requiere cada una y cuáles recursos serán necesarios para ejecutarlas. Estas estimaciones permiten convertir la red lógica del proyecto en un cronograma viable, ajustado a la disponibilidad real de personas, equipos y materiales.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img1.png', alt='' style="max-width: 350px").m-auto
      p.mb-5 La duración de una actividad no depende únicamente de la cantidad de trabajo, sino que también está condicionada por la experiencia del equipo, la complejidad técnica, los calendarios, las dependencias, las restricciones y la disponibilidad de los recursos. Por esta razón, las estimaciones deben sustentarse en información verificable. La planificación de los recursos, por su parte, comprende identificar los recursos requeridos, estimar la cantidad necesaria, verificar su disponibilidad, asignarlos a las actividades y corregir las posibles sobreasignaciones.
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.1 Estimación análoga y paramétrica de duraciones
      p.mb-5 La #[b duración] es el periodo de tiempo necesario para completar una actividad según el calendario que le corresponde, y puede expresarse en horas, días, semanas o meses. No debe confundirse con el trabajo, que representa el esfuerzo que deben aportar los recursos. Antes de estimar se consideran el alcance de la actividad, su complejidad técnica, la cantidad de trabajo, la experiencia del equipo, la disponibilidad de recursos, los calendarios aplicables y el nivel de incertidumbre. Las dos técnicas de estimación más utilizadas se presentan a continuación:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Estimación análoga
                  p.mb-0 Utiliza información de actividades o proyectos anteriores con características semejantes, obtenida de registros históricos, lecciones aprendidas, informes, bases de datos institucionales o la experiencia de especialistas. Por ejemplo, si la configuración de un módulo similar tardó cuatro días en un proyecto anterior, este valor puede utilizarse como referencia inicial, después de revisar las diferencias en alcance, tecnología, experiencia del equipo y condiciones de trabajo. Su principal ventaja es la rapidez; su precisión disminuye cuando las condiciones son diferentes o la información histórica está desactualizada.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img2.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Estimación paramétrica
                  p.mb-0 Utiliza una relación entre una cantidad medible y una tasa de productividad, de modo que la duración se calcula a partir del volumen de trabajo y del rendimiento esperado. Resulta adecuada para actividades repetitivas y medibles.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img3.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 Por ejemplo, un equipo puede registrar veinte usuarios por hora. Si deben registrarse doscientos usuarios, el cálculo inicial es el siguiente:
      .row.justify-content-center.mb-5(data-aos="zoom-in")
        .col-xl-6
          .call-to-action__text  
            h5.mb-0 200 usuarios ÷ 20 usuarios por hora = 10 horas de trabajo
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img4.png')})` }")
        .bloque-texto-g__texto.p-4
          p El resultado debe ajustarse luego al calendario y a la disponibilidad del recurso. Si la persona dedica cinco horas diarias a esta actividad, la duración será de dos días laborables. Las dos técnicas pueden combinarse; una estimación paramétrica puede contrastarse con datos históricos para verificar que el resultado sea razonable.
          br
          br
          p Cada duración debe acompañarse de un #[b registro de la estimación] que permita comprender cómo fue calculada. Este registro incluye la técnica utilizada, la fuente de información, los supuestos, los recursos considerados, el calendario aplicable, el nivel de incertidumbre y el responsable. Así se facilita la revisión y permite ajustar la duración cuando cambian las condiciones.
      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.2 Calendarios de tareas y cálculo de duración
      p Los calendarios determinan los periodos en los que una actividad puede ejecutarse. Aunque el calendario global del proyecto ya fue configurado, algunas tareas requieren horarios o días diferentes por condiciones técnicas, contractuales u operativas, por ejemplo, cuando el trabajo debe realizarse en horario nocturno, durante fines de semana, en una ventana de mantenimiento, en horarios de baja demanda o en días definidos por el cliente. En estos casos se asigna un #[b calendario de tarea].
      p.mb-5 La duración debe calcularse con base en el tiempo realmente disponible. Por ejemplo, si una actividad requiere doce horas de trabajo y su calendario solo permite ejecutarla tres horas por día, el cálculo es el siguiente:
      .row.justify-content-center.mb-5(data-aos="zoom-in")
        .col-xl-6
          .call-to-action__text  
            h5.mb-0 12 horas ÷ 3 horas diarias = 4 días laborables
      .row.justify-content-center.align-items-center.mb-0
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t3/img5.png', alt='').m-auto
        .col-xl
          .row.mb-3
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img15.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 Si durante ese periodo existe un día no laborable, la fecha de finalización se desplazará. La herramienta informática aplica automáticamente estas condiciones, siempre que el calendario se encuentre correctamente asignado. La duración también puede cambiar por la reducción de la jornada disponible, los festivos o excepciones, la disponibilidad parcial del recurso, las restricciones de acceso, las dependencias externas o el aumento del trabajo, incluidas las correcciones o pruebas adicionales.
          .box___style_1.color___1(data-aos="fade-left")
            p.mb-0  Las fechas generadas por la herramienta deben revisarse y no aceptarse únicamente porque el cálculo haya sido automático. El software procesa los datos ingresados, pero no determina si la estimación representa las condiciones reales. Para validar una duración se confirma la cantidad de trabajo, se revisan la técnica de estimación, el calendario de la tarea, la disponibilidad de los recursos, los días no laborables, las restricciones y las dependencias, y se compara el resultado con experiencias anteriores. Cuando la duración no parece razonable, se deben corregir los parámetros que la originan antes de modificar la fecha manualmente.  
      Separador
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.3 Definición de recursos humanos, materiales y equipos
      p.mb-5 Los #[b recursos] son los elementos necesarios para desarrollar las actividades del proyecto. Su identificación parte de los paquetes de trabajo, la lista de actividades, las especificaciones técnicas y las condiciones de ejecución. Se clasifican en tres grupos principales, que se presentan a continuación:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Recursos humanos
                  p.mb-0 Personas, perfiles, especialistas y equipos de trabajo. Se definen mediante la competencia requerida, la experiencia, el nivel de responsabilidad, la cantidad necesaria, la jornada disponible, la ubicación, la dependencia organizacional y la fecha de disponibilidad. Cuando la asignación todavía no se ha confirmado, puede registrarse un perfil, como “Analista de proyectos” o “Técnico de soporte”, en lugar del nombre de una persona.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img6.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Materiales
                  p.mb-0 Elementos consumibles utilizados durante la ejecución, como insumos, licencias de uso limitado, papelería o componentes. Se estiman mediante cantidades y unidades de medida.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img7.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Equipos y herramientas
                  p.mb-0 Bienes físicos o tecnológicos necesarios para desarrollar las actividades, como equipos de cómputo, servidores, dispositivos de prueba, maquinaria, instrumentos de medición, plataformas tecnológicas, instalaciones o vehículos. Para ellos se revisan la capacidad, la disponibilidad, el calendario de uso, las condiciones técnicas y los periodos de mantenimiento.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img8.png', alt='' style="max-width: 500px").m-auto
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_3.fit___box_4(data-aos="fade-right")
            p.mb-0 Estos recursos se registran en la #[b hoja de recursos] de la herramienta, preparada durante la parametrización, con su nombre o perfil, tipo, grupo, disponibilidad máxima, calendario, unidad de medida y tarifa. La información debe registrarse con nombres consistentes, de modo que un mismo recurso no aparezca varias veces con denominaciones diferentes, lo que dificultaría el análisis de cargas y costos.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t3/img9.png', alt='').m-auto
        .col-xl.fit___bottom
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img17.svg', alt='' style="width: 70px")
          p.mb-0 El calendario laboral establece las jornadas disponibles y los días no laborables que intervienen en el cálculo de las fechas del proyecto. En este ejemplo, se configura una jornada de ocho horas, de lunes a viernes.
      .row.justify-content-center.mb-0
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 3.
            span Configuración del calendario laboral en Microsoft Project
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/t3/img10.png', alt='Captura de Microsoft Project con la configuración de un calendario laboral de ocho horas diarias, de lunes a viernes. ').m-auto
      Separador
      #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.4 Asignación y disponibilidad de recursos
      p La #[b asignación] consiste en relacionar los recursos con las actividades que deben ejecutar. Esta acción permite calcular el trabajo, revisar la disponibilidad y preparar posteriormente la estimación de costos. Antes de asignar un recurso se comprueba que posea la competencia requerida, que se encuentre disponible en las fechas previstas, que su calendario sea compatible con la actividad, que no tenga compromisos simultáneos incompatibles, que su participación esté autorizada y que la cantidad asignada sea suficiente.
      p.mb-5 La asignación se expresa mediante #[b unidades] o porcentajes. Una persona disponible a tiempo completo se representa con el 100 %, y una participación de media jornada, con el 50 %. La herramienta relaciona tres variables: duración, trabajo y unidades de asignación. Cuando se modifica una de ellas, las demás pueden cambiar según las opciones de programación; por eso, antes de realizar ajustes se debe comprender qué variable permanecerá fija. El siguiente ejemplo muestra esta relación:
      .row.justify-content-center.mb-5
        .col-xl-6
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 9.
            span Relación entre duración, trabajo y unidades
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Variable
                  th.texto-left Valor
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Duración
                  td.texto-left 4 días
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Jornada
                  td.texto-left 8 horas diarias
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Asignación
                  td.texto-left 50 % (4 horas diarias)
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Trabajo
                  td.texto-left 16 horas
      p.mb-5 Agregar más recursos no siempre reduce la duración. Algunas actividades pueden dividirse entre varias personas, mientras que otras requieren una secuencia o un único responsable; la decisión debe basarse en la naturaleza del trabajo y no únicamente en el cálculo automático.
      .bg___color_2
        .px-5
          .row.justify-content-center.align-items-center.mb-5
            .col-xl.mb-4.mb-lg-0
              .box___color-text-imgleft(data-aos="zoom-in").mb-3
                .row.align-items-center
                  .col-xl-auto
                    figure
                      img(src='@/assets/curso/temas/t3/img11.png', alt='' style="width: 350px").m-auto
                  .col-xl.fit___box_container
                    p.mb-0 La #[b disponibilidad] representa los periodos y la capacidad con que un recurso puede participar, y puede estar limitada por otros proyectos, la jornada parcial, las vacaciones, los turnos, el mantenimiento, los contratos, la ubicación o las prioridades institucionales. Esta información debe actualizarse cuando cambian las condiciones, ya que una asignación basada en una disponibilidad desactualizada puede producir retrasos o conflictos entre áreas.
              p.mb-0 Después de asignar los recursos, y antes de aprobar el cronograma, conviene revisar las actividades sin responsable, los recursos asignados fuera de su disponibilidad, los equipos requeridos simultáneamente, los materiales sin cantidad definida y las asignaciones incompatibles con el calendario, porque la disponibilidad puede modificar las fechas inicialmente calculadas.
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t3/img12.png', alt='' style="max-width: 370px").m-auto
          p.mb-5 La asignación de recursos establece quién ejecutará cada actividad y su porcentaje de dedicación. En este ejemplo, un técnico de soporte asignado al 50 % durante cuatro días, con jornadas de ocho horas, aporta dieciséis horas de trabajo.
          .row.justify-content-center.mb-0
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Figura 4.
                span Asignación de recursos en Microsoft Project
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/t3/img13.png', alt='Captura de Microsoft Project con la asignación de un técnico de soporte al 50 % durante cuatro días, equivalente a dieciséis horas de trabajo. ').m-auto
      Separador
      #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.5 Identificación y ajuste de sobreasignaciones
      p Una #[b sobreasignación] ocurre cuando un recurso tiene más trabajo programado del que puede ejecutar durante un periodo. Por ejemplo, una persona disponible ocho horas diarias se encuentra sobreasignada si recibe actividades simultáneas que requieren doce horas en la misma jornada. Esta situación también afecta a los equipos y herramientas compartidos cuando varias actividades requieren utilizarlos al mismo tiempo. Sus causas más frecuentes son las actividades programadas en paralelo, la disponibilidad o los calendarios registrados de forma incorrecta, las asignaciones superiores al 100 %, la participación simultánea en varios proyectos, las duraciones demasiado cortas y la falta de recursos con el perfil requerido.
      p.mb-5 La herramienta informática señala las sobreasignaciones mediante alertas, iconos, vistas de uso o gráficos de carga, pero su corrección requiere análisis, porque no todas las situaciones se resuelven de la misma manera. Las alternativas de ajuste se presentan a continuación:
      .row.justify-content-center.mb-3
        .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t3/img14.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Reprogramar
            p.mb-0.text-center Desplazar una actividad o cambiar su secuencia, preferiblemente aprovechando la holgura disponible.
        .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/t3/img15.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Sustituir o incorporar recursos
            p.mb-0.text-center Reemplazar el recurso por otro con el mismo perfil o agregar capacidad adicional, lo cual es especialmente útil cuando existen fechas obligatorias.
        .col-lg-4.col-md-9(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t3/img16.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Ajustar la dedicación
            p.mb-0.text-center Reducir el porcentaje de asignación o dividir la actividad en periodos.
      .row.justify-content-center.mb-5
        .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t3/img17.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Modificar el calendario
            p.mb-0.text-center Habilitar jornadas adicionales autorizadas o ajustar la duración cuando la estimación lo permita.
        .col-lg-4.col-md-9(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t3/img18.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Nivelar los recursos
            p.mb-0.text-center Redistribuir las actividades para que la carga no supere la disponibilidad, de forma manual o mediante la función automática de la herramienta.
      p.mb-5 La #[b nivelación automática] debe utilizarse con precaución, porque puede modificar fechas, dividir tareas o consumir holguras. Después de ejecutarla se revisan la nueva fecha de finalización, las actividades desplazadas, los hitos afectados, la ruta crítica, las restricciones y los costos asociados. En todos los casos, la opción seleccionada debe conservar la calidad, el alcance y las restricciones del proyecto. Para atender una sobreasignación se recomienda el siguiente procedimiento:
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          LineaTiempoD.color-primario(data-aos="fade-right")
            p(numero="1" titulo="Paso 1. Identificar el conflicto") Determinar el recurso y el periodo afectado.
            p(numero="2" titulo="Paso 2. Analizar las actividades simultáneas") Revisarlas junto con la disponibilidad real del recurso.
            p(numero="3" titulo="Paso 3. Evaluar prioridades") Analizar la prioridad y las dependencias de cada actividad.
            p(numero="4" titulo="Paso 4. Seleccionar y aplicar el ajuste") Elegir una alternativa y aplicarla en la herramienta.
            p(numero="5" titulo="Paso 5. Revisar los efectos") Comprobar las consecuencias sobre las fechas y los costos.
            p(numero="6" titulo="Paso 6. Documentar la decisión") Registrar el ajuste realizado y su justificación.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img19.png', alt='' style="max-width: 380px").m-auto
      p.mb-5 Una sobreasignación ocurre cuando el trabajo programado supera la disponibilidad del recurso. En este ejemplo, el técnico de soporte acumula doce horas de trabajo en una jornada de ocho horas, por lo que se requiere ajustar la programación o redistribuir las asignaciones.
      .row.justify-content-center.mb-0
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 5.
            span Identificación de una sobreasignación de recursos en Microsoft Project
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/t3/img20.png', alt='Captura de Microsoft Project con una sobreasignación de un técnico de soporte que acumula doce horas de trabajo en una jornada disponible de ocho horas. ').m-auto

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
