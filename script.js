// Variables del carrito

let cantidadProductos = 0;
let totalCompra = 0;


// Función para agregar un producto

function agregarAlCarrito(precio) {

    cantidadProductos++;

    totalCompra += precio;


    // Actualizar contador del encabezado

    document.getElementById("contador").textContent =
        cantidadProductos;


    // Actualizar cantidad del resumen

    document.getElementById("cantidad").textContent =
        cantidadProductos;


    // Actualizar total

    document.getElementById("total").textContent =
        totalCompra.toLocaleString("es-CO");
}


// Función para finalizar la compra

function finalizarCompra() {

    if (cantidadProductos === 0) {

        alert("El carrito está vacío.");

        return;
    }


    alert(
        "Compra realizada correctamente.\n\n" +
        "Productos: " + cantidadProductos + "\n" +
        "Total: $" + totalCompra.toLocaleString("es-CO")
    );
}