// **** Require's ****
const express = require('express');
const router = express.Router();

// **** Controller Require ****
const mainController = require('../controllers/mainController');
const productsController = require('../controllers/productsController');
const usuarioController = require('../controllers/usuarioController');

router.get('/', mainController.index); 
router.get('/producto', productsController.producto); 
router.get('/productCart', productsController.productCart);
router.get('/login', usuarioController.login);
router.get('/register', usuarioController.register);
router.post('/register', usuarioController.processRegister);
router.get('/perfil', usuarioController.perfil);
 

module.exports = router;
