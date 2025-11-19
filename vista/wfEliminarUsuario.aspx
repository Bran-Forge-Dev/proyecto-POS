<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="wfEliminarUsuario.aspx.cs" Inherits="POS.vista.wfEliminarUsuario" %>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
  <meta charset="utf-8"/>
  <title>NeoVenta - Eliminar Usuario</title>
  <link href="/contenido/css/estilo/editar-eliminar-usuarios.css" rel="stylesheet" />
  <link href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css" rel="stylesheet" />
</head>
<body>
  <!-- Encabezado -->
  <header class="encabezado">
    <a href="wfControlUsuarios.aspx" class="btn-regresar">
      <i class="las la-arrow-left"></i>
    </a>
    <h1 class="logo">NeoVenta</h1>
  </header>

  <!-- Titulo -->
  <h2 class="titulo">Eliminar Usuario</h2>

  <!-- Formulario -->
  <div class="form-contenedor">
    <form id="formUsuario">
      <div class="fila">
        <label>Cuenta</label>
        <input type="text" id="cuenta" disabled />
      </div>
      <div class="fila">
        <label>Clave</label>
        <input type="password" id="clave" disabled />
      </div>
      <div class="fila">
        <label>Rol</label>
        <input type="text" id="rol" disabled />
      </div>
      <div class="fila-doble">
        <div class="sub-fila">
          <label>Teléfono</label>
          <input type="text" id="telefono" disabled />
        </div>
        <div class="sub-fila">
          <label>Fecha de Nacimiento</label>
          <input type="date" id="fecha" disabled />
        </div>
      </div>
      <div class="fila">
        <label>Correo</label>
        <input type="email" id="correo" disabled />
      </div>
    </form>
  </div>

  <!-- Botones -->
  <div class="botones">
    <button type="button" class="btn-guardar" onclick="confirmarEliminacion()">Eliminar</button>
    <button class="btn-cancelar" onclick="window.location.href='wfControlUsuarios.aspx'">Cancelar</button>
  </div>

    <script src="/contenido/javascript/eliminarusuario.js"></script>
</body>
</html>
