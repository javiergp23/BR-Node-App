import express from 'express';
import usuarioRoutes from './routes/usuarioRoutes.js';

//Creando la app
const app = express();

//Habilitar Pug
app.set('view engine', 'pug');
app.set('views', './views');

//Agregando el Routing
app.use('/auth', usuarioRoutes);

//Creando puerto del server
const port = 3003;
app.listen(port, () => {
    console.log(`Server running in port ${port}`)
});
