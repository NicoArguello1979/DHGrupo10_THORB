const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productos.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	producto: (req, res) => {
		res.render('producto');
	},
	productosTodos: (req, res) => {
		const productos = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
		res.render('productosTodos' ,{ productos: productos, toThousand });
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
	
	idProduct: (req, res) => {
		const productos =  JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		const producto = productos.find((p)=> p.id == req.params.id);
		res.render('detail', {producto: producto})
	  },

	  store: (req, res) => {
		console.log(req.body);
		res.redirect('/producto')
	}  
};

	


module.exports = controller;