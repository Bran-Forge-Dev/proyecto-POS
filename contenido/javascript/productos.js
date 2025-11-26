// Productos desde localStorage
let listaProductos = JSON.parse(localStorage.getItem("productos")) || [];

// Mostrar productos en la tabla
function actualizarTablaProductos() {
    const listaProductos = JSON.parse(localStorage.getItem("productos")) || [];
    const tbody = document.getElementById("tbodyProductos");
    if (!tbody) return;

    // Limpiar filas excepto la primera fila
    const plantilla = tbody.querySelector("tr");
    tbody.innerHTML = "";

    listaProductos.forEach((producto) => {
        // Clonar la fila
        const fila = plantilla.cloneNode(true);

        // Rellenar únicamente los datos de las celdas
        fila.cells[0].textContent = producto.codigo;
        fila.cells[1].textContent = producto.descripcion;
        fila.cells[2].textContent = producto.precioCosto;
        fila.cells[3].textContent = producto.precioVenta;
        fila.cells[4].textContent = producto.precioMayoreo;
        fila.cells[5].textContent = producto.cantidad;

        // Agregar la fila al tbody tabla
        tbody.appendChild(fila);
    });
}

// Ejecutar al cargar la página
document.addEventListener("DOMContentLoaded", actualizarTablaProductos);
