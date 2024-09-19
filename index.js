import express from 'express';
import usuarioRoutes from './routes/usuarioRoutes.js';
import db from './config/db.js';

//Creando la app
const app = express();

//habilitar lectura de datos de formularios
app.use(express.urlencoded({ extended: true }));

var templete = '';
//Conexion a la base de datos
try{
    await db.authenticate();
    db.sync();
    console.log('Conexion a la base de datos exitosa');
}catch(error){
    console.log(error);
}

//Habilitar Pug
app.set('view engine', 'pug');
app.set('views', './views');

//Carpeta publica
app.use(express.static('public'));

//Agregando el Routing
app.use('/auth', usuarioRoutes);

//Creando puerto del server
const port = 3003;
app.listen(port, () => {
    console.log(`Server running in port ${port}`)
});
