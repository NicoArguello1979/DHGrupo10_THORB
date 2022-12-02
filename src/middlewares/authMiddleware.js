function authtMiddleware (req, res, next) {
    console.log('middle');
    if (!req.session.userLogged){
         return res.redirect('/login');

     }
     next();
 }

 module.exports = authtMiddleware;

// si tengo a alguien en sesion lo dejo logueado