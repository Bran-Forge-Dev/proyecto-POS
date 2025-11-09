<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="wfCatalogos.aspx.cs" Inherits="POS.vista.wfCatalogos" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<link href="/contenido/css/estilo/catalogos.css" rel="stylesheet" />
  <link href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css" rel="stylesheet" />


    <title>NeoVenta - Catálogos</title>
</head>
<body>
    <form id="form1" runat="server">
        <header>
        <h1>NeoVenta</h1>
    </header>
        <h2>Catálogos</h2>

    <main class="catalogos-container">
        <!-- Tarjeta Usuarios -->
        <div class="card">
            <div class="icon-circle">
                <i class="fas fa-user fa-2x"></i>
            </div>
            <p>Vista de los usuarios</p>
            <button class="btn-card">Usuarios</button>
        </div>

        <!-- Tarjeta Productos -->
        <div class="card">
            <div class="icon-circle">
                <i class="fas fa-shopping-cart fa-2x"></i>
            </div>
            <p>Dar alta/baja/editar productos<br>Visualización de productos</p>
            <button class="btn-card">Productos</button>
        </div>

        <!-- Tarjeta Proveedor -->
        <div class="card">
            <div class="icon-circle">
                <i class="fas fa-truck fa-2x"></i>
            </div>
            <p>Dar alta/baja/editar proveedores<br>Visualización de proveedores</p>
            <button class="btn-card">Proveedor</button>
        </div>
    </main>
    </form>
</body>
</html>
