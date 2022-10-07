// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const usuarioController = require('../controllers/usuarioController');
const uploadFile = require ('../middlewares/multerMiddleware');
const validations = require ('../middlewares/validateRegisterMiddleware');
const guestMiddleware = require ('../middlewares/guestMiddleware');
const authMiddleware = require ('../middlewares/authMiddleware');

router.get('/', usuarioController.register); 
router.get('/register', guestMiddleware, usuarioController.register); 
router.post('/register', usuarioController.register);
router.post('/register', uploadFile.single('avatar'), validations, usuarioController.processRegister);

router.get('/', usuarioController.login); 
router.get('/login', guestMiddleware, usuarioController.login); 
router.post('/login', usuarioController.loginProcess);

router.get('/', usuarioController.perfil);
router.get('/logout', usuarioController.logout);
router.post('/perfil/',authMiddleware, usuarioController.perfil);

module.exports = router;