// Productos desde localStorage
let listaProductos = JSON.parse(localStorage.getItem("productos")) || [];

// Obtener index del producto para editar información
function obtenerIndex() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get("index"));
}

// Cargar datos del producto en los campos
function cargarDatosProducto() {
    const index = obtenerIndex();
    const producto = listaProductos[index];

    if (!producto) {
        alert("Producto no encontrado.");
        window.location.href = "wfProductos.aspx";
        return;
    }

    document.getElementById("codigo").value = producto.codigo;
    document.getElementById("descripcion").value = producto.descripcion;
    document.getElementById("precioCosto").value = producto.precioCosto;
    document.getElementById("precioVenta").value = producto.precioVenta;
    document.getElementById("precioMayoreo").value = producto.precioMayoreo;
    document.getElementById("cantidad").value = producto.cantidad;
    document.getElementById("minimo").value = producto.minimo;
}

// Guardar cambios en el producto
function guardarProductoEditado(e) {
    e.preventDefault();
    const index = obtenerIndex();
    if (!listaProductos[index]) {
        alert("Error al guardar. Producto no encontrado.");
        return;
    }

    listaProductos[index] = {
        codigo: document.getElementById("codigo").value,
        descripcion: document.getElementById("descripcion").value,
        precioCosto: parseFloat(document.getElementById("precioCosto").value),
        precioVenta: parseFloat(document.getElementById("precioVenta").value),
        precioMayoreo: parseFloat(document.getElementById("precioMayoreo").value),
        cantidad: parseInt(document.getElementById("cantidad").value),
        minimo: parseFloat(document.getElementById("minimo").value)
    };

    localStorage.setItem("productos", JSON.stringify(listaProductos));
    window.location.href = "wfProductos.aspx";
}

// Ejecutar al cargar la página
window.addEventListener("DOMContentLoaded", cargarDatosProducto);
