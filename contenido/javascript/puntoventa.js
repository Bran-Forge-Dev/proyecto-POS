document.addEventListener("DOMContentLoaded", function () {

    // ----------------------------------------
    // 1) Productos (tu lista original)
    // ----------------------------------------
    const productos = [
        { codigo: "1001", descripcion: "Coca-Cola 600ml", precio: 18.00, existencia: 25 },
        { codigo: "1002", descripcion: "Galletas Oreo", precio: 14.50, existencia: 10 },
        { codigo: "1003", descripcion: "Sabritas 45g", precio: 12.00, existencia: 15 },
        { codigo: "1004", descripcion: "Agua Bonafont 1L", precio: 13.00, existencia: 20 },
        { codigo: "1005", descripcion: "Pan Bimbo Grande", precio: 42.00, existencia: 8 }
    ];

    // ----------------------------------------
    // 2) Elementos del DOM (usamos los mismos de tu HTML)
    // ----------------------------------------
    const btnAgregar = document.querySelector(".btn-agregar");
    const inputCodigo = document.getElementById("codigo");
    const tbody = document.querySelector(".tabla tbody");
    const totalSpan = document.getElementById("total"); // <span id="total">Total:</span>
    const montoFinalDiv = document.querySelector(".monto-final"); // <div class="monto-final">
    const botonCobrar = document.querySelector(".btn.verde"); // tu botón Cobrar
    const productosCountP = document.querySelector(".acciones-izquierda p"); // el <p>0 Productos</p>

    // Los contenedores dentro de .totales que ya tienes en ese orden en tu HTML
    const pagoContainer = document.querySelector(".totales div:nth-child(2)");
    const cambioContainer = document.querySelector(".totales div:nth-child(3)");

    // ----------------------------------------
    // 3) Asegurar el input de "Pago con" (si ya existe, lo reutilizamos)
    // ----------------------------------------
    let inputPago = document.querySelector("#pagoCliente");
    if (!inputPago) {
        inputPago = document.createElement("input");
        inputPago.type = "number";
        inputPago.id = "pagoCliente";
        inputPago.min = "0";
        inputPago.placeholder = "0.00";
        inputPago.style.width = "80px";
        inputPago.style.textAlign = "right";

        pagoContainer.innerHTML = `<span>Págo con:</span><br/>`;
        pagoContainer.appendChild(inputPago);
    }

    // ----------------------------------------
    // 4) Crear span fijo para el cambio (solo lectura)
    // ----------------------------------------
    let cambioMonto = document.querySelector("#montoCambio");
    if (!cambioMonto) {
        cambioMonto = document.createElement("span");
        cambioMonto.id = "montoCambio";
        cambioMonto.textContent = "$0.00";
        cambioContainer.innerHTML = `<span>Cambio:</span><br/>`;
        cambioContainer.appendChild(cambioMonto);
    }

    // ----------------------------------------
    // 5) Lógica interna
    // ----------------------------------------
    let total = 0;

    function recalcularTotalesYUI() {
        total = 0;
        const filas = [...tbody.rows];
        filas.forEach(row => {
            const importeTexto = row.cells[4].textContent.replace("$", "").trim();
            const importe = parseFloat(importeTexto) || 0;
            total += importe;
        });

        totalSpan.innerHTML = `<span>Total:</span> $${total.toFixed(2)}`;
        montoFinalDiv.textContent = `$${total.toFixed(2)}`;
    }

    function actualizarContadorProductos() {
        const cantidadProductos = tbody.rows.length;
        productosCountP.textContent = `${cantidadProductos} Producto${cantidadProductos !== 1 ? 's' : ''}`;
    }

    // ----------------------------------------
    // 6) Agregar producto (usando tu array original)
    // ----------------------------------------
    btnAgregar.addEventListener("click", function () {
        const codigo = inputCodigo.value.trim();
        if (!codigo) {
            alert("Ingresa un código.");
            return;
        }

        const producto = productos.find(p => p.codigo === codigo);
        if (!producto) {
            alert("Producto no encontrado");
            inputCodigo.value = "";
            inputCodigo.focus();
            return;
        }

        // Si ya hay fila con ese código, aumentamos cantidad y actualizamos importe
        const filaExistente = [...tbody.rows].find(r => r.cells[0].textContent === codigo);
        if (filaExistente) {
            const cantidadCell = filaExistente.cells[3];
            const importeCell = filaExistente.cells[4];
            let cantidad = parseInt(cantidadCell.textContent, 10) + 1;
            cantidadCell.textContent = cantidad;
            importeCell.textContent = `$${(producto.precio * cantidad).toFixed(2)}`;
        } else {
            // Crear fila nueva exactamente con la estructura que tienes
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

        // Actualizar totales y UI
        recalcularTotalesYUI();
        actualizarContadorProductos();

        // limpiar input codigo y dejar foco
        inputCodigo.value = "";
        inputCodigo.focus();
    });

    // ----------------------------------------
    // 7) Cobrar: mostrar cambio en el span, alert "Compra realizada" y al aceptar borrar todo
    // ----------------------------------------
    botonCobrar.addEventListener("click", function (e) {
        e.preventDefault();

        // 1) recalcular totales por si hubo cambios recientes en la tabla
        recalcularTotalesYUI();

        // 2) tomar el total actualizado (la función actualiza la variable `total`)
        const totalActual = total || 0;

        // 3) leer el pago tal cual lo escribió el usuario
        const pagoVal = parseFloat(inputPago.value);

        // 4) validaciones claras
        if (totalActual === 0) {
            alert("No hay productos para cobrar.");
            return;
        }

        if (isNaN(pagoVal) || pagoVal <= 0) {
            alert("Ingrese un monto válido en 'Págo con'.");
            return;
        }

        if (pagoVal < totalActual) {
            alert(`El pago es insuficiente. Faltan $${(totalActual - pagoVal).toFixed(2)}.`);
            return;
        }

        // 5) calcular y mostrar el cambio en el span fijo (no editable)
        const cambioTotal = pagoVal - totalActual;
        cambioMonto.textContent = `$${cambioTotal.toFixed(2)}`;

        // 6) mostrar el cambio y luego la alerta (con pequeña espera para refrescar el DOM)
        setTimeout(() => {
            alert("Compra realizada");

            // 7) al aceptar (alert es sincrónico), limpiar todo
            tbody.innerHTML = "";
            total = 0;
            totalSpan.innerHTML = `<span>Total:</span><br/>$0.00`;
            montoFinalDiv.textContent = "$0.00";
            cambioMonto.textContent = "$0.00";
            inputPago.value = "";
            actualizarContadorProductos();
            inputCodigo.focus();
        }, 100); // 100 ms para que se alcance a ver el cambio antes del alert
    });

    // ----------------------------------------
    // 8) Enter para agregar desde campo código
    // ----------------------------------------
    inputCodigo.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            btnAgregar.click();
        }
    });

    // Inicializar
    recalcularTotalesYUI();
    actualizarContadorProductos();
});
