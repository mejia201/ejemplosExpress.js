const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/formulario', (req, res) => {
  res.send(`
    <form method="POST" action="/formulario">
      <label for="nombre">Nombre:</label>
      <input type="text" name="nombre" id="nombre">
      <button type="submit">Enviar</button>
    </form>
  `);
});

app.post('/formulario', (req, res) => {
  const nombre = req.body.nombre;
  res.send(`Hola, ${nombre}!`);
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});