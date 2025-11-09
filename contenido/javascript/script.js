document.getElementById("btnlogin").addEventListener("click", function () {
    // Validación
    const usuario = document.getElementById("usuario").value.trim();
    const password = document.getElementById("password").value.trim();

    if (usuario === "admin" && password === "1234") {
        window.location.href = "vista/wfMenu.aspx"; // redirige al menú principal
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
});


