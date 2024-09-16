import Sequelize from 'sequelize';

const db = new Sequelize('bienesraices_node_mvc', 'root', '', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    define: {
        timesstamps: true
    },
    pool: {
        max: 5,
        min: 0,
        //tiempo de espera para nadar un error
        acquire: 30000,
        // tiempo de espera para finalizar la conexion
        idle: 10000
     },
     operatorAliases: false
});

export default db;