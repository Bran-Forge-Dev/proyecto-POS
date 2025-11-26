<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="wfAgregarProducto.aspx.cs" Inherits="POS.vista.wfAgregarProducto" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta charset="utf-8"/>
<title>NeoVenta - Agregar Producto</title>
<link href="/contenido/css/estilo/agregar-usuario.css" rel="stylesheet" />
<link href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css" rel="stylesheet" />
</head>
<body>
    <!-- Encabezado -->
    <header class="encabezado">
        <a href="wfProductos.aspx" class="btn-regresar">
            <i class="las la-arrow-left"></i>
        </a>
        <h1 class="logo">NeoVenta</h1>
    </header>

    <!-- Título -->
    <h2 class="titulo">Agregar Producto</h2>

    <!-- Formulario -->
    <div class="form-contenedor caja">
        <form id="formProducto">
            <div class="fila">
                <label>Código del Producto:</label>
                <input type="text" id="codigo" />
            </div>

            <div class="fila">
                <label>Descripción:</label>
                <input type="text" id="descripcion" />
            </div>

            <div class="fila-doble">
                <div class="sub-fila">
                    <label>Precio costo:</label>
                    <input type="number" id="precioCosto" step="0.01" min="0" />
                </div>

                <div class="sub-fila">
                    <label>Precio venta:</label>
                    <input type="number" id="precioVenta" step="0.01" min="0" />
                </div>
            </div>

            <div class="fila-doble">
                <div class="sub-fila">
                    <label>Precio mayoreo:</label>
                    <input type="number" id="precioMayoreo" step="0.01" min="0" />
                </div>

                <div class="sub-fila">
                    <label>Cantidad actual:</label>
                    <input type="number" id="cantidad" step="1" min="0" />
                </div>
            </div>

            <div class="fila">
                <label>Mínimo:</label>
                <input type="number" id="minimo" step="0.01" min="0" />
            </div>

            <div class="botones" style="justify-content: flex-end; gap: 18px; margin-top: 30px;">
                <button type="submit" class="btn-guardar">Guardar</button>
                <button type="button" class="btn-cancelar" onclick="window.location.href='wfProductos.aspx'">Cancelar</button>
            </div>
        </form>
    </div>

    <script src="/contenido/javascript/agregarproductos.js"></script>
</body>
</html>
