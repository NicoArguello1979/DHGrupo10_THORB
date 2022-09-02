// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');
//const productsController = require('../controllers/productsController');
//const usuarioController = require('../controllers/usuarioController');

router.get('/', mainController.index); 
//router.get('/producto', productsController.producto); 
//router.get('/productCart', productsController.productCart);
//router.get('/login', usuarioController.login); 
 

module.exports = router;
