const fs = require('fs');
const path = require('path');
const {validationResult} = require ('express-validator');
const bcryptjs = require('bcryptjs');
const user = require ('../models/user');
const { ResultWithContext } = require('express-validator/src/chain');


//const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
//const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

//const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


// const controller = {
// 	register: (req, res) => {
// 	return res.render('register');

// },
// 	processRegister: (req, res) => {
// 	return res.send('req.body');

// },
// 	login: (req, res) => {
// 	return res.render('login');

// },
// profile: (req, res) => {
// 	return res.render('perfil');

// },
// }







const controller = {
	// Root - Show all products
	register: (req, res) => {
		res.render('register');
	},
	processRegister: (req, res)=> {
		const resultValidation = validationResult(req);
		if (resultValidation.errors.lenght > 0){
			return res.render('registro', { 
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}
		let userInDB = user.findByField('email', req.body.email);
		if (userInDB) {
			return res.render('registro', { 
				errors: {
					email: {
						msg: 'Este mail ya esta registrado'
					} 
				},
				oldData: req.body
			});

		}
		

		let userToCreate = {
			...req.body,
			password: bcryptjs.hashSync(req.body.password, 10),
			avatar: req.file.filename
		}

		user.create(userToCreate);
		return res.redirect('/user/login');
	},

	login: (req, res) => {
		console.log('aca estamos')
		res.render('login');
	},
	loginProcess: (req, res) => {
		let userToLogin = user.findByField('email', req.body.email);
		
		
		if (userToLogin.password ){
			let isOkPassword = bcryptjs.compareSync(req.body.password, userToLogin.password)
			if(isOkPassword){
				delete userToLogin.password;
				req.session.userLogged = userToLogin;
				return res.redirect('user/perfil');
			}

		}
		return res.render('login', {
			errors: {
				email:{
				msg: 'La contraseña es incorrecta'
			}
		}
	});
	},
	perfil: (req, res) => {
		return res.render('perfil', {
			user: req.session.userLogged
		});


	},
	logout: (req, res) => {
		req.session.destroy();
		return res.redirect('/');
	}


	
}

module.exports = controller;