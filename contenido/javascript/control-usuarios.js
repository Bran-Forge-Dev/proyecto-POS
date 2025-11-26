// Usuarios y persistencia desde localStorage
let listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

// Mostrar usuarios en la tabla
function actualizarTablaUsuarios() {
    const tbody = document.getElementById("tbodyUsuarios");
    if (!tbody) return;

    // Tomamos la primer fila
    const plantilla = tbody.querySelector("tr");
    if (!plantilla) return;

    tbody.innerHTML = ""; // Limpiar tabla

    listaUsuarios.forEach((usuario) => {
        // Clonar la primer fila
        const fila = plantilla.cloneNode(true);

        // Rellenar solamente los datos de las celdas
        fila.cells[0].textContent = usuario.cuenta;
        fila.cells[1].textContent = usuario.rol;
        fila.cells[2].textContent = usuario.telefono;
        fila.cells[3].textContent = usuario.correo;

        // Agregar fila al tbody (tabla)
        tbody.appendChild(fila);
    });
}

// Ejecutar al cargar la página
document.addEventListener("DOMContentLoaded", actualizarTablaUsuarios);
