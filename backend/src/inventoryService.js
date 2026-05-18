const productos = [];
let ultimoId = 0;

// Subfunción aislada para cumplir estrictamente con la Actividad 2
function validarDatosProducto(data) {
    if (!data.sku || !data.nombre) {
        throw new Error('SKU y nombre son obligatorios');
    }
}

function crearProducto(data) {
    // Ejecución de la validación extraída
    validarDatosProducto(data);

    const stockInicial = data.stock ?? 0;
    const nuevo = {
        id: ++ultimoId,
        sku: String(data.sku),
        nombre: String(data.nombre),
        stock: Number(stockInicial)
    };
    productos.push(nuevo);
    return nuevo;
}

function listarProductos() {
    return [...productos];
}

module.exports = { crearProducto, listarProductos };