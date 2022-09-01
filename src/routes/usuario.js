// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const usuarioController = require('../controllers/mainController');

router.get('/login', usuarioController.login); 


module.exports = router;