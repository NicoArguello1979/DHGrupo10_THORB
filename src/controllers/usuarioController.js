const fs = require('fs');
const path = require('path');

//const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
//const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

//const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	login: (req, res) => {
		res.render('login');
	},
	processLogin: (req, res) => {
		let errors = validationResult(req);
		if (errors.isEmpty()){	
		} else {
			return res.render('login', {errors: errors.errors});
		}
	},

	
};

module.exports = controller;