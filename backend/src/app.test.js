const request = require('supertest'); 
const app = require('./app'); 

test('GET /api/version devuelve la version correcta (Actividad 1)', async () => {
    const respuesta = await request(app).get('/api/version');
    expect(respuesta.status).toBe(200);
    expect(respuesta.body.version).toBe('1.0.0');
});

test('POST /api/productos crea un producto válido', async () => {
    const respuesta = await request(app)
        .post('/api/productos')
        .send({ sku: 'A-003', nombre: 'Teclado', stock: 5 }); 
    expect(respuesta.status).toBe(201); 
    expect(respuesta.body.data.sku).toBe('A-003'); 
});