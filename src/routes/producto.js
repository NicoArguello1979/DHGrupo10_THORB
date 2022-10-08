// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.producto); 
router.get('/productCart', productsController.productCart); 
router.get('/crear', productsController.crearProducto)
router.post('/crear', productsController.store)
router.get('/edit/:id', productsController.editarProducto)
//router.put('/:id', productsController.update)
router.get('/productosTodos', productsController.productosTodos)
//router.delete('/:id', productsController.destroy)
router.get('/detail/:id', productsController.idProduct) //fijarse de poner el url asi: /detail/:id

module.exports = router;
