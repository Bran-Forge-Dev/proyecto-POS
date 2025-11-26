// Productos desde localStorage
let listaProductos = JSON.parse(localStorage.getItem("productos")) || [];

// Obtener index del producto para eliminar el producto seleccionado
function obtenerIndex() {
    const params = new URLSearchParams(window.location.search);
    const indexParam = params.get("index");
    if (indexParam === null) return -1;
    const index = parseInt(indexParam, 10);
    return isNaN(index) ? -1 : index;
}

// Cargar datos del producto en los campos, no editables, solo visualizar
function cargarDatosProducto() {
    const index = obtenerIndex();

    if (index < 0 || index >= listaProductos.length) {
        alert("Producto no encontrado o índice inválido.");
        window.location.href = "wfProductos.aspx";
        return;
    }

    const producto = listaProductos[index];

    document.getElementById("codigo").value = producto.codigo || "";
    document.getElementById("descripcion").value = producto.descripcion || "";
    document.getElementById("precioCosto").value = producto.precioCosto !== undefined ? producto.precioCosto : "";
    document.getElementById("precioVenta").value = producto.precioVenta !== undefined ? producto.precioVenta : "";
    document.getElementById("precioMayoreo").value = producto.precioMayoreo !== undefined ? producto.precioMayoreo : "";
    document.getElementById("cantidad").value = producto.cantidad !== undefined ? producto.cantidad : "";
}

// Confirmar y eliminar producto con un alert
function confirmarEliminacion() {
    const index = obtenerIndex();

    if (index < 0 || index >= listaProductos.length) {
        alert("Producto no encontrado.");
        window.location.href = "wfProductos.aspx";
        return;
    }

    if (confirm("¿Deseas eliminar este producto?")) {
        listaProductos.splice(index, 1);
        localStorage.setItem("productos", JSON.stringify(listaProductos));
        window.location.href = "wfProductos.aspx";
    }
}

// Ejecutar al cargar la página
window.addEventListener("DOMContentLoaded", cargarDatosProducto);
