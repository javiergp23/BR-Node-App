import { check, validationResult } from 'express-validator';
import Usuario from '../models/Usuario.js';
import { generarId } from '../helpers/token.js';
import { emailRegistro } from '../helpers/emails.js';

const formularioLogin = (req, res) => {
    res.render('auth/login', {
        pagina: 'Iniciar Sesión'
    })
}
const formularioRegistro = (req, res) => {
    res.render('auth/registro', {
        pagina: 'Crear cuenta'
    })
}
//Función para registrar un usuario
const registrar = async (req, res) => {
    await check('nombre').notEmpty().withMessage('El nombre no puede ir vacio').run(req)
    await check('email').isEmail().withMessage('Eso no parece un email').run(req)
    await check('password').isLength({min: 6}).withMessage('El password debe ser de al menos 6 caracteres').run(req)
    await check('repetir_password').custom((value, {req}) => value === req.body.password).withMessage('Los Passwords no coinciden').run(req)

    let resultado = validationResult(req)

    // return res.json(resultado.array())

    //verificar que el resultado este vacio
    if(!resultado.isEmpty()){
        return res.render('auth/registro', {
            pagina: 'Crear cuenta',
            errores: resultado.array(),
            usuario: {
                nombre: req.body.nombre,
                email: req.body.email,
            }
        })
    }

    //extraer los datos
    const {nombre, email, password, token} = req.body

    const existeUsuario = await Usuario.findOne({ where : { email : req.body.email } })
    if(existeUsuario){
        return res.render('auth/registro', {
            pagina: 'Crear cuenta',
            errores: [{msg: 'El usuario ya está registrado'}],
            usuario: {
                nombre: req.body.nombre,
                email: req.body.email,
            }
        })
    }
    //almacenar un usuario
    await Usuario.create({
        nombre,
        email,
        password,
        token: generarId()
    })

    //envia email de confirmación
    emailRegistro({
        nombre,
        email,
        token
    })

    //Mensaje de confirmación
    res.render('templates/mensaje', {
        pagina: 'Cuenta creada correctamente',
        mensaje: 'Te hemos enviado un email de confirmación'
    })

    // const usuario = await Usuario.create(req.body)
    // res.json(usuario)
}

const formularioOlvidePassword = (req, res) => {
    res.render('auth/olvide-password', {
        pagina: 'Recuperar tu acceso a Bienes Raices'
    })
}

//exports
export{
    formularioLogin,
    formularioRegistro,
    registrar,
    formularioOlvidePassword
}