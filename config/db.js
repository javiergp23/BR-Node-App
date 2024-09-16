import Sequelize from 'sequelize';
import dotenv from 'dotenv'

dotenv.config({path: '.env'})

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS ?? '', {
    host: process.env.DB_HOST,
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