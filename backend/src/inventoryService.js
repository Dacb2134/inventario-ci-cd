const productos = [];
let ultimoId = 0;

function crearProducto(data) {
    if (!data.sku || !data.nombre) {
        throw new Error('SKU y nombre son obligatorios'); // [cite: 245, 246]
    }
    const stockInicial = data.stock ?? 0; // [cite: 249]
    const nuevo = {
        id: ++ultimoId, // [cite: 252]
        sku: String(data.sku), // [cite: 253]
        nombre: String(data.nombre), // [cite: 254]
        stock: Number(stockInicial) // [cite: 255]
    };
    productos.push(nuevo); // [cite: 256]
    return nuevo; // [cite: 258]
}

function listarProductos() {
    return [...productos]; // [cite: 261]
}

module.exports = { crearProducto, listarProductos }; // [cite: 262]