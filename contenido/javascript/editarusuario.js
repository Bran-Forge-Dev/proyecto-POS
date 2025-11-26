// Lista de roles disponibles
const rolesDisponibles = [
    "Administrador",
    "Vendedor",
    "Cliente"
];

// Cargar roles en el <select>
function cargarRoles() {
    const selectRol = document.getElementById("rol");
    selectRol.innerHTML = "";

    rolesDisponibles.forEach(rol => {
        const opcion = document.createElement("option");
        opcion.value = rol;
        opcion.textContent = rol;
        selectRol.appendChild(opcion);
    });
}

// Obtener el index
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

    // Rellenar campos
    document.getElementById("cuenta").value = usuarios[index].cuenta;
    document.getElementById("clave").value = usuarios[index].clave;

    // Primero se cargan los roles, luego seleccionamos el que tiene el usuario
    cargarRoles();
    document.getElementById("rol").value = usuarios[index].rol;

    document.getElementById("telefono").value = usuarios[index].telefono;
    document.getElementById("fecha").value = usuarios[index].fecha;
    document.getElementById("correo").value = usuarios[index].correo;
}

// Guardar cambios
function guardarUsuarioEditado(e) {
    e.preventDefault();

    const index = obtenerIndex();
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    if (!usuarios[index]) {
        alert("Error al guardar. Usuario no encontrado.");
        return;
    }

    // Actualizar datos
    usuarios[index] = {
        cuenta: document.getElementById("cuenta").value,
        clave: document.getElementById("clave").value,
        rol: document.getElementById("rol").value,
        telefono: document.getElementById("telefono").value,
        fecha: document.getElementById("fecha").value,
        correo: document.getElementById("correo").value
    };

    // Guardar en localStorage
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    // Regresar
    window.location.href = "wfControlUsuarios.aspx";
}

// Ejecutar carga al inicio
window.onload = cargarDatosUsuario;
