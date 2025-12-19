const express = require('express');
const app = express();

// Forzar el puerto de Render
const PORT = process.env.PORT || 10000;

console.log('=================================');
console.log('PORT variable:', process.env.PORT);
console.log('PORT a usar:', PORT);
console.log('Tipo de PORT:', typeof PORT);
console.log('=================================');

app.get('/', (req, res) => {
    res.send('¡Servidor funcionando en Render!');
});

app.get('/health', (req, res) => {
    res.json({ status: 'ok', port: PORT });
});

const server = app.listen(PORT, '0.0.0.0', () => {
    console.log('✅ SERVIDOR INICIADO');
    console.log('✅ Puerto:', PORT);
    console.log('✅ Host: 0.0.0.0');
    console.log('✅ Address:', server.address());
});

server.on('error', (err) => {
    console.error('❌ ERROR:', err);
});