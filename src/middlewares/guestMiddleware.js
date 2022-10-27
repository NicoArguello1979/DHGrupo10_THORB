function guestMiddleware (req, res, next) {
    console.log('guest')
    if (req.session.userLogged){
        return res.redirect('/perfil');

    }
    next();
}

module.exports = guestMiddleware;

//este middleware impide que un usario registrado vuelva a registrarsegit add .