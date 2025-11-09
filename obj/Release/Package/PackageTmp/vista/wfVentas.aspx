<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="wfVentas.aspx.cs" Inherits="POS.vista.wsVentas" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<link href="/contenido/css/estilo/ventas.css" rel="stylesheet" />
 <link href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css" rel="stylesheet" />

<title>NeoVenta - Ventas</title>
</head>
<body>
    <form id="form1" runat="server">
   <header class="encabezado">
    <a href="/Default.aspx" class="btn-regresar">
    <i class="las la-arrow-left"></i></a>
    <h1 class="titulo">NeoVenta</h1>
  </header>

  <main>
    <h2 class="subtitulo">Ventas</h2>

    <div class="contenedor-botones">
      <div class="card">
        <div class="icono">
          <i class="las la-shopping-cart"></i>
        </div>
        <a href="wfPuntodeVenta.aspx" class="btn-card">Punto de Venta</a>
        <!--<button class="boton">Punto venta</button>-->
      </div>

      <div class="card">
        <div class="icono">
          <i class="las la-lock-open"></i>
        </div>
        <a href="wfVentas.aspx" class="btn-card">Abrir corte</a>
        <!--<button class="boton">Abrir corte</button>-->
      </div>

      <div class="card">
        <div class="icono">
          <i class="las la-lock"></i>
        </div>
        <a href="wfVentas.aspx" class="btn-card">Cerrar corte</a>
        <!--<button class="boton">Cerrar corte</button>-->
      </div>
    </div>
  </main>
    </form>
</body>
</html>
