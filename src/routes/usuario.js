// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const usuarioController = require('../controllers/usuarioController');
const uploadFile = require ('../middlewares/multerMiddleware');
const validations = require ('../middlewares/validateRegisterMiddleware');

router.get('/', usuarioController.register); 
router.get('/register', usuarioController.register); 
router.post('/register', usuarioController.register);
router.post('/register', uploadFile.single('avatar'), validations, usuarioController.processRegister);

router.get('/', usuarioController.login); 
router.get('/login', usuarioController.login); 
router.post('/login', usuarioController.loginProcess);

module.exports = router;