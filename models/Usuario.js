import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const Usuario = db.define('usuarios', {
    nombre: {
        //tipo de dato varchar
        type: DataTypes.STRING,
        // tipo de dato notnull
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    token: DataTypes.STRING,
    confirmado: DataTypes.BOOLEAN,
    
});

export default Usuario