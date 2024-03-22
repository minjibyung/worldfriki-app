const express = require('express');

// Crear una instancia de Express
const app = express();

// Configurar una ruta básica
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Definir el puerto en el que escuchará el servidor
const PORT = process.env.PORT || 3000;

// Iniciar el servidor y escuchar en el puerto especificado
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});