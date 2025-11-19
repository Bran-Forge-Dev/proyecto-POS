// Array de usuarios en memoria
let listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

// Función para actualizar la tabla
function actualizarTablaUsuarios() {
    const tbody = document.getElementById("tbodyUsuarios");
    tbody.innerHTML = "";

    listaUsuarios.forEach((usuario, index) => {
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${usuario.cuenta}</td>
            <td>${usuario.rol}</td>
            <td>${usuario.telefono}</td>
            <td>${usuario.correo}</td>
            <td class="col-icono">
                <a href="wfEliminarUsuario.aspx?index=${index}">
                    <i class="las la-trash-alt icono-tabla"></i>
                </a>
            </td>
            <td class="col-icono">
                <a href="wfEditarUsuario.aspx?index=${index}">
                    <i class="las la-edit icono-tabla"></i>
                </a>
            </td>
        `;

        tbody.appendChild(fila);
    });

    console.log("Usuarios mostrados en tabla:", listaUsuarios);
}

// Función para eliminar usuario desde JS
function eliminarUsuario(index) {
    if (confirm("¿Deseas eliminar este usuario?")) {
        listaUsuarios.splice(index, 1);
        localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));
        actualizarTablaUsuarios();
    }
}

// Función para editar usuario desde JS
function editarUsuario(index) {
    const usuario = listaUsuarios[index];
    const nuevaCuenta = prompt("Editar cuenta:", usuario.cuenta);
    const nuevoRol = prompt("Editar rol:", usuario.rol);
    const nuevoTelefono = prompt("Editar teléfono:", usuario.telefono);
    const nuevoCorreo = prompt("Editar correo:", usuario.correo);

    if (nuevaCuenta && nuevoRol && nuevoTelefono && nuevoCorreo) {
        listaUsuarios[index] = {
            ...usuario,
            cuenta: nuevaCuenta,
            rol: nuevoRol,
            telefono: nuevoTelefono,
            correo: nuevoCorreo
        };

        localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));
        actualizarTablaUsuarios();
    }
}

// Ejecutar al cargar la página
window.addEventListener("DOMContentLoaded", () => {
    actualizarTablaUsuarios();
});
