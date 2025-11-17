🛒 NeoVenta – Sistema de Login y Gestión de Usuarios

Proyecto Web con JavaScript, HTML y CSS | Versión LocalStorage

NeoVenta es un sistema web diseñado para administrar usuarios y proporcionar un acceso seguro mediante un sistema de inicio de sesión.
Esta versión utiliza LocalStorage para almacenar usuarios de forma local, ideal para proyectos académicos, portafolios y demostraciones.

En una segunda versión, podrás escalarlo a Base de Datos real para un sistema más robusto y comercial.

🚀 Características principales
🔐 Sistema de Login

Validación de usuario y contraseña desde LocalStorage.

Manejo de errores (usuario no encontrado, contraseña incorrecta).

Redirección al menú principal al iniciar sesión correctamente.

Interfaz limpia, moderna y responsiva.

👥 Gestión de Usuarios

Registro de nuevos usuarios.

Almacenamiento en LocalStorage como una lista estructurada.

Visualización de usuarios en tabla dinámica.

Eliminación y edición (opcional en versiones futuras).

🧪 Modo Demo (admin fijo)

Incluye acceso rápido:

Usuario: admin  
Contraseña: 1234

🗂 Tecnologías utilizadas

HTML5 – Estructura principal

CSS3 – Diseño responsivo y moderno

JavaScript – Manejo de lógica, validaciones y almacenamiento

LocalStorage – Persistencia ligera en el navegador

📁 Estructura del proyecto
/contenido
   /css
     /estilo
        └── agregar-usuarios.css
        └── catalogos.css
        └── control-usuarios.css
        └── editar-eliminar-usuarios.css
        └── line-awesome.css
        └── login.css
        └── menu.css
        └── punto_venta.css
        └── venta.css
   /imagenes
        └── fondo.jog
   /javascript
        └── agregarusuario.js
        └── control-usuarios.js
        └── editarusuario.js
        └── eliminarusuario.js
        └── menu.js
        └── puntoevento.js
        └── script.js
/vista
    └── wfAgregarUsuario.aspx
    └── wfCatalogos.aspx
    └── wfControlUsuarios.aspx
    └── wfEditarUsuario.aspx
    └── wfEliminarUsuario.aspx
    └── wfMenu.aspx
    └── wfPuntodeVenta.aspx
    └── wfVentas.aspx
Default.aspx (pantalla principal)
        
README.md

▶️ Cómo ejecutar el proyecto

Descarga o clona el repositorio:

git clone https://github.com/Bran-Forge-Dev/proyecto-POS.git



Abre el archivo:

Default.aspx


Listo. El sistema funcionará directamente en el navegador (no requiere servidor).

🧩 Funciones principales en código
✔ Validación desde LocalStorage

Se obtienen los usuarios almacenados.

Se muestra error si los campos no estan completos.

Se redirige al sistema si es correcto.

✔ Limpieza automática de campos

Los inputs se vacían tras un error.

El foco regresa al campo de usuario.

🔧 Próximas mejoras (roadmap)

Migración a SQL Server / MySQL para versión profesional.

Implementar API REST para login seguro.

Hashing de contraseñas.

Roles y permisos.

Módulo completo de inventario y ventas para NeoVenta.

🎓 Propósito del proyecto

Este proyecto fue creado para:

Portafolio profesional

Presentación académica

Demostración funcional sin backend

Base para una futura versión comercial

📄 Licencia

Este proyecto se distribuye bajo licencia MIT.
Puedes usarlo, modificarlo y extenderlo libremente.

🧑‍💻 Autor

Desarrollado por [Brandon Salinas]
Estudiante de Tecnologías de la Información | Desarrollador en formación
