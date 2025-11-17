// Obtener parámetro "index" desde la URL
function obtenerIndex() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get("index"));
}

// Cargar datos del usuario al abrir la página
function cargarDatosUsuario() {
    const index = obtenerIndex();
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    if (!usuarios[index]) {
        alert("Usuario no encontrado.");
        window.location.href = "wfControlUsuarios.aspx";
        return;
    }

    // Llenar inputs (están deshabilitados)
    document.getElementById("cuenta").value = usuarios[index].cuenta;
    document.getElementById("clave").value = usuarios[index].clave;
    document.getElementById("rol").value = usuarios[index].rol;
    document.getElementById("telefono").value = usuarios[index].telefono;
    document.getElementById("fecha").value = usuarios[index].fecha;
    document.getElementById("correo").value = usuarios[index].correo;
}

// Confirmar y eliminar
function confirmarEliminacion() {
    const index = obtenerIndex();
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    if (!usuarios[index]) {
        alert("Error al eliminar. Usuario no encontrado.");
        return;
    }

    if (!confirm("¿Seguro que deseas eliminar este usuario?")) {
        return;
    }

    // Eliminar el usuario por su índice
    usuarios.splice(index, 1);

    // Guardar cambios en localStorage
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    // Regresar al control de usuarios
    window.location.href = "wfControlUsuarios.aspx";
}

// Ejecutar carga al entrar
window.onload = cargarDatosUsuario;
