// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.producto); 
router.get('/productCart', productsController.productCart); 
router.get('/crearproducto', productsController.crearProducto)
router.get('/editarproducto', productsController.editarProducto)
router.get('/productosTodos', productsController.productosTodos)
module.exports = router;
