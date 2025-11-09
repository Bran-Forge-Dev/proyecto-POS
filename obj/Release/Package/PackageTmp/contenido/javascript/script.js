/*document.getElementById("btnlogin").addEventListener("click", function () {
    // Validación de usuario
    const usuario = document.getElementById("usuario").value.trim();
    const password = document.getElementById("password").value.trim();

    if (usuario === "admin" && password === "1234") {
        window.location.href = "vista/wfMenu.aspx"; // redirige al menú principal
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
});*/

<script>
    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("btnlogin").addEventListener("click", function () {
            const usuario = document.getElementById("usuario").value.trim();
            const password = document.getElementById("password").value.trim();

            if (usuario === "admin" && password === "1234") {
                window.location.href = "http://kuraishi-001-site1.stempurl.com/vista/wfMenu.aspx";
            } else {
                alert("Usuario o contraseña incorrectos.");
            }
        });
});
</script>

