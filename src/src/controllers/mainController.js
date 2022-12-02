const fs = require('fs');
const path = require('path');

//const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
//const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		res.render('index' ,);
	},
	search: (req, res) => {
		let search = req.query.keywords;
		search = search.toLowerCase();

		const resultado = products.filter( (p) => p.name.toLowerCase().includes(search));

		res.render("results", { productos: resultado, search: search});
	},
	
	
};

module.exports = controller;
