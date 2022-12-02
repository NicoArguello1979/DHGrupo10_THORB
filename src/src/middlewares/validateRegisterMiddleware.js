const path = require ('path');
const {body} = require('express-validator');

module.exports = [
    body('firstName').notEmpty().withMessage('Tienes que escribir tu nombre'),
    body('lastName').notEmpty().withMessage('Tienes que escribir tu apellido'),
    body('email').notEmpty().withMessage('Tienes que escribir un correo electronico').bail()
    .isEmail().withMessage('Debes escribir un correo valido'),
    body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
    body('avatar').custom((value, {req}) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif'];

        if (!file) {
            throw new Error ('Tienes que subir una imagen');

        } else {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)){
                throw new Error ('Los formatos permitidos son JPG - PNG - GIF');

            }
        } return true;

    })
]