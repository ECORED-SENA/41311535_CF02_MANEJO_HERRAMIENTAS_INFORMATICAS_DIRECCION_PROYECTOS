<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 2
        h1 Actividades y red del cronograma
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_1.fit___box_3(data-aos="fade-right")
            p.mb-0 Una vez que el alcance se encuentra organizado mediante la EDT, cada paquete de trabajo debe convertirse en acciones concretas que puedan programarse, asignarse y controlarse. Estas acciones reciben el nombre de #[b actividades del proyecto] y constituyen la base para elaborar el cronograma.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img1.png', alt='' style="max-width: 350px").m-auto
      p.mb-5 Posteriormente, las actividades se organizan en una secuencia lógica que permite comprender cuáles deben realizarse primero, cuáles pueden desarrollarse de forma paralela y cuáles dependen de resultados anteriores. La representación gráfica de estas relaciones se conoce como #[b red del cronograma], y su elaboración permite detectar inconsistencias antes de aprobar las fechas del proyecto.
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.1 Lista de actividades y atributos
      p.mb-5 A continuación, se presenta un video que explica cómo elaborar la lista de actividades de un proyecto, establecer su relación con los paquetes de trabajo de la EDT e identificar los atributos necesarios para facilitar su planificación, ejecución y seguimiento.
      figure(data-aos="zoom-in").mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/5V6Q2X5j4PE" title="Lista de actividades y sus atributos en la gestión de proyectos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption.fit___figcaption-video Video. Lista de actividades y sus atributos en la gestión de proyectos
      p.mb-5 Los más frecuentes se presentan en la siguiente tabla:
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 6.
            span Atributos de las actividades
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Atributo
                  th.texto-left Descripción
              tbody
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Código
                  td.texto-left Identificador único de la actividad
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Nombre
                  td.texto-left Acción que debe ejecutarse
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Paquete de trabajo
                  td.texto-left Elemento de la EDT al que pertenece
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Responsable
                  td.texto-left Persona o rol encargado
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Predecesoras y sucesoras
                  td.texto-left Actividades que deben ocurrir antes y actividades que dependen de su resultado
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Duración preliminar
                  td.texto-left Tiempo estimado para completarla
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Recursos requeridos
                  td.texto-left Personas, equipos o materiales
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Restricciones y supuestos
                  td.texto-left Condiciones que limitan o condicionan su programación
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Criterio de finalización
                  td.texto-left Condición para considerarla terminada
      p.mb-5 Según el proyecto, también pueden registrarse la ubicación, el tipo de trabajo, la prioridad, los riesgos asociados, los requisitos relacionados y el calendario aplicable. Los atributos deben mantenerse actualizados, porque una actividad con información incompleta puede generar errores en la estimación, la asignación de recursos o la secuenciación. La lista puede elaborarse mediante el siguiente procedimiento:
      .bg___color_2
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 1. Revisar la EDT
                    p.mb-0 Tomar como punto de partida la EDT aprobada y seleccionar un paquete de trabajo.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img2.svg', alt='' style="width: 190px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img3.svg', alt='' style="width: 190px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso 2. Identificar las acciones
                    p.mb-0 Determinar las acciones necesarias para producir el paquete.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 3. Redactar las actividades
                    p.mb-0 Nombrar cada actividad con un verbo y un resultado, y verificar que no existan duplicidades.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img4.svg', alt='' style="width: 190px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img5.svg', alt='' style="width: 190px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso 4. Codificar y describir
                    p.mb-0 Asignar un código, registrar los atributos iniciales y relacionar cada actividad con sus requisitos.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 5. Validar la lista
                    p.mb-0 Revisarla con los responsables técnicos antes de incorporarla a la herramienta.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img6.svg', alt='' style="width: 190px").m-auto
      p.mb-0 La lista debe revisarse antes de estimar las duraciones, ya que, cuando falta una actividad, las fechas y los costos calculados dejan de representar el trabajo real.
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.2 Hitos y actividades resumen
      p Los #[b hitos] son puntos significativos del proyecto que señalan decisiones, aprobaciones, entregas o acontecimientos relevantes. No representan trabajo prolongado y normalmente se registran con duración igual a cero. Un hito debe expresar un acontecimiento verificable, como “Requerimientos aprobados”, “Diseño técnico autorizado”, “Pruebas aceptadas” o “Proyecto cerrado”; expresiones como “avanzar en la configuración” no son adecuadas porque no indican un resultado puntual.
      p.mb-5 Los hitos permiten comunicar avances, verificar compromisos, autorizar el inicio de nuevas etapas, controlar fechas contractuales y generar informes ejecutivos. Conviene incluir un hito cuando se presenta alguna de las siguientes situaciones:
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_3.color___2(data-aos="fade-right")
            ol.lista-ol--cuadro.mb-0.lista-ol--separador
              li
                .lista-ol--cuadro__vineta
                  span 1
                | 
                p.mb-0 Existe una fecha contractual o se autoriza un pago.
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | 
                p.mb-0 Se requiere una aprobación o debe tomarse una decisión.
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | 
                p.mb-0 Finaliza una fase o se inicia una etapa crítica.
              li 
                .lista-ol--cuadro__vineta
                  span 4
                | 
                p.mb-0 Se recibe un entregable o se obtiene la aceptación de un interesado.
              li.mb-0
                .lista-ol--cuadro__vineta
                  span 5
                | 
                p.mb-0 Se libera un recurso importante o se cumple una condición externa.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img7.png', alt='' style="max-width: 570px").m-auto
      p No se recomienda convertir todas las actividades en hitos; su uso debe concentrarse en acontecimientos importantes para la gestión y la comunicación. Un hito puede depender de una o varias actividades. Por ejemplo, “Diseño aprobado” se alcanza después de elaborar, revisar y corregir el diseño.
      p.mb-5 Una #[b actividad resumen], por su parte, agrupa varias actividades relacionadas y permite observar el tiempo total de una fase, un entregable o un componente. Por ejemplo, “Configuración del sistema” puede agrupar las actividades “Registrar parámetros generales”, “Crear perfiles de usuario”, “Configurar permisos”, “Habilitar los módulos” y “Verificar la configuración”. Su fecha de inicio corresponde a la primera actividad incluida y su fecha de finalización, a la última. Las actividades resumen facilitan la lectura, organizan jerárquicamente el cronograma, relacionan la EDT con las actividades y permiten presentar reportes generales. Su duración no debe ingresarse manualmente cuando la herramienta la calcula a partir de las subtareas, porque se producirían inconsistencias. Las diferencias entre los tres elementos se resumen a continuación:
      .row.justify-content-center.mb-5
        .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t2/img8.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Actividad
            p.mb-0.text-center Representa una acción con duración. Ejemplo: “Ejecutar pruebas funcionales”.
        .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/t2/img9.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Actividad resumen
            p.mb-0.text-center Agrupa varias actividades relacionadas. Ejemplo: “Validación del sistema”.
        .col-lg-4.col-md-9(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t2/img10.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Hito
            p.mb-0.text-center Representa un acontecimiento sin duración. Ejemplo: “Sistema aprobado”.
      p.mb-0 Una estructura que utiliza únicamente actividades resumen no contiene suficiente detalle, mientras que una lista sin hitos dificulta identificar los momentos relevantes del proyecto.
      Separador
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.3 Relaciones y dependencias entre actividades
      p.mb-5 Una #[b dependencia] indica la relación existente entre dos actividades y permite determinar si una de ellas necesita que otra comience o finalice antes de poder ejecutarse. La actividad que condiciona el trabajo recibe el nombre de #[b predecesora], y aquella que depende de su resultado se denomina #[b sucesora]. Por ejemplo, si la configuración de una plataforma depende de la aprobación previa del diseño técnico, “Aprobar el diseño técnico” es la actividad predecesora y “Configurar la plataforma”, la sucesora. Los tipos de relación se presentan a continuación:
      .row.justify-content-center.mb-5
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .box___card_sinbordes.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t2/img11.png', alt="" ).m-auto
              h4.text-center Fin a inicio
              .box___card_sinbordes_p
                p.mb-0.text-center La actividad sucesora comienza después de terminar la predecesora. Es la relación más utilizada, aunque no debe aplicarse automáticamente a todas las actividades.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .box___card_sinbordes.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t2/img12.png', alt="" ).m-auto
              h4.text-center Inicio a inicio
              .box___card_sinbordes_p
                p.mb-0.text-center La actividad sucesora puede comenzar cuando inicia la predecesora.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .box___card_sinbordes.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t2/img13.png', alt="" ).m-auto
              h4.text-center Fin a fin
              .box___card_sinbordes_p
                p.mb-0.text-center La actividad sucesora no puede terminar antes de que finalice la predecesora.
        .col-xl-3.col-md-9(data-aos="fade-left")
          .box___card_sinbordes.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t2/img14.png', alt="" ).m-auto
              h4.text-center Inicio a fin
              .box___card_sinbordes_p
                p.mb-0.text-center La actividad sucesora no puede finalizar hasta que comience la predecesora.
      p Según su origen, las dependencias pueden ser #[b obligatorias], cuando se derivan de la naturaleza técnica o física del trabajo; #[b discrecionales], cuando se establecen por experiencia o preferencia metodológica; #[b internas], cuando se encuentran bajo el control del equipo; o #[b externas], cuando dependen de proveedores, clientes, autoridades u otras organizaciones. Por ejemplo, la instalación de un equipo depende obligatoriamente de su entrega, mientras que la aprobación de una licencia por parte de una entidad externa no puede ser controlada directamente por el equipo del proyecto.
      p.mb-5 Algunas relaciones incorporan #[b adelantos] y #[b retrasos]. Un adelanto permite comenzar la actividad sucesora antes de que finalice por completo la predecesora; por ejemplo, la documentación puede iniciarse antes de terminar toda la configuración. Un retraso introduce un periodo de espera entre ambas; por ejemplo, después de instalar un componente puede ser necesario esperar un día antes de realizar la prueba. Los adelantos y retrasos deben tener una justificación técnica, contractual u organizacional, porque su uso excesivo dificulta la interpretación del cronograma. Para establecer las dependencias puede seguirse esta secuencia:
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          LineaTiempoD.color-primario(data-aos="fade-right")
            p(numero="1" titulo="Paso 1. Revisar la lista de actividades") Identificar qué información o resultado necesita cada actividad.
            p(numero="2" titulo="Paso 2. Determinar predecesoras y sucesoras") Establecer el orden lógico entre las actividades.
            p(numero="3" titulo="Paso 3. Seleccionar el tipo de relación") Elegir la relación que representa mejor la lógica del trabajo.
            p(numero="4" titulo="Paso 4. Incorporar adelantos o retrasos") Aplicarlos únicamente cuando exista una justificación.
            p(numero="5" titulo="Paso 5. Validar la secuencia") Revisarla con los responsables técnicos.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img15.png', alt='' style="max-width: 310px").m-auto
      p.mb-0 Por ejemplo, en un proyecto de implementación tecnológica, los requerimientos se aprueban antes de elaborar el diseño; la infraestructura se prepara mientras se desarrolla el diseño; el sistema se configura después de completar el diseño y la infraestructura; las pruebas se ejecutan una vez finalizada la configuración, y el hito de aceptación se registra después de aprobar los resultados. Esta secuencia combina actividades consecutivas, trabajos paralelos y puntos en los que varias tareas deben completarse antes de continuar.
      Separador
      #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.4 Diagramación y red del cronograma
      p.mb-5 La #[b red del cronograma] es la representación gráfica de las actividades y sus dependencias. En ella, las actividades suelen representarse mediante cuadros o nodos, y las flechas indican las relaciones entre ellas. Su propósito es mostrar cómo fluye el trabajo desde el inicio hasta la finalización del proyecto y revisar la lógica antes de calcular las fechas definitivas. Además de actividades, hitos y relaciones, la red permite identificar dos situaciones particulares:
      .row.justify-content-center.mb-5
        .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .box___card_sinbordes.h-100.color___3.text-white
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t2/img16.png', alt="" ).m-auto
              h4 Divergencia
              .box___card_sinbordes_p
                p.mb-0 Ocurre cuando una actividad da origen a varias acciones posteriores. Por ejemplo, después de aprobar los requerimientos pueden comenzar simultáneamente el diseño técnico y la preparación de la infraestructura.
        .col-xl-6.col-md-9(data-aos="fade-left")
          .box___card_sinbordes.h-100.color___4
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t2/img17.png', alt="" ).m-auto
              h4 Convergencia
              .box___card_sinbordes_p
                p.mb-0 Ocurre cuando varias actividades deben finalizar antes de que otra pueda comenzar. Por ejemplo, la configuración requiere que el diseño esté aprobado y que la infraestructura se encuentre disponible.
      p.mb-5 La secuencia del ejemplo anterior puede representarse en la siguiente red, organizada por predecesoras:
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 7.
            span Ejemplo de red del cronograma
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Actividad
                  th.ajuste-border-tabla.texto-left Predecesora(s)
                  th.texto-left Situación en la red
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Inicio
                  td.ajuste-border-tabla.texto-left Ninguna
                  td.texto-left Inicio del proyecto
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Aprobar requerimientos
                  td.ajuste-border-tabla.texto-left Inicio
                  td.texto-left Divergencia hacia dos actividades
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Elaborar diseño
                  td.ajuste-border-tabla.texto-left Aprobar requerimientos
                  td.texto-left Actividad paralela
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Preparar infraestructura
                  td.ajuste-border-tabla.texto-left Aprobar requerimientos
                  td.texto-left Actividad paralela
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Configurar sistema
                  td.ajuste-border-tabla.texto-left Elaborar diseño y preparar infraestructura
                  td.texto-left Convergencia
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Ejecutar pruebas
                  td.ajuste-border-tabla.texto-left Configurar sistema
                  td.texto-left Secuencia
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Aprobar solución (hito)
                  td.ajuste-border-tabla.texto-left Ejecutar pruebas
                  td.texto-left Hito de aceptación
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Fin
                  td.ajuste-border-tabla.texto-left Aprobar solución
                  td.texto-left Finalización del proyecto
      p.mb-5 En este ejemplo, el diseño y la infraestructura se desarrollan de manera paralela, y la configuración solo puede comenzar cuando ambas actividades hayan finalizado. La red debe construirse a partir de la lista de actividades y no de supuestos no documentados. Para elaborarla se identifica el inicio del proyecto, se organizan las actividades según su secuencia, se representan las relaciones, se incorporan los hitos, se muestran las actividades paralelas y las dependencias externas, y se verifica la continuidad hasta la finalización.
      .box___color-text-imgleft(data-aos="zoom-in").mb-0
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t2/img18.png', alt='' style="width: 500px").m-auto
          .col-xl.fit___box_container
            p Durante la validación se comprueban dos condiciones. La primera es la ausencia de #[b ciclos lógicos]. Un ciclo aparece cuando una actividad depende directa o indirectamente de sí misma (por ejemplo, A depende de B, B depende de C y C depende de A), lo que impide calcular el cronograma. La segunda es la ausencia de #[b actividades aisladas]. Salvo la primera y la última, toda actividad debe tener predecesora y sucesora, porque una tarea sin conexión puede indicar que no se identificó correctamente su relación con el resto del trabajo.
            p.mb-0 La red también permite reconocer los diferentes caminos que existen entre el inicio y el final del proyecto, los cuales se utilizan más adelante para calcular la ruta crítica. Debe ser lo suficientemente clara para que el equipo interprete la secuencia sin depender exclusivamente de la herramienta; sin embargo, una vez validada, se registra en el software para facilitar los cálculos y las actualizaciones.
      Separador
      #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.5 Ingreso y validación de actividades en el #[i software]
      p.mb-5 Después de definir las actividades, los hitos y las dependencias, la información se incorpora en la herramienta informática previamente configurada. En esta etapa no se repiten los procedimientos de acceso, creación del archivo o parametrización general; se utiliza el archivo oficial en el que ya se encuentra registrada la EDT. El ingreso puede realizarse mediante el siguiente procedimiento:
      .bg___color_2
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 1. Abrir la versión oficial
                    p.mb-0 Utilizar el archivo vigente y seleccionar la vista de tareas.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img19.svg', alt='' style="width: 190px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img20.svg', alt='' style="width: 190px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso 2. Registrar las actividades
                    p.mb-0 Ingresar las actividades detalladas bajo las actividades resumen correspondientes y aplicar los niveles jerárquicos.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 3. Incorporar los hitos
                    p.mb-0 Registrarlos con duración igual a cero en su ubicación dentro de la estructura.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img21.svg', alt='' style="width: 190px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img22.svg', alt='' style="width: 190px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso 4. Registrar las dependencias
                    p.mb-0 Ingresar las predecesoras mediante el campo correspondiente, los comandos de vinculación o la vista de red, y definir el tipo de relación.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 5. Incorporar adelantos o retrasos
                    p.mb-0 Aplicar únicamente los que se encuentren justificados.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img23.svg', alt='' style="width: 190px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img24.svg', alt='' style="width: 190px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso 6. Guardar y revisar
                    p.mb-0 Guardar la información y validar el resultado.
      p Los nombres registrados deben coincidir con la lista aprobada; si una actividad se modifica durante el ingreso, el ajuste debe reflejarse también en el documento de origen. Algunas herramientas asignan automáticamente la relación fin a inicio, por lo que se debe revisar cada caso y cambiarla cuando la lógica del trabajo exija otro tipo de vínculo.
      p.mb-5 Las #[b restricciones de fecha] deben utilizarse únicamente cuando exista una condición real, como una entrega contractual, una ventana de mantenimiento o una aprobación externa. Aplicar restricciones rígidas sin necesidad impide que la herramienta calcule correctamente las fechas y puede ocultar errores de programación. La información ingresada se valida con la siguiente lista de comprobación:
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 8.
            span Validación de las actividades ingresadas
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Elemento revisado
                  th.texto-left Resultado esperado
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Actividades
                  td.texto-left Coinciden con la lista validada y no presentan duplicidades
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Jerarquía
                  td.texto-left Conserva la relación con la EDT y los códigos son consistentes
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Hitos
                  td.texto-left Tienen duración igual a cero y están correctamente ubicados
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Dependencias
                  td.texto-left Representan el orden real del trabajo
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Dependencias externas
                  td.texto-left Tienen un responsable de seguimiento
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Actividades aisladas y ciclos
                  td.texto-left No existen o han sido revisados y justificados
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Restricciones, adelantos y retrasos
                  td.texto-left Se encuentran documentados y justificados
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Red
                  td.texto-left Mantiene continuidad desde el inicio hasta el final
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img25.png')})` }")
        .bloque-texto-g__texto.p-4
          p La validación debe realizarse con quienes conocen la ejecución técnica del trabajo, para comprobar si las actividades pueden realizarse en el orden establecido y si existen oportunidades para ejecutarlas en paralelo. Una vez aprobada la secuencia, se guarda una nueva versión del archivo y la información queda preparada para estimar las duraciones y asignar los recursos.
      p.mb-5 El registro de las actividades integra sus duraciones y predecesoras para establecer la secuencia del trabajo. Los hitos se incorporan con duración de cero días y las dependencias determinan el orden de ejecución.
      .row.justify-content-center.mb-0
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 2.
            span Registro de actividades, duraciones y predecesoras en Microsoft Project
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/t2/img26.png', alt='Captura de Microsoft Project con actividades del proyecto, duraciones, hitos y relaciones de precedencia que establecen la secuencia del trabajo. ').m-auto

</template>

<script>
export default {
  name: 'Tema2',
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
