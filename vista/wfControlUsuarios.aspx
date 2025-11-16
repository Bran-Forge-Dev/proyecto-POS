<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NeoVenta - Control de usuarios</title>
    <link href="/contenido/css/estilo/control-usuarios.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/line-awesome/1.3.0/line-awesome/css/line-awesome.min.css">
</head>
<body>

    <!-- ENCABEZADO -->
    <header class="encabezado">
        <a href="wfCatalogos.aspx" class="btn-regresar">
            <i class="las la-arrow-left"></i>
        </a>

        <h1 class="logo">NeoVenta</h1>
    </header>

    <!-- TÍTULO PRINCIPAL -->
    <h2 class="titulo">Control de usuarios</h2>

    <!-- BOTÓN AGREGAR -->
    <div class="contenedor-agregar">
        <a href="wfAgregarUsuario.aspx" class="btn-agregar">
            <i class="las la-plus-square"></i>
            Agregar
        </a>
    </div>

    <!-- TABLA -->
    <div class="tabla-scroll">
        <table class="tabla-usuarios">
            <thead>
                <tr>
                    <th>Cuenta</th>
                    <th>Rol</th>
                    <th>Telefono</th>
                    <th>Correo</th>
                    <th>Eliminar</th>
                    <th>Editar</th>
                </tr>
            </thead>

            <tbody id="tbodyUsuarios">
                <!-- FILA VISUAL ÚNICA columas -->
                <tr>
                    <td></td><td></td><td></td><td></td>
                    <td class="col-icono">
                        <a href="wfEliminarUsuario.aspx?index=0">
                            <i class="las la-trash-alt icono-tabla"></i>
                        </a>
                    </td>
                    <td class="col-icono">
                        <a href="wfEditarUsuario.aspx?index=0">
                            <i class="las la-edit icono-tabla"></i>
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <script src="/contenido/javascript/control-usuarios.js"></script>
</body>
</html>
