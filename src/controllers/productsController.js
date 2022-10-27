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
		  };
		  if(req.file) {
			  productoNuevo.image = req.file.filename;
		  }

		  productos.push(productoNuevo)
		  const data = JSON.stringify(productos, null, ' ');
		  fs.writeFileSync(productsFilePath, data);
		
		res.redirect('/producto/productosTodos')
	},
	
	destroy: (req, res) => {
		let productos =  JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		productos = productos.filter((p)=> p.id != req.params.id);
		
		const data = JSON.stringify(productos, null, ' ');
		fs.writeFileSync(productsFilePath, data);
		res.redirect('/producto/productosTodos')
		//eliminar imagen 
	},

	update: (req, res) => {
		const productos =  JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		productos.forEach((p) =>{
			if(p.id == req.params.id) {
				p.name = req.body.name;
				p.description = req.body.description;
				p.category = req.body.category;
				p.type = req.body.type;
				p.price = req.body.price
				
				if(req.file) {
					p.image = req.file.filename
				}

			}
		});
		const data = JSON.stringify(productos, null, ' ');
		fs.writeFileSync(productsFilePath, data); 

		res.redirect('/producto/detail/' + req.params.id)
	}
};

	


module.exports = controller;