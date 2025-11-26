<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="wfProductos.aspx.cs" Inherits="POS.vista.wfProductos" %>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NeoVenta - Productos</title>
    <link href="/contenido/css/estilo/productos.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/line-awesome/1.3.0/line-awesome/css/line-awesome.min.css">
</head>
<body>

<form id="form1" runat="server">

    <!-- Encabezado -->
    <header class="encabezado">
        <a href="wfCatalogos.aspx" class="btn-regresar">
            <i class="las la-arrow-left"></i>
        </a>

        <h1 class="logo">NeoVenta</h1>
    </header>

    <!-- Titulo-->
    <h2 class="titulo">Productos</h2>

    <!-- Botón agregar-->
    <div class="contenedor-agregar">
        <a href="wfAgregarProducto.aspx" class="btn-agregar">
            <i class="las la-plus-square"></i>
            Agregar
        </a>
    </div>

    <!-- Tabla -->
    <div class="tabla-scroll">
        <table class="tabla-productos">
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Descripción</th>
                    <th>Precio costo</th>
                    <th>Precio venta</th>
                    <th>Precio mayoreo</th>
                    <th>Cantidad</th>
                    <th>Eliminar</th>
                    <th>Editar</th>
                </tr>
            </thead>

            <tbody id="tbodyProductos">
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="col-icono">
                        <a href="wfEliminarProducto.aspx?index=0">
                            <i class="las la-trash-alt icono-tabla"></i>
                        </a>
                    </td>
                    <td class="col-icono">
                        <a href="wfEditarProducto.aspx?index=0">
                            <i class="las la-edit icono-tabla"></i>
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <script src="/contenido/javascript/productos.js"></script>

</form>

</body>
</html>
