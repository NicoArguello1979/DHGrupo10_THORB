const fs = require('fs');
const path = require('path');

//const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
//const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	producto: (req, res) => {
		res.render('producto');
	},

	productCart:(req, res) => {
		res.render('productCart');
	},

	crearProducto: (req, res) => {
		res.render('product-create-form')
	},

	editarProducto: (req, res) => {
		res.render('product-edit-form')
	}, 

	
};

module.exports = controller;