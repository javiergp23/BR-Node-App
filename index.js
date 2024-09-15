import express from 'express';
import usuarioRoutes from './routes/usuarioRoutes.js';

//Creando la app
const app = express();

//Agregando el Routing
app.use('/', usuarioRoutes);


//Creando puerto del server
const port = 3003;
app.listen(port, () => {
    console.log(`Server running in port ${port}`)
});
