const express = require('express');
const cors = require('cors'); // [cite: 272]
const { crearProducto, listarProductos } = require('./inventoryService'); // [cite: 274]
const app = express();

app.use(cors()); // [cite: 276]
app.use(express.json()); // [cite: 278]

// ACTIVIDAD SUGERIDA 1: Nueva ruta para la versión de la API
app.get('/api/version', (req, res) => {
    res.json({ version: '1.0.0' }); // [cite: 1109]
});

app.get('/api/productos', (req, res) => {
    const items = listarProductos(); // [cite: 284]
    res.json({ data: items }); // [cite: 285]
});

app.post('/api/productos', (req, res) => {
    try {
        const nuevo = crearProducto(req.body); 
        res.status(201).json({ data: nuevo }); 
    } catch (err) {
        res.status(400).json({
            error: 'VALIDATION_ERROR', 
            message: err.message 
        });
    }
});

module.exports = app; 