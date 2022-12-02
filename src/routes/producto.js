// ************ Require's ************
const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

var storage = multer.diskStorage ({
    destination: function (req, file, cb) {
        cb(null, 'public/images/productos')
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '' + file.originalname)
    }
});
const upload = multer ({storage})
 //esto va haber que llevarlo a la carpeta middleware y requerirlo ahi 
// ************ Controller Require ************
const productsController = require('../controllers/productsController');

console.log("estoy en producto");
/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.producto); 
router.get('/productCart', productsController.productCart); 
router.get('/crear', productsController.crearProducto)
router.post('/crear', upload.single('fotoProducto'),  productsController.store)
router.get('/edit/:id', productsController.editarProducto)
router.put('/edit/:id', upload.single('fotoProducto'), productsController.update)
router.get('/productosTodos', productsController.productosTodos)
router.delete('/eliminar/:id', productsController.destroy)
router.get('/detail/:id', productsController.idProduct) 

module.exports = router;
