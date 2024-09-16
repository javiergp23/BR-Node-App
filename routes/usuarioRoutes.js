import express from 'express';
import { formularioLogin, formularioRegistro, registrar, formularioOlvidePassword } from '../controllers/usuarioController.js';

const router = express.Router();

//Login
router.get('/login', formularioLogin);
//Registro
router.get('/registro', formularioRegistro);
router.post('/registro', registrar);
//Olvide Password
router.get('/olvide-password', formularioOlvidePassword);

export default router;