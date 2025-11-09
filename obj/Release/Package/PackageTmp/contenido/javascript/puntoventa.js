document.addEventListener("DOMContentLoaded", function () {

    // 📦 Productos por defecto
    const productos = [
        { codigo: "1001", descripcion: "Coca-Cola 600ml", precio: 18.00, existencia: 25 },
        { codigo: "1002", descripcion: "Galletas Oreo", precio: 14.50, existencia: 10 },
        { codigo: "1003", descripcion: "Sabritas 45g", precio: 12.00, existencia: 15 },
        { codigo: "1004", descripcion: "Agua Bonafont 1L", precio: 13.00, existencia: 20 },
        { codigo: "1005", descripcion: "Pan Bimbo Grande", precio: 42.00, existencia: 8 }
    ];

    // 🔍 Elementos del DOM
    const btnAgregar = document.querySelector(".btn-agregar");
    const inputCodigo = document.getElementById("codigo");
    const tbody = document.querySelector(".tabla tbody");
    const totalElemento = document.getElementById("total");

    // 🧮 Función para recalcular el total
    function actualizarTotal() {
        let total = 0;
        [...tbody.rows].forEach(row => {
            const importeTexto = row.cells[4].textContent.replace("$", "").trim();
            total += parseFloat(importeTexto);
        });
        totalElemento.innerHTML = `<span>Total:</span><br/>$${total.toFixed(2)}`;
    }

    // ➕ Agregar producto al hacer clic
    btnAgregar.addEventListener("click", function () {
        const codigo = inputCodigo.value.trim();
        const producto = productos.find(p => p.codigo === codigo);

        if (!producto) {
            alert("⚠️ Producto no encontrado");
            return;
        }

        // Si el producto ya existe, aumenta cantidad
        const filaExistente = [...tbody.rows].find(row => row.cells[0].textContent === codigo);
        if (filaExistente) {
            const cantidadCell = filaExistente.cells[3];
            const importeCell = filaExistente.cells[4];
            let cantidad = parseInt(cantidadCell.textContent) + 1;
            cantidadCell.textContent = cantidad;
            importeCell.textContent = `$${(producto.precio * cantidad).toFixed(2)}`;
        } else {
            // Crear nueva fila
            const fila = document.createElement("tr");
            fila.innerHTML = `
                <td>${producto.codigo}</td>
                <td>${producto.descripcion}</td>
                <td>$${producto.precio.toFixed(2)}</td>
                <td>1</td>
                <td>$${producto.precio.toFixed(2)}</td>
                <td>${producto.existencia}</td>
            `;
            tbody.appendChild(fila);
        }

        // 🔄 Actualizar total
        actualizarTotal();

        inputCodigo.value = "";
        inputCodigo.focus();
    });

});
