<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Cuestionario sobre planificación y control de proyectos',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> afianzar la comprensión de los conceptos y procedimientos relacionados con la construcción de la EDT, la secuenciación de actividades, la estimación de duraciones y recursos, la elaboración del cronograma y presupuesto, el seguimiento del desempeño, el análisis del valor ganado y el control de cambios.',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué representa la Estructura de Desglose del Trabajo (EDT)?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una lista cronológica de actividades.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una representación jerárquica del alcance.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un registro de costos reales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un informe de desempeño.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Qué establece la regla del 100 % en la EDT?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incluye todo el alcance aprobado.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Asigna todos los recursos disponibles.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Completa todas las actividades simultáneamente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Elimina todas las reservas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué caracteriza a un paquete de trabajo?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Es una actividad del cronograma.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Es el nivel más bajo de la EDT.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Es una reserva de gestión.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Es un informe financiero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Cuál es la función del diccionario de la EDT?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Calcular automáticamente la ruta crítica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Describir cada elemento de la estructura.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Registrar únicamente los costos reales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Definir solo las fechas contractuales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué permite la planificación gradual del trabajo?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Detallar según la información disponible.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminar la aprobación de cambios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Definir todo con igual detalle.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Modificar libremente el alcance.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿A partir de qué se definen las actividades del proyecto?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'De los paquetes de trabajo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'De los costos reales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'De las reservas de gestión.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'De los informes finales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué representa un hito dentro del cronograma?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una actividad con recursos ilimitados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un punto significativo de duración cero.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Una reserva para riesgos identificados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un costo distribuido en el tiempo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Para qué se establecen dependencias entre actividades?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para representar el orden lógico del trabajo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Para reemplazar la EDT.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Para aumentar automáticamente el presupuesto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Para eliminar los calendarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué factores condicionan la duración de una actividad?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo la cantidad de trabajo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Trabajo, calendarios y disponibilidad de recursos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Solo el presupuesto aprobado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Únicamente las fechas contractuales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Qué debe hacerse ante una sobreasignación de recursos?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ignorarla hasta finalizar el proyecto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ajustar asignaciones o programación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar la línea base.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Duplicar el alcance aprobado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Qué integra el desarrollo del cronograma?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Actividades, relaciones, duraciones, calendarios y recursos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Solo fechas y costos reales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Únicamente hitos y reservas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo entregables y responsables.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: '¿Qué caracteriza a una actividad crítica?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Dispone de amplia holgura.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Forma parte de la ruta crítica y no tiene holgura.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Siempre utiliza reserva de gestión.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No afecta la fecha final.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Qué incluye la línea base de costos?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Estimaciones y reservas de contingencia.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Solo costos reales registrados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Estimaciones y reserva de gestión.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo tarifas de personal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Para qué se utiliza una línea base?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Para comparar el desempeño real con la planificación aprobada.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Para sustituir el alcance aprobado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Para registrar únicamente riesgos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Para eliminar variaciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Qué representa la fecha de estado?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El cierre contractual del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El punto de referencia para analizar el avance.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La fecha de aprobación del alcance.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El inicio de la ruta crítica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: '¿Qué debe reflejar el porcentaje completado?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una percepción del responsable.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una condición real y verificable.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Una estimación sin evidencia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El presupuesto total aprobado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: '¿Qué representa el valor ganado (VG)?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El presupuesto del trabajo realmente completado.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El costo efectivamente utilizado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El presupuesto del trabajo pendiente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La reserva para eventos no identificados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Cómo se calcula la variación del cronograma?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'VG − VP.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'VG − CR.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'VG ÷ VP.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'VG ÷ CR.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: '¿Qué indica un índice de desempeño menor que 1?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Desempeño conforme a lo planificado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Desempeño inferior al previsto.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ausencia de línea base.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aprobación automática de cambios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: '¿Cuándo debe actualizarse una línea base?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ante cualquier desviación detectada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo mediante un cambio formalmente aprobado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Cada vez que se registra avance.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Antes de calcular el costo real.',
              esCorrecta: false,
            },
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
