<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NeoVenta - Iniciar sesión</title>
  <link href="/contenido/css/estilo/login.css" rel="stylesheet" />
  <link href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css" rel="stylesheet" />

</head>
<body>
  <div class="background"></div>

  <div class="login-container">
    <h2>Iniciar sesión</h2>
    <p>Inicie sesión ingresando su número de usuario y contraseña.</p>

    <form>
      <label for="usuario">Número de usuario</label>
      <div class="input-group">
          <i class="las la-user"></i>
        <!--<span class="icon">👤</span>-->
        <input type="text" id="usuario" placeholder="  No. usuario" required>
      </div>

      <label for="password">Password</label>
      <div class="input-group">
          <i class="las la-lock"></i>
        <!--<span class="icon">🔒</span>-->
        <input type="password" id="password" placeholder="  ********" required>
      </div>

      <button type="button" id="btnlogin">Iniciar sesión</button>
    </form>

    <h3 class="logo">NeoVenta</h3>
  </div>

    <script src="/contenido/javascript/script.js"></script>
</body>
</html>
