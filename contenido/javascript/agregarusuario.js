// Array en memoria y guardado
let listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

// Lista de roles disponibles
const rolesDisponibles = [
    "Administrador",
    "Vendedor",
    "Cliente"
];

// Cargar roles en el combo box
function cargarRoles() {
    const selectRol = document.getElementById("rol");

    // Placeholder
    selectRol.innerHTML = `<option value="" disabled selected>Seleccione un rol</option>`;

    rolesDisponibles.forEach(rol => {
        const opcion = document.createElement("option");
        opcion.value = rol;
        opcion.textContent = rol;
        selectRol.appendChild(opcion);
    });
}

// Ejecutar al cargar la página
document.addEventListener("DOMContentLoaded", cargarRoles);

// Guardar usuario
document.getElementById("formUsuario").addEventListener("submit", function (event) {
    event.preventDefault();

    const cuenta = document.getElementById("cuenta").value.trim();
    const clave = document.getElementById("clave").value.trim();
    const rol = document.getElementById("rol").value;
    const telefono = document.getElementById("telefono").value.trim();
    const fecha = document.getElementById("fecha").value.trim();
    const correo = document.getElementById("correo").value.trim();

    if (rol === "") {
        alert("Por favor selecciona un rol.");
        return;
    }

    if (!cuenta || !clave || !rol || !telefono || !fecha || !correo) {
        alert("Por favor, llena todos los campos.");
        return;
    }

    // Verificar que no se duplique
    const existeCuenta = listaUsuarios.some(u => u.cuenta.toLowerCase() === cuenta.toLowerCase());
    const existeCorreo = listaUsuarios.some(u => u.correo.toLowerCase() === correo.toLowerCase());

    if (existeCuenta) {
        alert("La cuenta ya está registrada. Usa otro nombre de usuario.");
        return;
    }

    if (existeCorreo) {
        alert("El correo ya está registrado. Usa otro o verifica el existente.");
        return;
    }

    // Crear usuario nuevo
    const nuevoUsuario = { cuenta, clave, rol, telefono, fecha, correo };

    listaUsuarios.push(nuevoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));

    this.reset();

    if (window.opener && typeof window.opener.actualizarTablaUsuarios === "function") {
        window.opener.listaUsuarios = listaUsuarios;
        window.opener.actualizarTablaUsuarios();
    }

    alert("Usuario guardado correctamente.");
});
