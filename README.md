# TODO Angular (16)

## Descripción

La aplicación "Todo 16" es una herramienta de gestión de tareas que permite a los usuarios crear, visualizar, filtrar y gestionar tareas. Las tareas pueden tener diferentes prioridades (baja, media, alta) y pueden estar asociadas a diferentes personas con habilidades específicas. La aplicación también permite marcar tareas como completadas o pendientes.

## Funcionalidades Principales

- **Crear Tareas**: Los usuarios pueden crear nuevas tareas proporcionando un título, fecha límite, prioridad y personas asociadas.
- **Visualizar Tareas**: Las tareas se muestran en una lista donde se pueden ver detalles como el título, fecha límite y prioridad.
- **Filtrar Tareas**: Los usuarios pueden filtrar las tareas para ver todas, solo las completadas o solo las pendientes.
- **Gestionar Tareas**: Los usuarios pueden marcar tareas como completadas o pendientes, y también pueden eliminar tareas.

## Tecnologías Utilizadas

- **Angular**: Framework principal para la construcción de la aplicación.
- **Angular Material**: Biblioteca de componentes de UI para Angular.
- **RxJS**: Biblioteca para programación reactiva.
- **ngx-toastr**: Biblioteca para mostrar notificaciones.

## Ejecución de la Aplicación

Para ejecutar la aplicación localmente, sigue los siguientes pasos:

1. **Clonar el repositorio**:

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd <NOMBRE_DEL_REPOSITORIO>
   ```

2. **Instalar dependencias**:

   ```bash
   npm install
   ```

3. **Ejecutar la aplicación**:

   ```bash
   ng serve
   ```

4. **Abrir en el navegador**:
   Abre tu navegador y navega a `http://localhost:4200`.

## Estructura del Proyecto

- **app-routing.module.ts**: Configuración de las rutas de la aplicación.
- **app.module.ts**: Módulo principal de la aplicación.
- **home.component.ts**: Componente principal que muestra la lista de tareas.
- **new-task-dialog.component.ts**: Componente de diálogo para crear nuevas tareas.
- **todo.service.ts**: Servicio para gestionar las tareas (añadir, eliminar, actualizar).
- **filter-status.pipe.ts**: Pipe para filtrar tareas según su estado (todas, completadas, pendientes).
- **priority-name.pipe.ts**: Pipe para mostrar el nombre de la prioridad de una tarea.
- **Interfaces**: Definiciones de interfaces para tareas, personas y habilidades.

## Notas Adicionales

- La aplicación está configurada para usar el idioma español (`es`).
- Las tareas se gestionan en memoria utilizando un `BehaviorSubject`.
- Tiempo aproximado de desarrollo: 6 horas.
