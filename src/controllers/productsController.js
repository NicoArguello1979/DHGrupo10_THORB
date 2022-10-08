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
		res.render('productosTodos' ,{ productos: productos });
	},

	productCart:(req, res) => {
		res.render('productCart');
	},

	crearProducto: (req, res) => {
		res.render('product-create-form')
	},

	editarProducto: (req, res) => {
		const productos =  JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		const producto = productos.find((p)=> p.id == req.params.id);
		res.render('product-edit-form', {productToEdit: producto })
	},
	
	idProduct: (req, res) => {
		const productos =  JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		const producto = productos.find((p)=> p.id == req.params.id);
		res.render('detail', {producto: producto})
	  },

	  store: (req, res) => {
		const productos =  JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

		  const productoNuevo = {
			  id: Date.now(),
			  name: req.body.name,
			  description: req.body.description,
			  image: 'default-image.jpeg',
			  category: req.body.category,
			  type: req.body.type,
			  price: req.body.price,
		  }

		  productos.push(productoNuevo)
		  const data = JSON.stringify(productos, null, ' ');
		  fs.writeFileSync(productsFilePath, data);
		
		res.redirect('/producto/productosTodos')
	}  
};

	


module.exports = controller;