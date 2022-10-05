// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const usuarioController = require('../controllers/usuarioController');

router.get('/', usuarioController.login); 
router.get('/login', usuarioController.login); 
router.post('/login', [check('email').isEmail().withMessage('Mail invalido'),
check('password').isLength({min: 10}).withMessage('La contraseña debe de tener mas de diez caracteres')],
usuarioController.processLogin); 

module.exports = router;