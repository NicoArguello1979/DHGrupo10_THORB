// **** Require's ****
const express = require('express');
const router = express.Router();
const guestMiddleware = require ('../middlewares/guestMiddleware');
const uploadFile = require ('../middlewares/multerMiddleware');
// **** Controller Require ****
const mainController = require('../controllers/mainController');
const productsController = require('../controllers/productsController');
const usuarioController = require('../controllers/usuarioController');
const validations = require ('../middlewares/validateRegisterMiddleware');
const authMiddleware = require ('../middlewares/authMiddleware');

router.get('/', mainController.index); 
// router.get('/producto', productsController.producto); 
// router.get('/productCart', productsController.productCart);
// router.get('/login', usuarioController.login);


 router.get('/login', guestMiddleware, usuarioController.login); 
 router.post('/login', usuarioController.loginProcess);
 router.get('/register', guestMiddleware, usuarioController.register);
 //router.post('/register', usuarioController.register);
 router.post('/register', uploadFile.single('avatar'), validations, usuarioController.processRegister);
//  router.post('/perfil/',authMiddleware, usuarioController.perfil);

module.exports = router;
