const path = require ('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images/avatars');

    },
    filename: (req, file, cb) => {
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`; //ver comillas porque esta mal copiado - video minuto 32.39
        cb(null, fileName);

    }

})

const uploadFile = multer ({storage});
module.exports = uploadFile;