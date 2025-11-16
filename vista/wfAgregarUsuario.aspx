<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="wfAgregarUsuario.aspx.cs" Inherits="POS.vista.wfAgregarUsuario" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta charset="utf-8"/>
<title>NeoVenta - Agregar Usuario</title>
<link href="/contenido/css/estilo/agregar-usuario.css" rel="stylesheet" />
<link href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css" rel="stylesheet" />
</head>
<body>
    <!-- ENCABEZADO -->
    <header class="encabezado">
        <a href="wfControlUsuarios.aspx" class="btn-regresar">
            <i class="las la-arrow-left"></i>
        </a>
        <h1 class="logo">NeoVenta</h1>
    </header>

    <!-- TÍTULO -->
    <h2 class="titulo">Agregar Usuario</h2>

    <!-- FORMULARIO -->
    <div class="form-contenedor">
        <form id="formUsuario">
            <div class="fila">
                <label>Cuenta</label>
                <input type="text" id="cuenta" />
            </div>
            <div class="fila">
                <label>Clave</label>
                <input type="password" id="clave" />
            </div>
            <div class="fila">
                <label>Rol</label>
                <input type="text" id="rol" />
            </div>
            <div class="fila-doble">
                <div class="sub-fila">
                    <label>Teléfono</label>
                    <input type="text" id="telefono" />
                </div>
                <div class="sub-fila">
                    <label>Fecha de Nacimiento</label>
                    <input type="date" id="fecha" />
                </div>
            </div>
            <div class="fila">
                <label>Correo</label>
                <input type="email" id="correo" />
            </div>
            <div class="botones">
                <button type="submit" class="btn-guardar">Guardar</button>
                <button type="button" class="btn-cancelar" onclick="window.location.href='wfControlUsuarios.aspx'">Cancelar</button>
            </div>
        </form>
    </div>

    <script src="/contenido/javascript/agregarusuario.js"></script>
</body>
</html>
