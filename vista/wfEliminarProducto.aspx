<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="wfEliminarProducto.aspx.cs" Inherits="POS.vista.wfEliminarProducto" %>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
  <meta charset="utf-8"/>
  <title>NeoVenta - Eliminar Producto</title>
  <link href="/contenido/css/estilo/editar-eliminar-usuarios.css" rel="stylesheet" />
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

  <!-- Titulo -->
  <h2 class="titulo">Eliminar Producto</h2>

  <!-- Formulario -->
  <div class="form-contenedor">
    <form id="formProducto">
      <div class="fila">
        <label>Código</label>
        <input type="text" id="codigo" disabled />
      </div>
      <div class="fila">
        <label>Descripción</label>
        <input type="text" id="descripcion" disabled />
      </div>
      <div class="fila-doble">
        <div class="sub-fila">
          <label>Precio Costo</label>
          <input type="number" id="precioCosto" disabled />
        </div>
        <div class="sub-fila">
          <label>Precio Venta</label>
          <input type="number" id="precioVenta" disabled />
        </div>
      </div>
      <div class="fila-doble">
        <div class="sub-fila">
          <label>Precio Mayoreo</label>
          <input type="number" id="precioMayoreo" disabled />
        </div>
        <div class="sub-fila">
          <label>Cantidad</label>
          <input type="number" id="cantidad" disabled />
        </div>
      </div>
    </form>
  </div>

  <!-- Botones -->
  <div class="botones">
    <button type="button" class="btn-guardar" onclick="confirmarEliminacion()">Eliminar</button>
    <button class="btn-cancelar" onclick="window.location.href='wfProductos.aspx'">Cancelar</button>
  </div>

  <script src="/contenido/javascript/eliminarproducto.js"></script>

</body>
</html>
