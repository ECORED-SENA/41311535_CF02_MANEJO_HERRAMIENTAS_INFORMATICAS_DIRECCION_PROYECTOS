<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 1
        h1 Estructura de desglose del trabajo
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_1.fit___box_1(data-aos="fade-right")
            p.mb-0 La planificación del proyecto requiere transformar el alcance aprobado en componentes que puedan organizarse, estimarse, asignarse y controlarse. Para lograrlo se utiliza la #[b Estructura de Desglose del Trabajo (EDT)], una representación jerárquica que divide el alcance total en entregables y en partes cada vez más manejables.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img1.png', alt='' style="max-width: 350px").m-auto
      p.mb-5 La EDT permite comprender con precisión qué debe producir el proyecto. Su construcción se concentra en los resultados y los entregables, no en el orden temporal de las actividades. Las fechas, las dependencias y los recursos se desarrollan posteriormente, cuando los paquetes de trabajo se convierten en actividades del cronograma. Una EDT bien elaborada facilita identificar todos los entregables, evitar trabajos ajenos al proyecto, asignar responsabilidades, preparar las estimaciones de duración, recursos y costos, y establecer puntos de seguimiento y control. Por ello, debe conservar coherencia con los requerimientos, el alcance y las condiciones aprobadas.
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.1 Entregables y descomposición del alcance
      p Un #[b entregable] es un resultado verificable que debe producirse para cumplir el alcance del proyecto. Puede corresponder a un producto, un servicio, un documento, una instalación, una mejora, una capacidad o cualquier resultado susceptible de revisión y aceptación. Por ejemplo, en un proyecto para implementar un sistema de seguimiento, algunos entregables pueden ser el documento de requerimientos validado, el diseño de la solución, la plataforma configurada, las pruebas ejecutadas, el manual de uso, el personal capacitado y el informe de cierre.
      p.mb-5 La redacción de los entregables debe orientarse al resultado obtenido. Expresiones demasiado amplias, como “hacer el sistema” o “gestionar la capacitación”, dificultan la verificación. Las características de un entregable adecuado se presentan a continuación:
      .bg___carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t1/img2.png', alt='' style="max-width: 400px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img3.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Identificable
                  p.mb-0.text-center Puede reconocerse y diferenciarse de los demás resultados del proyecto.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img4.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Verificable
                  p.mb-0.text-center Existen criterios para revisar su cumplimiento.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img5.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Necesario
                  p.mb-0.text-center Aporta directamente al alcance aprobado.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img6.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Asignable
                  p.mb-0.text-center Puede relacionarse con un responsable.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img7.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Estimable
                  p.mb-0.text-center Permite calcular el tiempo, los recursos y los costos que requiere.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img8.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Aceptable
                  p.mb-0.text-center Puede ser aprobado por una persona autorizada.
      p.mb-5 La #[b descomposición] consiste en dividir cada entregable en componentes más pequeños hasta alcanzar un nivel que pueda planificarse y controlarse adecuadamente. No se trata de crear una lista extensa de tareas, ya que en esta etapa se organizan productos y resultados, y las actividades se definen después a partir de los paquetes de trabajo. El proceso se desarrolla de forma progresiva, como se presenta a continuación:
      .bg___color_1
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 1. Identificar el resultado final
                    p.mb-0 Precisar el producto, servicio o resultado que el proyecto debe entregar.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img9.svg', alt='' style="width: 190px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img10.svg', alt='' style="width: 190px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso 2. Determinar los entregables principales
                    p.mb-0 Establecer los grandes resultados que componen el alcance.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 3. Dividir cada entregable
                    p.mb-0 Separarlo en componentes y continuar la subdivisión cuando sea necesario.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img11.svg', alt='' style="width: 190px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img12.svg', alt='' style="width: 190px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso 4. Verificar el nivel alcanzado
                    p.mb-0 Comprobar que cada componente pueda estimarse y controlarse.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 5. Confirmar la integridad
                    p.mb-0 Asegurar que la suma de los componentes represente todo el alcance.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img13.svg', alt='' style="width: 190px").m-auto
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 1.
            span Ejemplo de descomposición
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Nivel
                  th.texto-left Elemento
              tbody
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Proyecto
                  td.texto-left Implementación de un sistema de seguimiento
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Entregable principal
                  td.texto-left Solución tecnológica implementada
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Componente
                  td.texto-left Plataforma configurada
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Subcomponente
                  td.texto-left Módulos habilitados
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Paquete de trabajo
                  td.texto-left Módulo de reportes configurado y probado
      .row.justify-content-center.align-items-center.mb-0
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t1/img14.png', alt='').m-auto
        .col-xl
          .row.mb-3
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img15.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 Toda descomposición debe cumplir la #[b regla del 100 %], según la cual la EDT representa la totalidad del alcance aprobado, es decir, incluye todo el trabajo necesario para producir los entregables y no incorpora trabajo ajeno al proyecto. Esto implica que los componentes inferiores completan el elemento superior, que no se incluyen trabajos sin autorización y que ningún componente se duplica en ramas diferentes. Por ejemplo, si un entregable se divide en diseño, configuración y pruebas, y falta la capacitación o la documentación necesaria, la EDT se encuentra incompleta.
          .box___style_1.color___1(data-aos="fade-left")
            p.mb-0 La profundidad de la descomposición depende del tamaño y la complejidad del proyecto. Descomponer demasiado genera una estructura difícil de administrar, mientras que descomponer muy poco impide obtener estimaciones confiables. El nivel adecuado se alcanza cuando cada elemento puede tratarse como un paquete de trabajo.    
      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.2 Planificación gradual del trabajo
      p.mb-5 La #[b planificación gradual] consiste en detallar el trabajo según la información disponible. Los componentes cercanos o suficientemente conocidos se desarrollan con mayor precisión, mientras que los elementos futuros o inciertos permanecen en un nivel general hasta contar con información confiable. Este enfoque resulta útil cuando no es posible definir todo el proyecto con el mismo nivel de detalle desde el inicio, debido a requisitos pendientes, aprobaciones, decisiones técnicas, proveedores, condiciones externas o resultados de etapas anteriores.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_3.fit___box_2(data-aos="fade-right")
            p.mb-0 Por ejemplo, en un proyecto dividido en las fases de preparación, diseño, implementación y cierre, la preparación puede encontrarse completamente definida, mientras que la implementación depende de los resultados del diseño. En este caso, la EDT detalla los paquetes de trabajo de preparación y diseño, y mantiene la implementación en un nivel más general hasta que los diseños sean aprobados.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img16.png', alt='').m-auto
        .col-xl.fit___bottom
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img17.svg', alt='' style="width: 70px")
          p.mb-0 El nivel de detalle de cada componente debe responder a la disponibilidad de información, la complejidad técnica, el riesgo, la proximidad de la ejecución y la necesidad de control. Así, un componente de alto riesgo puede requerir una descomposición detallada aunque se ejecute en una etapa posterior, mientras que un entregable simple puede mantenerse con menor profundidad.
      p.mb-5 La EDT no debe modificarse de forma improvisada. Cuando se amplía un componente mediante planificación gradual, se sigue una #[b actualización controlada]:
      .bg___color_2
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 1. Revisar la información
                    p.mb-0 Analizar los datos disponibles y los resultados de las etapas anteriores.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img18.svg', alt='' style="width: 190px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img19.svg', alt='' style="width: 190px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso 2. Identificar los nuevos componentes
                    p.mb-0 Definir los elementos que permiten detallar el componente.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 3. Verificar la relación con el alcance
                    p.mb-0 Confirmar que los nuevos elementos correspondan al alcance aprobado.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img20.svg', alt='' style="width: 190px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img21.svg', alt='' style="width: 190px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso 4. Definir paquetes y códigos
                    p.mb-0 Establecer los paquetes de trabajo y asignarles su código.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 5. Actualizar el diccionario
                    p.mb-0 Incorporar la descripción de los nuevos elementos.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img22.svg', alt='' style="width: 190px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img23.svg', alt='' style="width: 190px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso 6. Revisar los efectos
                    p.mb-0 Analizar las posibles consecuencias en tiempo y costo.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 7. Aprobar y registrar
                    p.mb-0 Obtener la aprobación, actualizar la herramienta informática y registrar la versión del cambio.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img24.svg', alt='' style="width: 190px").m-auto
      p.mb-5 Esta actualización permite diferenciar entre una mayor precisión del trabajo ya aprobado y una ampliación real del alcance. Agregar información a un componente existente no siempre implica un cambio, pero incorporar un entregable nuevo sí puede modificarlo, como se muestra en la siguiente tabla:
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 2.
            span Diferencia entre mayor detalle y cambio de alcance
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Situación
                  th.texto-left Clasificación
              tbody
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Dividir un paquete de trabajo aprobado en componentes menores
                  td.texto-left Mayor nivel de detalle
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Precisar criterios de aceptación existentes
                  td.texto-left Aclaración
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Incorporar un entregable no contemplado
                  td.texto-left Posible cambio de alcance
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Eliminar un componente aprobado
                  td.texto-left Posible cambio de alcance
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Ajustar el nombre sin alterar el resultado
                  td.texto-left Corrección documental
      p.mb-0 Cuando exista duda sobre la clasificación de una situación, se debe revisar la documentación autorizada y consultar al responsable del proyecto. Los cambios de alcance se tramitan mediante el procedimiento formal de control de cambios.
      Separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.3 Niveles, cuentas de control y paquetes de trabajo
      p La EDT se organiza mediante #[b niveles jerárquicos], en los que cada nivel representa una descomposición más detallada del elemento superior. Una estructura básica ubica el proyecto en el nivel 1, los entregables o fases principales en el nivel 2, los componentes de cada entregable en el nivel 3 y los paquetes de trabajo en el nivel 4. No existe una cantidad obligatoria de niveles; la profundidad depende del grado de control requerido.
      p.mb-5 Cada elemento inferior debe pertenecer a un único elemento superior, lo que mantiene una estructura clara y evita duplicidades. El siguiente ejemplo muestra una EDT organizada por niveles y codificada:
      .row.justify-content-center.mb-5
        .col-xl-8
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 3.
            span Ejemplo de EDT organizada por niveles
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left 
                  th.texto-left 
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold 1
                  td.texto-left Proyecto de implementación
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold 1.1
                  td.texto-left Preparación
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold 1.1.1
                  td.texto-left Requerimientos validados
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold 1.1.2
                  td.texto-left Plan de trabajo aprobado
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold 1.2
                  td.texto-left Solución configurada
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold 1.2.1
                  td.texto-left Módulos habilitados
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold 1.2.2
                  td.texto-left Usuarios registrados
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold 1.3
                  td.texto-left Validación
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold 1.3.1
                  td.texto-left Pruebas ejecutadas
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold 1.3.2
                  td.texto-left Informe de aceptación
      p.mb-5 Dentro de esta jerarquía se distinguen elementos con funciones diferentes, que se presentan a continuación:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img25.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Entregable").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Representa un resultado verificable del proyecto.
            .row(titulo="Cuenta de control").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Es un punto de la EDT en el que se consolida y supervisa el desempeño de una parte del proyecto. Permite relacionar alcance, cronograma, costos y responsabilidades, asignar el seguimiento, comparar lo planificado con lo ejecutado y analizar variaciones. Por ejemplo, “Solución configurada” puede funcionar como cuenta de control y reunir los paquetes “Módulos habilitados”, “Usuarios registrados” y “Permisos configurados”. No todos los niveles deben convertirse en cuentas de control; estas se definen según las necesidades de supervisión y reporte.
            .row(titulo="Paquete de trabajo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Es el nivel más bajo de la EDT, en el que se estima, asigna, ejecuta y controla el trabajo. Son ejemplos la matriz de requisitos validada, el calendario institucional configurado, el módulo de reportes probado o el manual de usuario aprobado.
            .row(titulo="Actividad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Describe una acción necesaria para producir un resultado. No forma parte de la EDT, sino que se define posteriormente a partir de los paquetes de trabajo.
      p.mb-5 Un paquete de trabajo no debe confundirse con una actividad. El paquete representa un resultado o componente del alcance; las actividades describen las acciones necesarias para producirlo. Esta diferencia evita convertir la EDT en un cronograma anticipado. Un paquete de trabajo se considera adecuado, y la descomposición puede detenerse, cuando cumple los siguientes criterios:
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          .box___style_3.color___2(data-aos="fade-right")
            ol.lista-ol--cuadro.mb-0.lista-ol--separador
              li
                .lista-ol--cuadro__vineta
                  span 1
                | 
                p.mb-0 Tiene un resultado claro y verificable.
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | 
                p.mb-0 Puede relacionarse con un responsable.
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | 
                p.mb-0 Permite estimar su duración, sus recursos y su costo.
              li 
                .lista-ol--cuadro__vineta
                  span 4
                | 
                p.mb-0 Posee criterios de aceptación.
              li 
                .lista-ol--cuadro__vineta
                  span 5
                | 
                p.mb-0 No se superpone con otros paquetes.
              li 
                .lista-ol--cuadro__vineta
                  span 6
                | 
                p.mb-0 Su avance puede medirse.
              li.mb-0
                .lista-ol--cuadro__vineta
                  span 7
                | 
                p.mb-0 Se encuentra dentro del alcance aprobado.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img26.png', alt='' style="max-width: 550px").m-auto
      Separador
      #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.4 Codificación y diccionario de la EDT
      p La #[b codificación] asigna un identificador a cada elemento de la EDT, como se observa en el ejemplo de EDT organizada por niveles. El código muestra la ubicación jerárquica del elemento y facilita su relación con actividades, recursos, costos, documentos y reportes. Una codificación adecuada es única, jerárquica, comprensible, consistente, escalable y compatible con la herramienta informática. Los códigos deben mantenerse estables, porque pueden estar relacionados con documentos, presupuestos y reportes; cuando la organización utiliza un sistema de codificación institucional, este debe conservarse.
      p.mb-5 El #[b diccionario de la EDT] es el documento que describe cada elemento de la estructura. Mientras la representación gráfica permite observar la jerarquía, el diccionario aporta la información necesaria para interpretar correctamente cada componente. Su contenido se organiza en los siguientes grupos:
      .bg___carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/img27.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Identificación
              p.mb-0.text-center Código, nombre, descripción y resultado esperado del elemento.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/img28.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Responsabilidad
              p.mb-0.text-center Responsable, estado de aprobación y fecha de revisión.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/img29.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Condiciones
              p.mb-0.text-center Supuestos, restricciones, riesgos asociados y criterios de aceptación.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/img30.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Estimaciones preliminares
              p.mb-0.text-center Recursos, duración y costo estimados.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/img31.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Trazabilidad
              p.mb-0.text-center Documentos relacionados, como la matriz de requisitos, el registro de interesados, el cronograma, el presupuesto, la matriz de responsabilidades, el registro de riesgos, las especificaciones técnicas y las solicitudes de cambio.
          p.mb-5 La siguiente tabla muestra un ejemplo de registro del diccionario:
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 4.
            span Ejemplo de registro del diccionario de la EDT
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Campo
                  th.texto-left Información
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Código
                  td.texto-left 1.2.1
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Nombre
                  td.texto-left Módulo de reportes configurado
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Descripción
                  td.texto-left Configuración de consultas y reportes requeridos
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Responsable
                  td.texto-left Líder técnico
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Criterio de aceptación
                  td.texto-left Reportes generados con datos correctos
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Restricción
                  td.texto-left Uso de la infraestructura autorizada
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Supuesto
                  td.texto-left Datos de prueba disponibles
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Estado
                  td.texto-left Pendiente de ejecución
      p.mb-0 El nivel de detalle del diccionario debe ser proporcional al proyecto. No es necesario crear descripciones extensas cuando el paquete es sencillo, pero tampoco debe limitarse a repetir el nombre del elemento. La #[b trazabilidad] que aporta permite comprobar qué requisito origina un entregable y qué actividades, recursos y costos se relacionan con él. Además, la EDT y su diccionario deben conservar siempre la misma versión, de modo que el equipo no utilice documentos con información diferente.
      Separador
      #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.5 Construcción y validación de la EDT en el #[i software]
      p.mb-5 La herramienta informática permite representar la EDT mediante tareas resumen, esquemas jerárquicos, códigos, sangrías, tablas o diagramas, según las funciones del #[i software] utilizado. La construcción debe realizarse a partir de la estructura previamente analizada, porque crear elementos directamente en la aplicación sin haber definido los entregables y los paquetes de trabajo puede producir inconsistencias difíciles de corregir. Antes de iniciar se requiere contar con el alcance aprobado, la descomposición acordada, los códigos, las cuentas de control, los responsables preliminares y el diccionario inicial. El ingreso puede realizarse mediante el siguiente procedimiento:
      .bg___color_2
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 1. Abrir el archivo oficial
                    p.mb-0 Utilizar la versión vigente del proyecto y seleccionar la vista de tareas o de estructura.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img32.svg', alt='' style="width: 190px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img33.svg', alt='' style="width: 190px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso 2. Registrar los entregables
                    p.mb-0 Ingresar el nombre del proyecto y los entregables principales.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 3. Incorporar los componentes
                    p.mb-0 Registrar los componentes y los paquetes de trabajo de cada entregable.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img34.svg', alt='' style="width: 190px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img35.svg', alt='' style="width: 190px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso 4. Aplicar la jerarquía
                    p.mb-0 Utilizar los niveles de sangría para que los elementos superiores se conviertan en tareas resumen y los inferiores en subtareas.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 5. Incorporar los códigos
                    p.mb-0 Registrar el código EDT de cada elemento en el campo correspondiente.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img36.svg', alt='' style="width: 190px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img37.svg', alt='' style="width: 190px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso 6. Revisar y guardar
                    p.mb-0 Comprobar la jerarquía y guardar la versión.
      p En esta etapa todavía no se requiere ingresar duraciones ni dependencias. Si la aplicación permite campos #[b personalizados] (por ejemplo, código EDT, cuenta de control, responsable, estado o criterio de aceptación), estos deben utilizarse de manera consistente y documentarse para que todos comprendan su finalidad.
      p.mb-5 Después del ingreso se valida la estructura con la siguiente lista de comprobación:
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 5.
            span Lista de comprobación de la EDT
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Verificación
                  th.texto-left Resultado esperado
              tbody
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Alcance completo
                  td.texto-left La EDT representa el 100 % del trabajo
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Entregables
                  td.texto-left Todos están identificados
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Jerarquía
                  td.texto-left Cada elemento tiene una ubicación única
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Paquetes de trabajo
                  td.texto-left Son estimables y controlables
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Códigos
                  td.texto-left Son únicos y coherentes
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Diccionario
                  td.texto-left Coincide con la estructura y describe sus elementos
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Planificación gradual
                  td.texto-left Los componentes pendientes de detalle están identificados
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold #[i Software]
                  td.texto-left Muestra correctamente la versión aprobada
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Duplicidades y exclusiones
                  td.texto-left No existen elementos repetidos ni trabajo no autorizado
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___color-text-imgleft(data-aos="zoom-in").mb-3
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t1/img38.png', alt='' style="width: 350px").m-auto
              .col-xl.fit___box_container
                p.mb-0 La EDT debe revisarse, además, con las personas que poseen conocimiento o autoridad sobre el alcance, como el responsable del proyecto, el patrocinador, los líderes técnicos, los usuarios y las áreas que suministran recursos. Una vez corregidas sus observaciones, se actualizan la estructura y el diccionario, se obtiene la aprobación y se guarda la versión oficial con su respaldo. La #[b EDT aprobada] se convierte en la base para definir las actividades, estimar duraciones, asignar recursos, calcular costos y construir las líneas base.
          p.mb-0 En Microsoft Project, la EDT se organiza mediante tareas resumen y subtareas. Las sangrías y los códigos establecen los niveles jerárquicos y relacionan cada elemento con los entregables del proyecto.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img39.png', alt='' style="max-width: 300px").m-auto
      .row.justify-content-center.mb-0
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 1.
            span Representación de la EDT en Microsoft Project
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/t1/img40.png', alt='Captura de Microsoft Project con una EDT organizada mediante tareas resumen, subtareas, códigos jerárquicos y barras de cronograma. ').m-auto

</template>

<script>
export default {
  name: 'Tema1',
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
