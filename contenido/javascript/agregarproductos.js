// Productos en memoria y almacenamiento local en cache
let listaProductos = JSON.parse(localStorage.getItem("productos")) || [];

// Guardar producto desde el formulario
document.getElementById("formProducto")?.addEventListener("submit", function (event) {
    event.preventDefault();

    const codigo = document.getElementById("codigo").value.trim();
    const descripcion = document.getElementById("descripcion").value.trim();
    const precioCosto = document.getElementById("precioCosto").value.trim();
    const precioVenta = document.getElementById("precioVenta").value.trim();
    const precioMayoreo = document.getElementById("precioMayoreo").value.trim();
    const cantidad = document.getElementById("cantidad").value.trim();
    const minimo = document.getElementById("minimo").value.trim();

    if (!codigo || !descripcion) {
        alert("Por favor ingresa el código y la descripción.");
        return;
    }

    // Evitar duplicados
    const existeCodigo = listaProductos.some(p =>
        p.codigo.toLowerCase() === codigo.toLowerCase()
    );

    if (existeCodigo) {
        alert("Ya existe un producto con ese código.");
        return;
    }

    const n = v => isNaN(parseFloat(v)) ? 0 : parseFloat(v);

    const nuevoProducto = {
        codigo,
        descripcion,
        precioCosto: n(precioCosto).toFixed(2),
        precioVenta: n(precioVenta).toFixed(2),
        precioMayoreo: n(precioMayoreo).toFixed(2),
        cantidad: n(cantidad).toFixed(2),
        minimo: n(minimo).toFixed(2)
    };

    listaProductos.push(nuevoProducto);
    localStorage.setItem("productos", JSON.stringify(listaProductos));

    // Limpia el formulario
    this.reset();

    // Aactualiza la tabla en la página de productos
    if (window.opener && typeof window.opener.actualizarTablaProductos === "function") {
        window.opener.listaProductos = listaProductos;
        window.opener.actualizarTablaProductos();
    }

    alert("Producto guardado correctamente.");
});


// Actualizar tabla de productos
function actualizarTablaProductos() {
    const listaProductos = JSON.parse(localStorage.getItem("productos")) || [];
    const tbody = document.getElementById("tbodyProductos");
    if (!tbody) return;
    tbody.innerHTML = "";

    listaProductos.forEach((producto, index) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${producto.codigo}</td>
            <td>${producto.descripcion}</td>
            <td>${producto.precioCosto}</td>
            <td>${producto.precioVenta}</td>
            <td>${producto.precioMayoreo}</td>
            <td>${producto.cantidad}</td>
            <td class="col-icono">
                <a href="wfEliminarProducto.aspx?index=${index}">
                    <i class="las la-trash-alt icono-tabla"></i>
                </a>
            </td>
            <td class="col-icono">
                <a href="wfEditarProducto.aspx?index=${index}">
                    <i class="las la-edit icono-tabla"></i>
                </a>
            </td>
        `;
        tbody.appendChild(fila);
    });
}

document.addEventListener("DOMContentLoaded", actualizarTablaProductos);
