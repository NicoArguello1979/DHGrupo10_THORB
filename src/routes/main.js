// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

router.get('/', mainController.index); 
router.get('/producto', mainController.producto); 
router.get('/login', mainController.login); 
 

module.exports = router;
